"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { cn } from "../../lib/utils";
import {
  allIcons,
  allBrands,
  allCategories,
  filterIcons,
  IconCategory,
  IconInfo,
} from "../../lib/icons";
import { IconCard } from "../../components/icon-card";
import { IconPanel } from "../../components/icon-panel";

export default function IconsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string | "All">("All");
  const [selectedCategory, setSelectedCategory] = useState<
    IconCategory | "All"
  >("All");
  const [filteredIcons, setFilteredIcons] = useState(allIcons);
  const [selectedIcon, setSelectedIcon] = useState<IconInfo | null>(null);

  // Add "All Brands" option to the brands list
  const brands = ["All", ...allBrands];

  // Filter icons based on search query, brand and category
  useEffect(() => {
    const results = filterIcons(
      allIcons,
      selectedBrand,
      selectedCategory,
      searchQuery
    );
    setFilteredIcons(results);
  }, [searchQuery, selectedBrand, selectedCategory]);

  const handleIconClick = (icon: IconInfo) => {
    setSelectedIcon(icon);
  };

  const closePanel = () => {
    setSelectedIcon(null);
  };

  // Render lucide icon
  const renderIcon = (Icon: any) => (
    <div className="flex items-center justify-center w-full h-full">
      {React.createElement(Icon, { className: "h-full w-full" })}
    </div>
  );

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">Icons</h1>

      {/* Search and filters */}
      <div className="space-y-6 mb-8">
        {/* Search bar */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground">
            {renderIcon(Search)}
          </div>
          <input
            type="text"
            placeholder="Search icons..."
            className="pl-10 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category filters */}
        <div>
          <h3 className="text-sm font-medium mb-2">Type</h3>
          <div className="flex flex-wrap gap-2">
            {allCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium",
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-taupe-300 text-taupe-foreground hover:bg-taupe-300/80"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Icons grid */}
      {filteredIcons.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredIcons.map((icon) => (
            <IconCard key={icon.id} icon={icon} onClick={handleIconClick} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-lg text-muted-foreground">
            No icons found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedBrand("All");
              setSelectedCategory("All");
            }}
            className="mt-4 text-primary hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Details panel */}
      {selectedIcon && <IconPanel icon={selectedIcon} onClose={closePanel} />}
    </div>
  );
}
