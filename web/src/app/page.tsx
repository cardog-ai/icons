import Link from "next/link";
import React from "react";
import { LogoMarquee } from "../components/logo-marquee";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-gradient-to-b via-taupe-300 via-[30%] to-charcoal-900">
      {/* Hero section */}
      <section className="py-20 md:py-28 lg:py-36">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Car logos simplified
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A complete set of standardized logos for every car brand. Now with{" "}
            <span className="font-semibold text-foreground">mono/dark</span> variants.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="/icons"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Browse Icons
            </a>
            <a
              href="/docs"
              className="rounded-full border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Get Started
            </a>
          </div>

          {/* Logo Marquee */}
          <div className="w-full max-w-none mx-auto mt-12 mb-8 relative overflow-hidden">
            {/* Gradient overlays - made thinner */}
            <div className="absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-[5%] bg-gradient-to-l from-background to-transparent z-10" />
            <LogoMarquee speed="medium" logoSize={46} rowCount={4} gap={24} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
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
