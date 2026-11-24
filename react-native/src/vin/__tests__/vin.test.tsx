import * as React from "react";
import { vinMark } from "@cardog-icons/vin";
import { vinMarkElement } from "../VinMark";

jest.mock("react-native-svg", () => {
  const Svg = (p: Record<string, unknown>) => p;
  const Path = (p: Record<string, unknown>) => p;
  return { __esModule: true, default: Svg, Path };
});

const HONDA = "2HGFE2F50TH102099";
type El = React.ReactElement<Record<string, unknown> & { children: React.ReactElement<Record<string, unknown>>[] }>;

describe("VinMark (native)", () => {
  it("maps the same tree onto Svg and Path, currentColor resolved to the colour", () => {
    const el = vinMarkElement({ vin: HONDA, size: 20, color: "#123456" }) as El;
    const tree = vinMark(HONDA, { size: 20 });
    expect(el.props.viewBox).toBe("0 0 20 20");
    expect(el.props.accessibilityLabel).toBe(`VIN ${HONDA}`);
    const paths = el.props.children;
    expect(paths).toHaveLength(tree.children!.length);
    paths.forEach((p, i) => {
      expect(p.props.d).toBe(tree.children![i].attrs.d);
      expect(p.props.fill).toBe("#123456");
      expect(p.props.shapeRendering).toBe("crispEdges");
      expect(p.props["data-part"]).toBeUndefined();
    });
  });

  it("hides from screen readers when the label is beside it", () => {
    const el = vinMarkElement({ vin: HONDA, title: false }) as El;
    expect(el.props.accessible).toBe(false);
    expect(el.props.accessibilityLabel).toBeUndefined();
    expect(el.props.importantForAccessibility).toBe("no-hide-descendants");
    expect(el.props.accessibilityElementsHidden).toBe(true);
  });

  it("is an image named by the VIN by default", () => {
    const el = vinMarkElement({ vin: HONDA }) as El;
    expect(el.props.accessible).toBe(true);
    expect(el.props.accessibilityRole).toBe("image");
    expect(el.props.accessibilityElementsHidden).toBeUndefined();
  });

  it("resolves currentColor on the inverted tile and keeps its even-odd rule", () => {
    const el = vinMarkElement({ vin: HONDA, size: 48, inverted: true, color: "#fff" }) as El;
    expect(el.props.children).toHaveLength(1);
    expect(el.props.children[0].props.fill).toBe("#fff");
    expect(el.props.children[0].props.fillRule).toBe("evenodd");
  });

  it("draws the scannable Data Matrix", () => {
    const el = vinMarkElement({ vin: HONDA, size: 64, scannable: true }) as El;
    expect(el.props.children[0].props.d).toBe(vinMark(HONDA, { size: 64, scannable: true }).children![0].attrs.d);
  });
});
