import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { vinMarkSvg } from "@cardog-icons/vin";
import { VinInput, VinMark } from "../../index";
import { vinInputView } from "../VinInput";

const HONDA = "2HGFE2F50TH102099";

describe("VinMark", () => {
  it("draws the same mark as vinMarkSvg, with React's attribute names", () => {
    const html = renderToStaticMarkup(<VinMark vin={HONDA} size={20} />);
    expect(html).toContain(`aria-label="VIN ${HONDA}"`);
    expect(html).toContain('shape-rendering="crispEdges"');
    expect(html).toContain('data-vin-mark="vm1"');
    const paths = (s: string) => s.match(/ d="[^"]+"/g);
    expect(paths(html)).toEqual(paths(vinMarkSvg(HONDA, { size: 20 })));
  });

  it("is hidden beside visible text and takes a colour", () => {
    const html = renderToStaticMarkup(<VinMark vin={HONDA} size={16} title={false} color="#0a0a0a" className="m" />);
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain('color="#0a0a0a"');
    expect(html).toContain('class="m"');
  });

  it("keeps its own flex-shrink when given a style", () => {
    const html = renderToStaticMarkup(<VinMark vin={HONDA} style={{ opacity: 0.5 }} />);
    expect(html).toMatch(/style="[^"]*flex-shrink:0/);
    expect(html).toMatch(/style="[^"]*opacity:0.5/);
  });

  it("lets a consumer prop win over the tree's attribute", () => {
    const html = renderToStaticMarkup(<VinMark vin={HONDA} aria-label="Unit 42" />);
    expect(html).toContain('aria-label="Unit 42"');
    expect(html).not.toContain(`aria-label="VIN ${HONDA}"`);
  });

  it("renders a list of hundreds without a rect per module", () => {
    const vins = Array.from({ length: 300 }, (_, i) => `2HGFE2F50TH${String(100000 + i * 7)}`);
    const t = Date.now();
    const html = renderToStaticMarkup(
      <ul>
        {vins.map((v) => (
          <li key={v}>
            <VinMark vin={v} size={20} title={false} />
          </li>
        ))}
      </ul>,
    );
    expect(Date.now() - t).toBeLessThan(2000);
    expect(html).not.toContain("<rect");
    expect(html.match(/<svg/g)).toHaveLength(300);
  });

  it("flags a bad check digit", () => {
    expect(renderToStaticMarkup(<VinMark vin="5YJYGDEE3LF052483" />)).toContain('data-check="invalid"');
  });
});

describe("VinInput", () => {
  it("cleans the value and reports progress", () => {
    const html = renderToStaticMarkup(<VinInput defaultValue="2hgfe2f5" />);
    expect(html).toContain('value="2HGFE2F5"');
    expect(html).toContain("8 of 17");
    expect(html).toContain('data-state="typing"');
  });

  it("names a bad check digit under the field", () => {
    const html = renderToStaticMarkup(<VinInput defaultValue="5YJYGDEE3LF052483" />);
    expect(html).toContain('data-state="invalid"');
    expect(html).toContain("the VIN works out to 7");
  });

  it("announces the check result, not every keystroke", () => {
    const typing = renderToStaticMarkup(<VinInput defaultValue="2hgfe2f5" />);
    expect(typing).toMatch(/<span role="status" aria-live="polite"[^>]*><\/span>/);
    expect(typing).not.toMatch(/aria-live="polite"[^>]*>8 of 17/);
    const done = renderToStaticMarkup(<VinInput defaultValue={HONDA} />);
    expect(done).toMatch(/aria-live="polite"[^>]*>Check digit matches<\/span>/);
  });

  it("describes each state of the field", () => {
    expect(vinInputView("", [])).toMatchObject({ state: "empty", message: "", announce: "", complete: false, valid: null });
    expect(vinInputView("2HGFE", [])).toMatchObject({ state: "typing", message: "5 of 17", announce: "" });
    expect(vinInputView("2HGFE", ["O", "O", "I"])).toMatchObject({
      state: "invalid",
      message: "A VIN never uses O, I: left out",
      announce: "A VIN never uses O, I: left out",
    });
    expect(vinInputView(HONDA, [])).toMatchObject({ state: "valid", complete: true, valid: true, announce: "Check digit matches" });
    expect(vinInputView("5YJYGDEE3LF052483", [])).toMatchObject({ state: "invalid", complete: true, valid: false });
    expect(vinInputView("ZRR80-0301309", [])).toMatchObject({ isVin: false, complete: false, valid: null, message: "", state: "typing" });
  });

  it("names the input through the caller's label and id", () => {
    const html = renderToStaticMarkup(<VinInput id="vin" defaultValue="2H" />);
    expect(html).toContain('id="vin"');
    expect(html).toContain('aria-describedby="vin-msg"');
    expect(html).toContain('id="vin-msg"');
  });

  it("keeps the motion when unstyled and drops the look", () => {
    const html = renderToStaticMarkup(<VinInput defaultValue={HONDA} unstyled />);
    expect(html).toContain("@keyframes cardog-vin-fill");
    expect(html).not.toContain(":where(.cardog-vin-input__field)");
    expect(html).toContain("Check digit matches");
  });
});
