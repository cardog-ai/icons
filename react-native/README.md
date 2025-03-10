# @cardog-icons/react-native

React Native components for car brand logos and icons.

## Features

- Optimized SVG icons for car brands in React Native
- Based on react-native-svg
- TypeScript support with full type definitions
- Tree-shakable, only import what you need
- Easy customization of size, color, and other SVG props
- Lightweight and performant

## Installation

```bash
npm install @cardog-icons/react-native react-native-svg
# or
yarn add @cardog-icons/react-native react-native-svg
# or
pnpm add @cardog-icons/react-native react-native-svg
```

> Note: This package requires `react-native-svg` as a peer dependency.

## Usage

### Importing specific icons

```jsx
import {
  BMWLogo,
  AudiIcon,
  MercedesBenzWordmark,
} from "@cardog-icons/react-native";

function App() {
  return (
    <View>
      <BMWLogo size={48} color="#007bff" />
      <AudiIcon size={32} />
      <MercedesBenzWordmark height={24} width={120} />
    </View>
  );
}
```

### Using the generic Icon component

```jsx
import { Icon } from "@cardog-icons/react-native";

function App() {
  return (
    <View>
      <Icon name="BMWLogo" size={48} color="#007bff" />
      <Icon name="AudiIcon" size={32} />
      <Icon name="MercedesBenzWordmark" height={24} width={120} />
    </View>
  );
}
```

### Using the useIcon hook

```jsx
import { useIcon } from "@cardog-icons/react-native";

function CustomIcon({ name, ...props }) {
  const icon = useIcon({ name, ...props });

  return <View style={styles.customIconWrapper}>{icon}</View>;
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

| Prop          | Type       | Default   | Description                     |
| ------------- | ---------- | --------- | ------------------------------- |
| `size`        | `number`   | `24`      | Size for both width and height  |
| `color`       | `string`   | `'black'` | Color of the icon               |
| `...svgProps` | `SvgProps` | -         | Any valid react-native-svg prop |

## License

MIT © Cardog
