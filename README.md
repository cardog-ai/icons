# Cardog Icons

A comprehensive library of car brand logos and icons for React and React Native applications.

## Packages

This monorepo contains the following packages:

- **@cardog-icons/core**: Core functionality for SVG optimization and processing
- **@cardog-icons/react**: React components for car brand icons
- **@cardog-icons/react-native**: React Native components for car brand icons
- **web**: Documentation website and icon explorer

## Features

- Optimized SVG icons for car brands
- TypeScript support with type definitions
- Support for both React and React Native
- Consistent API across platforms
- Tree-shakable, only import what you need
- Easy customization of size, color, and other props

## Installation

### React

```bash
npm install @cardog-icons/react
# or
yarn add @cardog-icons/react
# or
pnpm add @cardog-icons/react
```

### React Native

```bash
npm install @cardog-icons/react-native react-native-svg
# or
yarn add @cardog-icons/react-native react-native-svg
# or
pnpm add @cardog-icons/react-native react-native-svg
```

## Usage

### React

```jsx
import { BMWLogo, AudiIcon } from "@cardog-icons/react";
// or import the generic Icon component
import { Icon } from "@cardog-icons/react";

function App() {
  return (
    <div>
      {/* Using specific icon component */}
      <BMWLogo size={48} color="blue" />
      <AudiIcon size={32} />

      {/* Using generic Icon component */}
      <Icon name="BMWLogo" size={48} color="blue" />
      <Icon name="AudiIcon" size={32} />
    </div>
  );
}
```

### React Native

```jsx
import { BMWLogo, AudiIcon } from "@cardog-icons/react-native";
// or import the generic Icon component
import { Icon } from "@cardog-icons/react-native";

function App() {
  return (
    <View>
      {/* Using specific icon component */}
      <BMWLogo size={48} color="blue" />
      <AudiIcon size={32} />

      {/* Using generic Icon component */}
      <Icon name="BMWLogo" size={48} color="blue" />
      <Icon name="AudiIcon" size={32} />
    </View>
  );
}
```

## Development

### Setup

```bash
# Clone the repo
git clone https://github.com/cardog/cardog-icons.git
cd cardog-icons

# Install dependencies
pnpm install

# Build all packages
pnpm build:all
```

### Scripts

- `pnpm build`: Build all packages
- `pnpm dev`: Start development mode for all packages
- `pnpm optimize`: Optimize SVG files
- `pnpm generate`: Generate icon components
- `pnpm build:all`: Optimize SVGs, build core, generate components, and build all packages
- `pnpm web`: Run the documentation website locally

## Ownership

All logos and assets are property of their respective owners, any issues can be filed in our Github repository

## License

MIT © Cardog
