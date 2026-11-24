# @cardog-icons/vin

The VIN mark: an identity mark for a vehicle, drawn from its VIN as a small
monochrome micro code in the text colour.

- The same VIN gives the same mark on every surface and in every 1.x release.
- It fills in as a VIN is typed.
- It coarsens with size without smudging.
- Where it has to be scanned, it becomes a real Data Matrix that reads back to
  the exact VIN.

Pure TypeScript: no dependencies, no DOM, no randomness, SSR-safe. The React
and React Native components live in
[`@cardog-icons/react`](../react) and [`@cardog-icons/react-native`](../react-native).

## Installation

```bash
npm install @cardog-icons/vin
# or
pnpm add @cardog-icons/vin
```

## Usage

```ts
import { vinMarkSvg, vinMark, vinGrid, cleanVinInput, readVin, vinLabel } from "@cardog-icons/vin";

vinMarkSvg("2HGFE2F50TH102099", { size: 20 });                  // "<svg …>…</svg>"
vinMarkSvg(vin, { size: 64, scannable: true });                 // a Data Matrix for a label or PDF
vinMark(vin, { size, grain, shape, frame, inverted, scannable, partial, title }); // { tag, attrs, children }
vinGrid(vin, { grain, scannable, partial });                    // { n, data, frame, kind, quiet, badCheck, filled }
cleanVinInput("*i2hgfe2f50th102099*");                          // { value: "2HGFE2F50TH102099", rejected: [] }
readVin("2HGFE2F50TH102099");                                   // { kind: "vin", wmi, vds, check, year, plant, serial, … }
```

`vinMark` returns an element tree with SVG attribute names. A renderer maps
the tags 1:1 and camel-cases the attributes; the React component is exactly
that. The React Native component maps `svg` to `Svg` and `path` to `Path`,
and sets `fill` to a `color` prop, since native has no `currentColor`.

```tsx
import { VinMark, VinInput } from "@cardog-icons/react";

<VinMark vin="2HGFE2F50TH102099" size={20} title={false} />   // beside a label
<VinMark vin={vin} size={48} />                                // named by the VIN
<VinMark vin={vin} size={64} scannable />                      // scans
<VinInput value={vin} onValueChange={(v, { complete, valid }) => setVin(v)} />
```

```tsx
import { VinMark } from "@cardog-icons/react-native";

<VinMark vin={vin} size={20} color={theme.text} />
```

## The drawing

**Frame.** The frame follows Data Matrix: a solid L on the left and bottom,
and timing marks along the top and right, in the same ink as the data. A
Japanese chassis number has the L only. A legacy serial has the top timing
only.

**The zoned field (default).** A 16 × 16 field. Every VIN position owns fixed
cells, so a typed prefix fills a stable region:

| VIN | Part | Cells |
| --- | --- | --- |
| 1-3 | WMI | rows 0-5: one 2-row band per character, in 2 × 2 blocks (the coarse grain is the maker) |
| 4-8 | VDS | rows 6-10, one row each |
| 9 | check digit | row 11 |
| 10 | model year | row 12, left half |
| 11 | plant | row 12, right half |
| 12-17 | serial | rows 13-15, half a row each |

- Each character's bits are a frozen hash of (ENCODING, position, character),
  30 to 50% dark, so the texture is even and light.
- Vehicles from the same line, plant and year share every row above the serial.
- A chassis number or legacy serial spreads its characters over the field in
  reading order. No VIN gives the empty field inside a quiet frame.

**Grain** (`grain`):

| Grain | Field | Auto range |
| --- | --- | --- |
| coarse | 4 × 4 | to 20px |
| fine | 8 × 8 | to 34px |
| full | 16 × 16 | above 34px |

Coarser grains are the full field downsampled (a block is dark when 40% of it
is), so the 16px mark is the 64px mark seen from far away. Below 40px square
modules merge into runs with crisp edges; from 40px each module is its own
square with a hairline of air.

**Bad check digit.** A 17-character VIN whose check digit does not match
leaves out the top module of the L, at every grain and in the Data Matrix too,
where a scanner still reads it. The SVG also carries `data-check="invalid"`.

**Scannable** (`scannable: true`). A real Data Matrix ECC 200, 18 × 18 for
every VIN (ASCII encodation, Reed-Solomon over GF(256)/301, Annex F
placement). The tests decode it back with ZXing. Scan on screen from 48px;
print at 10mm or more. It does not fill progressively, since its codewords
depend on the whole string.

**Options.** `shape`: `square` (default), `rounded` or `dot`. `frame`: a quiet
hairline frame with one module of margin. `inverted`: modules knocked out of
an ink tile, one even-odd path. `partial`: the value is a VIN being typed.

## Guarantees

- **Frozen.** `ENCODING = "vm1"` salts every hash. The golden test holds
  literal bit patterns for three VINs at three grains, and the snapshots hold
  the SVG strings. Tests run with `jest --ci`, which never writes a snapshot.
- **Versioned with the encoding.** The package's major version is the
  encoding: 1.x draws `vm1` (a test enforces it). A mark can only change with
  a new ENCODING and a new major; minors and patches add options and
  helpers, never move a module.
- **Accessible.** The accessible name is the identifier: `VIN …`,
  `Chassis number …`, `Serial …`, `No VIN`. Pass `title: false` beside visible
  text; the mark is then `aria-hidden`.
- **Fast.** Every layer is one `<path>`, never a rect per module. `vinMark`
  memoises the last 2000 trees; 500 distinct marks render in well under a
  second in the tests.

## License

MIT
