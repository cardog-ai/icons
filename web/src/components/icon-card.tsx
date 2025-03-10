"use client";

import React from "react";
import * as Icons from "@cardog-icons/react";
import { IconInfo } from "../lib/icons";

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

  return (
    <div
      className="flex flex-col items-center justify-center p-4 border rounded-lg hover:border-primary hover:bg-accent/50 transition-colors cursor-pointer"
      onClick={handleClick}
    >
      <div className="p-4 flex items-center justify-center relative">
        {IconComponent && <IconComponent width={size} height={size} />}
      </div>

      <div className="mt-2 text-sm font-medium text-center">
        {icon.brand} {icon.category}
      </div>
    </div>
  );
}
