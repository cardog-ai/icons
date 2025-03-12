import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-4">Documentation</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Get started with Cardog Icons, a beautiful and consistent icon library
        for your web and mobile applications.
      </p>

      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Cardog Icons can be used in various JavaScript frameworks. Here's
              how to get started with your preferred package manager:
            </p>
            <div className="my-4 overflow-x-auto rounded-lg border bg-muted p-4">
              <pre className="text-sm">
                <code>
                  {`# npm
npm install @cardog-icons/react

# pnpm
pnpm add @cardog-icons/react

# yarn
yarn add @cardog-icons/react`}
                </code>
              </pre>
            </div>
            <p>
              After installation, you can import and use any icon as a React
              component:
            </p>
            <div className="my-4 overflow-x-auto rounded-lg border bg-muted p-4">
              <pre className="text-sm">
                <code>{`import { CarIcon, AudiLogo } from '@cardog-icons/react';

function MyComponent() {
  return (
    <div>
      <CarIcon />
      <AudiLogo color="blue" size={32} />
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage with React Native</h2>
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              For React Native applications, we provide a dedicated package:
            </p>
            <div className="my-4 overflow-x-auto rounded-lg border bg-muted p-4">
              <pre className="text-sm">
                <code>
                  {`# npm
npm install @cardog-icons/react-native

# yarn
yarn add @cardog-icons/react-native

# pnpm
pnpm add @cardog-icons/react-native`}
                </code>
              </pre>
            </div>
            <p>
              Then import and use the icons in your React Native components:
            </p>
            <div className="my-4 overflow-x-auto rounded-lg border bg-muted p-4">
              <pre className="text-sm">
                <code>{`import { CarIcon, AudiLogo } from '@cardog-icons/react-native';

function MyScreen() {
  return (
    <View style={{ padding: 20 }}>
      <CarIcon width={24} height={24} color="black" />
      <AudiLogo width={32} height={32} color="blue" />
    </View>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
