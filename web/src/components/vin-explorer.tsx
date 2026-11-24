"use client";

import React, { useMemo, useState } from "react";
import { Check, Copy, Download } from "lucide-react";
import { VinInput, VinMark } from "@cardog-icons/react";
import { describeVin, vinMarkSvg, type VinMarkGrain, type VinMarkShape } from "@cardog-icons/vin";
import { saveAs } from "file-saver";
import { cn } from "../lib/utils";

const EXAMPLES = [
  { label: "VIN", value: "2HGFE2F50TH102099" },
  { label: "Sibling", value: "2HGFE2F50TH102183" },
  { label: "Bad check digit", value: "5YJYGDEE3LF052483" },
  { label: "Chassis number", value: "ZRR80-0301309" },
  { label: "Legacy serial", value: "124379N500001" },
];

const SIZES = [16, 20, 24, 32, 48, 64, 96] as const;
const GRAINS: VinMarkGrain[] = ["auto", "coarse", "fine", "full"];
const SHAPES: VinMarkShape[] = ["square", "rounded", "dot"];

function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
  disabled,
}: {
  label: string;
  value: T;
  options: readonly T[];
  onChange: (v: T) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <div role="radiogroup" aria-label={label} className={cn("inline-flex rounded-md border p-0.5", disabled && "opacity-50")}>
        {options.map((o) => (
          <button
            key={o}
            type="button"
            role="radio"
            aria-checked={value === o}
            disabled={disabled}
            onClick={() => onChange(o)}
            className={cn(
              "rounded px-2.5 py-1 text-sm capitalize transition-colors",
              value === o ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
      <input type="checkbox" className="h-4 w-4 accent-current" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  );
}

export function VinExplorer() {
  const [vin, setVin] = useState(EXAMPLES[0].value);
  const [grain, setGrain] = useState<VinMarkGrain>("auto");
  const [shape, setShape] = useState<VinMarkShape>("square");
  const [frame, setFrame] = useState(false);
  const [inverted, setInverted] = useState(false);
  const [scannable, setScannable] = useState(false);
  const [copied, setCopied] = useState(false);

  const partial = !vin.includes("-") && vin.length > 0 && vin.length < 17;
  const opts = { grain, shape, frame, inverted, scannable, partial: partial && !scannable };
  const svg = useMemo(() => vinMarkSvg(vin, { size: 96, ...opts }), [vin, grain, shape, frame, inverted, scannable, partial]); // eslint-disable-line react-hooks/exhaustive-deps

  const copy = async () => {
    await navigator.clipboard.writeText(svg);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="vin-field" className="text-sm font-medium">
            Type, paste or scan a VIN
          </label>
          <VinInput id="vin-field" value={vin} onValueChange={(v) => setVin(v)} />
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map((e) => (
              <button
                key={e.value}
                type="button"
                onClick={() => setVin(e.value)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs transition-colors hover:bg-accent",
                  vin === e.value && "border-foreground",
                )}
              >
                {e.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setVin("")}
              className="rounded-full border px-3 py-1 text-xs transition-colors hover:bg-accent"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Segmented label="Grain" value={grain} options={GRAINS} onChange={setGrain} disabled={scannable} />
          <Segmented label="Shape" value={shape} options={SHAPES} onChange={setShape} />
        </div>
        <div className="flex flex-wrap gap-5">
          <Toggle label="Scannable (Data Matrix)" checked={scannable} onChange={setScannable} />
          <Toggle label="Frame" checked={frame} onChange={setFrame} />
          <Toggle label="Inverted" checked={inverted} onChange={setInverted} />
        </div>

        <div className="rounded-lg border p-4 text-sm text-muted-foreground">
          <p className="font-mono text-foreground break-all">{describeVin(vin) || "No VIN"}</p>
          {scannable ? (
            <p className="mt-2">
              An 18 &times; 18 Data Matrix ECC 200. Point a phone or handheld scanner at the 96px mark: it reads back
              the exact characters. Scan on screen from 48px; print at 10mm or more.
            </p>
          ) : (
            <p className="mt-2">
              The maker is the top band, the line and check digit the middle rows, the year, plant and serial the foot.
              Siblings from one line share everything above the serial.
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="rounded-xl border p-6">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            {SIZES.map((size) => (
              <figure key={size} className="flex flex-col items-center gap-2">
                <VinMark vin={vin} size={size} {...opts} title={false} />
                <figcaption className="text-[11px] tabular-nums text-muted-foreground">{size}px</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border p-6 flex items-center justify-center bg-background text-foreground">
            <VinMark vin={vin} size={96} {...opts} />
          </div>
          <div className="rounded-xl border p-6 flex items-center justify-center bg-foreground text-background">
            <VinMark vin={vin} size={96} {...opts} title={false} />
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy SVG"}
          </button>
          <button
            type="button"
            onClick={() => saveAs(new Blob([svg], { type: "image/svg+xml" }), `vin-mark-${vin || "empty"}.svg`)}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent"
          >
            <Download className="h-4 w-4" />
            Download SVG
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg border bg-muted p-4">
          <pre className="text-sm">
            <code>{`import { VinMark, VinInput } from "@cardog-icons/react";

<VinMark vin="${vin || "2HGFE2F50TH102099"}" size={48}${grain !== "auto" && !scannable ? ` grain="${grain}"` : ""}${shape !== "square" ? ` shape="${shape}"` : ""}${frame ? " frame" : ""}${inverted ? " inverted" : ""}${scannable ? " scannable" : ""} />
<VinInput onValueChange={(vin, { valid }) => save(vin)} />`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
