"use client";

import React from "react";
import * as Icons from "@cardog-icons/react";
import { IconInfo } from "../lib/icons";
import { cn } from "../lib/utils";

export interface IconCardProps {
  icon: IconInfo;
  size?: number;
  onClick?: (icon: IconInfo) => void;
}

export function IconCard({ icon, size = 60, onClick }: IconCardProps) {
  // Dynamically get the component
  const IconComponent = Icons[
    icon.componentName as keyof typeof Icons
  ] as React.ComponentType<any>;

  const handleClick = () => {
    if (onClick) onClick(icon);
  };

  const isDark = icon.variant === "Dark";

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-4 border rounded-lg transition-colors cursor-pointer group relative",
        isDark
          ? "bg-charcoal-800 border-charcoal-600 hover:border-bernese-400 hover:bg-charcoal-700"
          : "dark:bg-charcoal-700 hover:border-primary hover:bg-accent/50 dark:hover:border-bernese-300 dark:hover:bg-bernese-300/20"
      )}
      onClick={handleClick}
    >
      {/* Variant badge */}
      {isDark && (
        <div className="absolute top-2 right-2 px-1.5 py-0.5 text-[10px] font-medium bg-charcoal-600 text-white rounded">
          Mono
        </div>
      )}

      <div
        className={cn(
          "p-4 flex items-center justify-center relative",
          isDark && "text-white"
        )}
      >
        {IconComponent && <IconComponent width={size} height={size} />}
      </div>

      <div
        className={cn(
          "mt-2 text-sm font-medium text-center",
          isDark && "text-white"
        )}
      >
        {icon.brand} {icon.category}
      </div>
    </div>
  );
}
