import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { vinMarkSvg } from "@cardog-icons/vin";
import { VinInput, VinMark } from "../../index";

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

  it("keeps the motion when unstyled and drops the look", () => {
    const html = renderToStaticMarkup(<VinInput defaultValue={HONDA} unstyled />);
    expect(html).toContain("@keyframes cardog-vin-fill");
    expect(html).not.toContain(":where(.cardog-vin-input__field)");
    expect(html).toContain("Check digit matches");
  });
});
