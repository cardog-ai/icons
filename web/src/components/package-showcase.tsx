"use client";

import React from "react";

type Pkg = {
  name: string;
  tag: string;
  description: string;
  install: string;
  href: string;
};

const PACKAGES: Pkg[] = [
  {
    name: "@cardog-icons/react",
    tag: "React 19+",
    description: "Tree-shakeable components, fully typed.",
    install: "npm i @cardog-icons/react",
    href: "https://www.npmjs.com/package/@cardog-icons/react",
  },
  {
    name: "@cardog-icons/react-native",
    tag: "Expo · React Native",
    description: "Native SVG via react-native-svg.",
    install: "npm i @cardog-icons/react-native",
    href: "https://www.npmjs.com/package/@cardog-icons/react-native",
  },
  {
    name: "@cardog-icons/core",
    tag: "Vanilla SVG",
    description: "Optimized SVGs for any project.",
    install: "npm i @cardog-icons/core",
    href: "https://www.npmjs.com/package/@cardog-icons/core",
  },
];

function CopyCommand({ value }: { value: string }) {
  const [copied, setCopied] = React.useState(false);

  const onCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — no-op */
    }
  }, [value]);

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={`Copy: ${value}`}
      className="group/cmd inline-flex items-center gap-3 rounded-md border border-transparent px-3 py-2 font-mono text-[13px] text-muted-foreground transition-colors hover:border-border hover:bg-muted/60 hover:text-foreground"
    >
      <span className="whitespace-nowrap">
        <span className="select-none text-muted-foreground/50">$ </span>
        {value}
      </span>
      {copied ? (
        <CheckIcon className="h-3.5 w-3.5 text-emerald-500" />
      ) : (
        <CopyIcon className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover/cmd:opacity-100" />
      )}
    </button>
  );
}

export function InstallList() {
  return (
    <div className="divide-y divide-border border-y border-border">
      {PACKAGES.map((pkg) => (
        <div
          key={pkg.name}
          className="flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between"
        >
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <a
                href={pkg.href}
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                {pkg.name}
              </a>
              <span className="text-xs text-muted-foreground">{pkg.tag}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{pkg.description}</p>
          </div>
          <div className="-ml-3 md:ml-0 md:shrink-0">
            <CopyCommand value={pkg.install} />
          </div>
        </div>
      ))}
    </div>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
