# Cardog Icons

A comprehensive library of car brand logos and icons for React and React Native applications.

## Packages

This monorepo contains the following packages:

- **@cardog-icons/core**: Core functionality for SVG optimization and processing
- **@cardog-icons/react**: React components for car brand icons
- **@cardog-icons/react-native**: React Native components for car brand icons
- **web**: Documentation website and icon explorer

## Features

- **380+ optimized SVG icons** for car brands
- **Two variants**: Color (default) and Mono (dark mode optimized)
- TypeScript support with type definitions
- Support for both React and React Native
- Consistent API across platforms
- Tree-shakable, only import what you need
- Easy customization of size, color, and other props

## What's New in v1.1.0

- Added **Mono/Dark variants** for all icons - perfect for dark mode UIs
- New brands: Bugatti, Buick, Koenigsegg, Pagani, Rivian
- Improved icon optimization

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
import { BMWLogo, BMWLogoDark, AudiIcon } from "@cardog-icons/react";
// or import the generic Icon component
import { Icon } from "@cardog-icons/react";

function App() {
  return (
    <div>
      {/* Color variant (default) */}
      <BMWLogo size={48} />
      <AudiIcon size={32} />

      {/* Mono/Dark variant - great for dark backgrounds */}
      <BMWLogoDark size={48} className="text-white" />

      {/* Using generic Icon component */}
      <Icon name="BMWLogo" size={48} />
      <Icon name="BMWLogoDark" size={48} />
    </div>
  );
}
```

### React Native

```jsx
import { BMWLogo, BMWLogoDark, AudiIcon } from "@cardog-icons/react-native";
// or import the generic Icon component
import { Icon } from "@cardog-icons/react-native";

function App() {
  return (
    <View>
      {/* Color variant (default) */}
      <BMWLogo width={48} height={48} />
      <AudiIcon width={32} height={32} />

      {/* Mono/Dark variant */}
      <BMWLogoDark width={48} height={48} fill="white" />

      {/* Using generic Icon component */}
      <Icon name="BMWLogo" width={48} height={48} />
    </View>
  );
}
```

## Icon Naming Convention

Icons follow a consistent naming pattern:

- `{Brand}Icon` - Compact badge/emblem icon
- `{Brand}Logo` - Full logo
- `{Brand}LogoHorizontal` - Horizontal logo layout
- `{Brand}Wordmark` - Text-only brand name

Each comes in two variants:
- Default (color) - e.g., `BMWLogo`
- Dark/Mono - e.g., `BMWLogoDark`

## Available Brands

Acura, Alfa Romeo, Aston Martin, Audi, Bentley, BMW, Bugatti*, Buick*, BYD, Cadillac, Chevrolet, Chrysler, Dodge, Ferrari, Fiat, Ford, Genesis, GMC, Honda, Hummer, Hyundai, Infiniti, Jaguar, Jeep, Kia, Koenigsegg*, Lamborghini, Land Rover, Lexus, Lincoln, Lotus, Lucid, Maserati, Mazda, Mercedes-Benz, McLaren, Mini, Mitsubishi, Nissan, Pagani*, Polestar, Porsche, RAM, Rivian*, Rolls-Royce, Subaru, Tesla, Toyota, VinFast, Volkswagen, Volvo

*Dark/Mono variant only

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
