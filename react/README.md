# @cardog-icons/react

React components for car brand logos and icons.

## Features

- **380+ optimized SVG icons** for car brands
- **Two variants**: Color (default) and Mono (dark mode optimized)
- TypeScript support with full type definitions
- Tree-shakable, only import what you need
- Easy customization of size, color, and other SVG props
- Lightweight and fast

## Installation

```bash
npm install @cardog-icons/react
# or
yarn add @cardog-icons/react
# or
pnpm add @cardog-icons/react
```

## Usage

### Importing specific icons

```jsx
import {
  BMWLogo,
  BMWLogoDark,
  AudiIcon,
  TeslaWordmark,
} from "@cardog-icons/react";

function App() {
  return (
    <div>
      {/* Color variants (default) */}
      <BMWLogo size={48} />
      <AudiIcon size={32} />
      <TeslaWordmark height={24} width={120} />

      {/* Mono/Dark variants - great for dark mode */}
      <BMWLogoDark size={48} className="text-white" />
    </div>
  );
}
```

### Using the generic Icon component

```jsx
import { Icon } from "@cardog-icons/react";

function App() {
  return (
    <div>
      <Icon name="BMWLogo" size={48} />
      <Icon name="BMWLogoDark" size={48} />
      <Icon name="AudiIcon" size={32} />
    </div>
  );
}
```

### Using the useIcon hook

```jsx
import { useIcon } from "@cardog-icons/react";

function CustomIcon({ name, ...props }) {
  const icon = useIcon({ name, ...props });

  return <div className="custom-icon-wrapper">{icon}</div>;
}
```

## Icon Variants

Each brand comes in two variants:

| Variant | Suffix | Description                                  |
| ------- | ------ | -------------------------------------------- |
| Color   | (none) | Full-color brand logos for light backgrounds |
| Mono    | `Dark` | Single-color icons for dark mode UIs         |

## Available Icon Types

- **Icon**: Compact badge/emblem icon
- **Logo**: Full brand logo
- **LogoHorizontal**: Horizontal logo with text
- **Wordmark**: Text-only brand name

### Naming Examples

| Type       | Color               | Mono                    |
| ---------- | ------------------- | ----------------------- |
| Icon       | `BMWIcon`           | `BMWIconDark`           |
| Logo       | `BMWLogo`           | `BMWLogoDark`           |
| Horizontal | `BMWLogoHorizontal` | `BMWLogoHorizontalDark` |
| Wordmark   | `BMWWordmark`       | `BMWWordmarkDark`       |

## Available Brands

Acura, Alfa Romeo, Aston Martin, Audi, Bentley, BMW, Bugatti*, Buick*, BYD, Cadillac, Chevrolet, Chrysler, Dodge, Ferrari, Fiat, Ford, Genesis, GMC, Honda, Hummer, Hyundai, Infiniti, Jaguar, Jeep, Kia, Koenigsegg*, Lamborghini, Land Rover, Lexus, Lincoln, Lotus, Lucid, Maserati, Mazda, Mercedes-Benz, McLaren, Mini, Mitsubishi, Nissan, Pagani*, Polestar, Porsche, RAM, Rivian\*, Rolls-Royce, Subaru, Tesla, Toyota, VinFast, Volkswagen, Volvo

\*Mono variant only

## Props

All icon components accept the following props:

| Prop          | Type                            | Default | Description                    |
| ------------- | ------------------------------- | ------- | ------------------------------ |
| `size`        | `number \| string`              | `24`    | Size for both width and height |
| `width`       | `number \| string`              | -       | Override width                 |
| `height`      | `number \| string`              | -       | Override height                |
| `className`   | `string`                        | -       | CSS class name                 |
| `...svgProps` | `React.SVGProps<SVGSVGElement>` | -       | Any valid SVG prop             |

## The VIN mark

`VinMark` draws a vehicle's identity mark from its VIN (see
[`@cardog-icons/vin`](../vin)). It is monochrome in `currentColor`, renders on
the server, and is memoised.

```jsx
import { VinMark, VinInput } from "@cardog-icons/react";

<VinMark vin="2HGFE2F50TH102099" size={20} title={false} />  {/* beside a label */}
<VinMark vin={vin} size={48} />                               {/* named by the VIN */}
<VinMark vin={vin} size={64} scannable />                     {/* a real Data Matrix */}
<VinMark vin={vin} shape="dot" frame />
```

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `vin` | `string \| null` | | The VIN, chassis number or legacy serial |
| `size` | `number` | `24` | Width and height in px |
| `grain` | `"auto" \| "coarse" \| "fine" \| "full"` | `"auto"` | Module density |
| `shape` | `"square" \| "rounded" \| "dot"` | `"square"` | Module shape |
| `frame` | `boolean` | `false` | Quiet hairline frame |
| `inverted` | `boolean` | `false` | Modules knocked out of an ink tile |
| `scannable` | `boolean` | `false` | A Data Matrix a scanner reads back to the exact VIN |
| `partial` | `boolean` | `false` | The VIN is still being typed |
| `title` | `string \| false` | the VIN | Accessible name; `false` hides it beside visible text |
| `color` | `string` | `currentColor` | Ink colour |

Other SVG props (`className`, `style`, handlers) pass through.

`VinInput` is a VIN field with the live mark inside: each character fills its
own cells as it is typed, and at 17 characters the check digit resolves. It
takes paste, lower case, spaces and a scanner's string, refuses I, O and Q,
and announces progress through a polite live region.

```jsx
<VinInput value={vin} onValueChange={(value, { complete, valid }) => setVin(value)} />
```

Its parts carry plain class names (`cardog-vin-input`, `__field`, `__mark`,
`__control`, `__message`) and the wrapper a `data-state` of `empty`, `typing`,
`complete`, `valid` or `invalid`. The built-in look sits in `:where()`, so any
class of yours wins; pass `unstyled` to drop it and keep only the fill motion.

## License

MIT © Cardog
