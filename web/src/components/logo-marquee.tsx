"use client";

import React from "react";
import * as Icons from "@cardog-icons/react";
import { allIcons, IconInfo } from "../lib/icons";
import { useTheme } from "next-themes";

interface LogoMarqueeProps {
  gap?: number;
  logoSize?: number;
  rowCount?: number;
}

// Pre-compute rows at module load for consistent rendering
const logoRows = getLogoRows(4);

export function LogoMarquee({
  gap = 48,
  logoSize = 52,
  rowCount = 4,
}: LogoMarqueeProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="w-full overflow-visible py-6">
      {logoRows.map((rowLogos, rowIndex) => {
        const offsetPercentage = [0, 0.4, 0.2, 0.6][rowIndex % 4];
        const rowOffset = offsetPercentage * (logoSize + gap);

        return (
          <div
            key={`row-${rowIndex}`}
            className="relative flex overflow-visible my-4"
          >
            <div
              className="flex items-center justify-start w-full"
              style={{
                gap: `${gap}px`,
                paddingLeft: `${rowOffset}px`,
              }}
            >
              {rowLogos.map((logo, index) => (
                <LogoItem
                  key={`${logo.id}-${index}`}
                  logo={logo}
                  size={logoSize}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Ensure no same brand appears within 3 positions
function ensureBrandSpacing(logos: IconInfo[], minDistance: number = 3): IconInfo[] {
  const result: IconInfo[] = [];
  const remaining = [...logos];

  while (remaining.length > 0) {
    // Find the first logo that doesn't violate spacing
    let foundIndex = -1;

    for (let i = 0; i < remaining.length; i++) {
      const candidate = remaining[i];
      let isValid = true;

      // Check last minDistance positions
      for (let j = 1; j <= minDistance && j <= result.length; j++) {
        if (result[result.length - j].brand === candidate.brand) {
          isValid = false;
          break;
        }
      }

      if (isValid) {
        foundIndex = i;
        break;
      }
    }

    // If no valid candidate found, just take the first one
    if (foundIndex === -1) {
      foundIndex = 0;
    }

    result.push(remaining[foundIndex]);
    remaining.splice(foundIndex, 1);
  }

  return result;
}

function getLogoRows(rowCount: number): IconInfo[][] {
  // Only use colored (Default) variants
  const colorIcons = allIcons.filter((icon) => icon.variant === "Default");

  // Get all unique brands and create one logo per brand for cleaner display
  const brandLogos = new Map<string, IconInfo>();

  // Prefer Logo > Icon > LogoHorizontal for marquee display
  const categoryPriority: Record<string, number> = {
    Logo: 1,
    Icon: 2,
    LogoHorizontal: 3,
    Wordmark: 4,
  };

  colorIcons.forEach((icon) => {
    const existing = brandLogos.get(icon.brand);
    if (!existing || categoryPriority[icon.category] < categoryPriority[existing.category]) {
      brandLogos.set(icon.brand, icon);
    }
  });

  const allLogos = Array.from(brandLogos.values());

  // Deterministic shuffle based on brand name
  const shuffled = allLogos.sort((a, b) => {
    const hashA = a.brand.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hashB = b.brand.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return (hashA * 7) % 100 - (hashB * 7) % 100;
  });

  // Distribute across rows
  const logosPerRow = Math.ceil(shuffled.length / rowCount);
  const rows: IconInfo[][] = [];

  for (let i = 0; i < rowCount; i++) {
    const start = i * logosPerRow;
    const end = Math.min(start + logosPerRow, shuffled.length);
    let rowLogos = shuffled.slice(start, end);

    // Apply spacing constraint
    rowLogos = ensureBrandSpacing(rowLogos, 3);

    // Rotate each row differently for visual variety
    const rotation = (i * 3) % rowLogos.length;
    rowLogos = [...rowLogos.slice(rotation), ...rowLogos.slice(0, rotation)];

    rows.push(rowLogos);
  }

  return rows;
}

interface LogoItemProps {
  logo: IconInfo;
  size: number;
  isDark: boolean;
}

function LogoItem({ logo, size, isDark }: LogoItemProps) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-200"
      style={{
        width: `${size + 16}px`,
        height: `${size + 16}px`,
      }}
    >
      {renderLogo(logo, size, isDark)}
    </div>
  );
}

function renderLogo(logo: IconInfo, size: number, isDark: boolean) {
  // Try dark variant first if in dark mode
  const darkName = logo.componentName + "Dark";
  const componentName = isDark && darkName in Icons ? darkName : logo.componentName;

  const IconComponent = Icons[
    componentName as keyof typeof Icons
  ] as React.ComponentType<{ width?: number; height?: number }>;

  return IconComponent ? <IconComponent width={size} height={size} /> : null;
}
