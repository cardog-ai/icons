import React from "react";
import { LogoGrid } from "../components/logo-grid";
import { InstallList } from "../components/package-showcase";
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
                <ArrowRightIcon className="h-3.5 w-3.5" />
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

      {/* Install — minimal, editorial */}
      <section className="border-t border-border py-20 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Install
          </h2>
          <div className="mt-6">
            <InstallList />
          </div>
        </div>
      </section>
    </div>
  );
}

function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
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
