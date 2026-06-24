"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";
import { cn } from "../lib/utils";
import { Logomark } from "./logo";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Icons", href: "/icons" },
  { name: "Docs", href: "/docs" },
  { name: "Updates", href: "/updates" },
];

function useIsActive() {
  const pathname = usePathname();
  return (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = useIsActive();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logomark className="h-7 w-auto" />
          <X className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-lg font-medium tracking-tight">Icons</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-0.5">
          <Link
            href="/icons?searchFocus=true"
            className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Search icons"
          >
            <Search className="h-[18px] w-[18px]" />
          </Link>
          <ModeToggle />
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "border-b border-border bg-background md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <nav className="container grid gap-1 py-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
