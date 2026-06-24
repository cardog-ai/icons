import React from "react";
import { LogoGrid } from "../components/logo-grid";
import { iconCounts } from "../lib/icons";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero — fully flat, immersive infinite logo grid */}
      <section className="relative h-[calc(100svh-4rem)] min-h-[520px] w-full overflow-hidden bg-background">
        {/* Draggable grid fills the entire viewport, edge to edge */}
        <LogoGrid gridSize={160} />

        {/* Minimal flat corner caption — no shadow, no blur, just a label */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-start p-5 md:p-8">
          <div className="pointer-events-auto max-w-sm rounded-2xl bg-background/95 p-5 md:p-6">
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Car logos, simplified
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Every car brand, standardized · {iconCounts.brands} brands ·
              mono &amp; dark. Drag anywhere to explore.
            </p>
            <div className="mt-4 flex items-center gap-5 text-sm">
              <a
                href="/icons"
                className="inline-flex items-center gap-1.5 font-medium text-foreground underline-offset-4 hover:underline"
              >
                Browse {iconCounts.total} icons
                <DragIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href="/docs"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Docs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Seamless integration
          </h2>
          <p className="text-center text-muted-foreground mt-2">
            Use Cardog Icons in your projects with ease.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <PackageCard
              href="https://www.npmjs.com/package/@cardog-icons/react"
              badge="React 15+"
              name="@cardog-icons/react"
              description="Tree-shakeable React components with TypeScript support"
              installCmd="npm i @cardog-icons/react"
              importExample={`import { BMWLogo, TeslaIcon } from '@cardog-icons/react';`}
              usageExample={`<BMWLogo size={48} />\n<TeslaIcon className="text-red-500" />`}
            />

            <PackageCard
              href="https://www.npmjs.com/package/@cardog-icons/react-native"
              badge="Expo / RN 0.60+"
              name="@cardog-icons/react-native"
              description="Native SVG components powered by react-native-svg"
              installCmd="npm i @cardog-icons/react-native"
              importExample={`import { AudiLogo } from '@cardog-icons/react-native';`}
              usageExample={`<AudiLogo width={64} height={64} />`}
            />

            <PackageCard
              href="https://www.npmjs.com/package/@cardog-icons/core"
              badge="Raw SVGs"
              name="@cardog-icons/core"
              description="Optimized SVG files for any framework or vanilla use"
              installCmd="npm i @cardog-icons/core"
              importExample={`import { icons } from '@cardog-icons/core';`}
              usageExample={`const svg = icons['bmw-logo'];\ndocument.body.innerHTML = svg;`}
            />
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-background">
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to get started?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore our documentation to learn how to integrate Cardog Icons
            into your projects.
          </p>
          <a
            href="/docs"
            className="mt-8 flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Documentation
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

function DragIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function PackageCard({
  href,
  badge,
  name,
  description,
  installCmd,
  importExample,
  usageExample,
}: {
  href: string;
  badge: string;
  name: string;
  description: string;
  installCmd: string;
  importExample: string;
  usageExample: string;
}) {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href={href}
      className="group hover:no-underline border border-border hover:border-foreground/20 bg-card p-6 rounded-xl flex flex-col transition-all duration-200 hover:shadow-md"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
          {badge}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-foreground">{name}</h3>
      <p className="text-sm text-muted-foreground mt-2 mb-4">{description}</p>

      {/* Install command with syntax highlighting */}
      <div className="mt-auto space-y-3">
        <div className="rounded-lg bg-charcoal-900 dark:bg-charcoal-900 p-3 font-mono text-xs overflow-x-auto">
          <span className="text-emerald-400">$</span>{" "}
          <span className="text-taupe-300">{installCmd}</span>
        </div>

        {/* Import example */}
        <div className="rounded-lg bg-charcoal-900 dark:bg-charcoal-900 p-3 font-mono text-xs overflow-x-auto">
          <span className="text-fuchsia-400">import</span>{" "}
          <span className="text-taupe-300">{"{ "}</span>
          <span className="text-amber-300">{importExample.match(/\{ (.*?) \}/)?.[1]}</span>
          <span className="text-taupe-300">{" }"}</span>{" "}
          <span className="text-fuchsia-400">from</span>{" "}
          <span className="text-emerald-400">'{importExample.match(/'(.*)'/)?.[1]}'</span>
          <span className="text-taupe-300">;</span>
        </div>

        {/* Usage example */}
        <div className="rounded-lg bg-charcoal-900 dark:bg-charcoal-900 p-3 font-mono text-xs overflow-x-auto whitespace-pre-wrap">
          {usageExample.split('\n').map((line, i) => (
            <div key={i}>
              {line.startsWith('<') ? (
                <>
                  <span className="text-sky-400">&lt;</span>
                  <span className="text-amber-300">{line.match(/<(\w+)/)?.[1]}</span>
                  {line.match(/(\w+)=/g)?.map((attr, j) => (
                    <span key={j}>
                      {" "}
                      <span className="text-sky-300">{attr.replace("=", "")}</span>
                      <span className="text-taupe-300">=</span>
                    </span>
                  ))}
                  {line.match(/=\{([^}]+)\}/g)?.map((val, j) => (
                    <span key={j}>
                      <span className="text-taupe-300">{"{"}</span>
                      <span className="text-amber-200">{val.match(/\{([^}]+)\}/)?.[1]}</span>
                      <span className="text-taupe-300">{"}"}</span>
                    </span>
                  ))}
                  {line.match(/="([^"]+)"/g)?.map((val, j) => (
                    <span key={j}>
                      <span className="text-emerald-400">{val}</span>
                    </span>
                  ))}
                  <span className="text-sky-400"> /&gt;</span>
                </>
              ) : line.includes('=') && !line.startsWith('<') ? (
                <>
                  <span className="text-fuchsia-400">const</span>{" "}
                  <span className="text-sky-300">{line.split('=')[0].trim()}</span>
                  <span className="text-taupe-300"> = </span>
                  <span className="text-amber-300">{line.split('=')[1]?.trim().replace(';', '')}</span>
                  <span className="text-taupe-300">;</span>
                </>
              ) : (
                <span className="text-taupe-300">{line}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}
