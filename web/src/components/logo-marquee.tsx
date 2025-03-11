import React from "react";
import * as Icons from "@cardog-icons/react";
import { allIcons, IconInfo } from "../lib/icons";

interface LogoMarqueeProps {
  speed?: "slow" | "medium" | "fast"; // Kept for compatibility but not used
  gap?: number; // Gap between logos (pixels)
  logoSize?: number; // Size of logos (pixels)
  rowCount?: number; // Number of rows
}

const logoRows = getLogoRows(4);

export function LogoMarquee({
  gap = 40,
  logoSize = 60,
  rowCount = 4,
}: LogoMarqueeProps) {
  return (
    <div className="w-full overflow-visible py-4">
      {logoRows.map((rowLogos, rowIndex) => {
        // Calculate horizontal offset for each row to create a more interesting pattern
        // First row no offset, second row 50% logo size, third row 25%, fourth row 75%
        const offsetPercentage = [0, 0.5, 0.25, 0.75][rowIndex % 4];
        const rowOffset = offsetPercentage * logoSize;

        return (
          <div
            key={`row-${rowIndex}`}
            className="relative flex overflow-visible my-3 -mx-4"
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
                  isEvenRow={rowIndex % 2 === 0}
                  // Slightly vary the size based on row and position for more visual interest
                  sizeVariation={(index + rowIndex) % 3 === 0 ? 1.1 : 1}
                />
              ))}
              {/* Add more logos to ensure they fill the width */}
              {rowLogos.slice(0, 5).map((logo, index) => (
                <LogoItem
                  key={`${logo.id}-extra-${index}`}
                  logo={logo}
                  size={logoSize}
                  isEvenRow={rowIndex % 2 === 0}
                  sizeVariation={(index + rowIndex + 1) % 3 === 0 ? 1.1 : 1}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Move logo preparation to a pure function
function getLogoRows(rowCount: number): IconInfo[][] {
  // Categorize icons

  const icons = allIcons
    .filter((icon) => icon.category === "Icon")
    .sort(() => Math.random() - 0.5);
  const logoIcons = allIcons
    .filter((icon) => icon.category === "Logo")
    .sort(() => Math.random() - 0.5);
  const horizontalLogos = allIcons
    .filter((icon) => icon.category === "LogoHorizontal")
    .sort(() => Math.random() - 0.5);
  const wordmarkLogos = allIcons
    .filter((icon) => icon.category === "Wordmark")
    .sort(() => Math.random() - 0.5);

  // Mix different logo types for each row to create visual variety
  const rows: IconInfo[][] = [];

  for (let i = 0; i < rowCount; i++) {
    let rowLogos: IconInfo[] = [];

    // Assign different logo types based on row index for variety
    switch (i % 4) {
      case 0:
        // First row: primarily logo icons, with some logos
        rowLogos = [...logoIcons.slice(0, 5), ...icons.slice(0, 7)];
        break;
      case 1:
        // Second row: primarily horizontal logos
        rowLogos = [...horizontalLogos.slice(5, 12), ...logoIcons.slice(5, 8)];
        break;
      case 2:
        // Third row: mix of logos and icons
        rowLogos = [...logoIcons.slice(8, 13), ...icons.slice(7, 14)];
        break;
      case 3:
        // Fourth row: mix of all types
        rowLogos = [
          ...horizontalLogos.slice(0, 4),
          ...logoIcons.slice(13, 16),
          ...icons.slice(12, 15),
        ];
        break;
    }

    // Create a deterministic arrangement based on row
    const offset = i * 3;
    const arranged = [...rowLogos].sort((a, b) => {
      // Create a deterministic but different order for each row
      return (
        ((a.brand.length + offset) % 10) - ((b.brand.length + offset) % 10)
      );
    });

    rows.push(arranged);
  }

  return rows;
}

interface LogoItemProps {
  logo: IconInfo;
  size: number;
  isEvenRow?: boolean;
  sizeVariation?: number;
}

function LogoItem({
  logo,
  size,
  isEvenRow = true,
  sizeVariation = 1,
}: LogoItemProps) {
  // Add slight variation to the logos based on row
  const bgOpacity = isEvenRow ? "bg-white/10" : "bg-white/15";
  const adjustedSize = Math.floor(size * sizeVariation);

  return (
    <div
      className={`flex-shrink-0 flex items-center justify-center ${bgOpacity} backdrop-blur-sm rounded-lg p-3 
     `}
      style={{
        width: `${adjustedSize + 20}px`,
        height: `${adjustedSize + 20}px`,
      }}
    >
      {renderLogo(logo, adjustedSize)}
    </div>
  );
}

// Helper function to render logo
function renderLogo(logo: IconInfo, size: number) {
  const IconComponent = Icons[
    logo.componentName as keyof typeof Icons
  ] as React.ComponentType<any>;

  return IconComponent ? <IconComponent width={size} height={size} /> : null;
}
