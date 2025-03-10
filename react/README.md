# @cardog-icons/react

React components for car brand logos and icons.

## Features

- Optimized SVG icons for car brands
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
import { BMWLogo, AudiIcon, MercedesBenzWordmark } from "@cardog-icons/react";

function App() {
  return (
    <div>
      <BMWLogo size={48} color="blue" />
      <AudiIcon size={32} />
      <MercedesBenzWordmark height={24} width={120} />
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
      <Icon name="BMWLogo" size={48} color="blue" />
      <Icon name="AudiIcon" size={32} />
      <Icon name="MercedesBenzWordmark" height={24} width={120} />
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

## Available Icons

This library includes various types of icons for each car brand:

- **Logo**: The main brand logo
- **Icon**: A simplified icon version of the brand
- **Wordmark**: Text-only brand name
- **LogoHorizontal**: Horizontal version of the logo with text

Example naming:

- `BMWLogo`
- `BMWIcon`
- `BMWWordmark`
- `AudiLogo`
- etc.

## Props

All icon components accept the following props:

| Prop          | Type                            | Default          | Description                    |
| ------------- | ------------------------------- | ---------------- | ------------------------------ |
| `size`        | `number \| string`              | `24`             | Size for both width and height |
| `color`       | `string`                        | `'currentColor'` | Color of the icon              |
| `...svgProps` | `React.SVGProps<SVGSVGElement>` | -                | Any valid SVG prop             |

## License

MIT © Cardog
