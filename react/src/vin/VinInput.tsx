import * as React from "react";
import { QUIET_OPACITY, cleanVinInput, expectedCheckDigit, geometry, vinGrid } from "@cardog-icons/vin";

export interface VinInputState {
  /** 17 characters of a VIN (a chassis number is never complete). */
  complete: boolean;
  /** Whether the check digit matches. Null until 17 characters. */
  valid: boolean | null;
}

export interface VinInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "defaultValue" | "onChange" | "size"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string, state: VinInputState) => void;
  /** Class on the wrapper. The parts carry plain class names: `cardog-vin-input__field`, `__mark`, `__control`, `__message`. */
  className?: string;
  /** Leave out the built-in styles (they sit in `:where()`, so any class already wins over them). */
  unstyled?: boolean;
}

const MARK = 24;

export interface VinInputView extends VinInputState {
  /** The value reads as a VIN (a chassis number carries a hyphen). */
  isVin: boolean;
  /** The line under the field. */
  message: string;
  /**
   * What the live region says: refused characters and the check result only.
   * The running count is shown, not announced, so a screen reader is not
   * interrupted on every keystroke.
   */
  announce: string;
  /** The wrapper's data-state. */
  state: "empty" | "typing" | "complete" | "valid" | "invalid";
}

/** What the field shows for a cleaned value and the characters just refused. Pure. */
export function vinInputView(value: string, refused: readonly string[]): VinInputView {
  const isVin = !value.includes("-");
  const complete = isVin && value.length === 17;
  const expected = complete ? expectedCheckDigit(value) : null;
  const valid = complete ? expected === value[8] : null;
  const refusedMsg = refused.length ? `A VIN never uses ${Array.from(new Set(refused)).join(", ")}: left out` : "";
  const checkMsg =
    valid === false
      ? `Check digit is ${value[8]}, the VIN works out to ${expected ?? "?"}: check the characters`
      : valid
        ? "Check digit matches"
        : "";
  const message = refusedMsg || checkMsg || (isVin && value ? `${value.length} of 17` : "");
  const state = valid === false || refused.length ? "invalid" : valid ? "valid" : complete ? "complete" : value ? "typing" : "empty";
  return { isVin, complete, valid, message, announce: refusedMsg || checkMsg, state };
}

const VISUALLY_HIDDEN: React.CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
  border: 0,
};

/* React 18's useId keeps server and client ids equal; older Reacts get a stable per-instance id. */
let seq = 0;
const useStableId: () => string =
  (React as unknown as { useId?: () => string }).useId ??
  function useFallbackId() {
    const ref = React.useRef<string>();
    if (!ref.current) ref.current = `cardog-vin-${++seq}`;
    return ref.current;
  };

/*
 * Defaults at zero specificity, so a consumer's classes win without !important.
 * The keyframes ease each module in as its character is typed; none under
 * prefers-reduced-motion.
 */
const MOTION = `
@keyframes cardog-vin-fill{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:scale(1)}}
`;
const LOOK = `
:where(.cardog-vin-input){display:flex;flex-direction:column;gap:4px}
:where(.cardog-vin-input__field){display:flex;align-items:center;gap:10px;height:40px;padding:0 12px 0 8px;border:1px solid rgba(128,128,128,.35);border-radius:8px;transition:border-color .15s}
:where(.cardog-vin-input__field):focus-within{outline:2px solid rgba(128,128,128,.5);outline-offset:1px}
:where(.cardog-vin-input[data-state="invalid"] .cardog-vin-input__field){border-color:rgba(220,38,38,.6)}
:where(.cardog-vin-input__control){flex:1;min-width:0;border:0;background:transparent;color:inherit;font:inherit;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:14px;letter-spacing:.08em;text-transform:uppercase;outline:none}
:where(.cardog-vin-input__control)::placeholder{text-transform:none;letter-spacing:normal;opacity:.55}
:where(.cardog-vin-input__message){min-height:16px;margin:0;font-size:11px;opacity:.7}
:where(.cardog-vin-input[data-state="invalid"] .cardog-vin-input__message){color:rgb(220,38,38);opacity:1}
`;
const MOTION_MARK = `
.cardog-vin-input__mark{flex-shrink:0}
.cardog-vin-input__mark .vm-cell{transform-box:fill-box;transform-origin:center;animation:cardog-vin-fill .18s cubic-bezier(.2,.8,.2,1) both}
.cardog-vin-input__mark .vm-finder{transition:opacity .2s ease-out}
@media (prefers-reduced-motion:reduce){.cardog-vin-input__mark .vm-cell{animation:none}.cardog-vin-input__mark .vm-finder{transition:none}}
`;

/** The live mark: one element per module so each can ease in; a single instance, so the cost is fine. */
function LiveMark({ value }: { value: string }) {
  const g = React.useMemo(() => vinGrid(value, { grain: "fine", partial: true }), [value]);
  const geo = geometry(g, MARK, false);
  const cells: React.ReactElement[] = [];
  const finder: React.ReactElement[] = [];
  for (let i = 0; i < g.n * g.n; i++) {
    const x = geo.o + (i % g.n) * geo.m;
    const y = geo.o + Math.floor(i / g.n) * geo.m;
    if (g.data[i]) cells.push(<rect key={i} className="vm-cell" x={x} y={y} width={geo.m} height={geo.m} />);
    if (g.frame[i]) finder.push(<rect key={i} x={x} y={y} width={geo.m} height={geo.m} />);
  }
  return (
    <svg
      viewBox={`0 0 ${MARK} ${MARK}`}
      width={MARK}
      height={MARK}
      aria-hidden="true"
      className="cardog-vin-input__mark"
      shapeRendering="crispEdges"
      fill="currentColor"
    >
      <g className="vm-finder" opacity={g.quiet ? QUIET_OPACITY : 1}>
        {finder}
      </g>
      <g>{cells}</g>
    </svg>
  );
}

/**
 * A VIN field with its mark inside, filling in as it is typed. Each character
 * fills its own zone of the code; deleting un-fills. At 17 characters the
 * check digit resolves: a match settles the frame to full ink, a mismatch
 * leaves the top module of the L out and says so under the field.
 *
 * Takes typing, paste, a scanner's string (Code 39 asterisks, the leading
 * import "I") and lower case; I, O and Q are refused inline. A chassis number
 * (model code, hyphen, serial) is kept as typed.
 *
 *   <VinInput value={vin} onValueChange={(v, s) => setVin(v)} />
 */
export const VinInput = React.forwardRef<HTMLInputElement, VinInputProps>(function VinInput(
  { value: controlled, defaultValue = "", onValueChange, className, unstyled, id, placeholder = "VIN", ...rest },
  ref,
) {
  const [own, setOwn] = React.useState(() => cleanVinInput(defaultValue).value);
  const value = controlled !== undefined ? cleanVinInput(controlled).value : own;
  const [refused, setRefused] = React.useState<string[]>([]);
  const autoId = useStableId();
  const inputId = id ?? autoId;
  const msgId = `${inputId}-msg`;

  React.useEffect(() => {
    if (!refused.length) return;
    const t = setTimeout(() => setRefused([]), 2600);
    return () => clearTimeout(t);
  }, [refused]);

  const view = vinInputView(value, refused);

  const set = (raw: string) => {
    const c = cleanVinInput(raw);
    setRefused(c.rejected);
    if (controlled === undefined) setOwn(c.value);
    const next = vinInputView(c.value, []);
    onValueChange?.(c.value, { complete: next.complete, valid: next.valid });
  };

  return (
    <div className={className ? `cardog-vin-input ${className}` : "cardog-vin-input"} data-state={view.state}>
      <style>{unstyled ? MOTION + MOTION_MARK : MOTION + LOOK + MOTION_MARK}</style>
      <div className="cardog-vin-input__field">
        <LiveMark value={view.isVin ? value : ""} />
        <input
          ref={ref}
          id={inputId}
          value={value}
          onChange={(e) => set(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          autoCapitalize="characters"
          spellCheck={false}
          inputMode="text"
          aria-describedby={view.message ? msgId : undefined}
          aria-invalid={view.valid === false || undefined}
          className="cardog-vin-input__control"
          {...rest}
        />
      </div>
      <p id={msgId} className="cardog-vin-input__message">
        {view.message}
      </p>
      <span role="status" aria-live="polite" style={VISUALLY_HIDDEN}>
        {view.announce}
      </span>
    </div>
  );
});

VinInput.displayName = "VinInput";

export default VinInput;
