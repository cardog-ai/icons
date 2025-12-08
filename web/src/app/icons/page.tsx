"use client";

import React, { useState, useEffect } from "react";
import { Search, Moon, Sun } from "lucide-react";
import { cn } from "../../lib/utils";
import {
  allIcons,
  allBrands,
  allCategories,
  allVariants,
  filterIcons,
  iconCounts,
  IconCategory,
  IconVariant,
  IconInfo,
} from "../../lib/icons";
import IconCard from "../../components/icon-card";
import { IconPanel } from "../../components/icon-panel";

export default function IconsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string | "All">("All");
  const [selectedCategory, setSelectedCategory] = useState<
    IconCategory | "All"
  >("All");
  const [selectedVariant, setSelectedVariant] = useState<IconVariant | "All">(
    "All"
  );
  const [filteredIcons, setFilteredIcons] = useState(allIcons);
  const [selectedIcon, setSelectedIcon] = useState<IconInfo | null>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  // Add "All Brands" option to the brands list
  const brands = ["All", ...allBrands];

  // Filter icons based on search query, brand, category and variant
  useEffect(() => {
    const results = filterIcons(
      allIcons,
      selectedBrand,
      selectedCategory,
      selectedVariant,
      searchQuery
    );
    setFilteredIcons(results);
  }, [searchQuery, selectedBrand, selectedCategory, selectedVariant]);

  const handleIconClick = (icon: IconInfo) => {
    setSelectedIcon(icon);
  };

  const closePanel = () => {
    setSelectedIcon(null);
  };

  // Render lucide icon
  const renderIcon = (Icon: any) => (
    <div className="flex items-center justify-center w-full h-full">
      {React.createElement(Icon, {
        className: "h-full w-full",
      })}
    </div>
  );

  return (
    <div className="container py-8 md:py-12">
      {/* Header with stats */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Icons</h1>
          <p className="text-muted-foreground mt-1">
            {iconCounts.total} icons across {iconCounts.brands} brands
          </p>
        </div>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-lg">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
            <span>{iconCounts.default} Color</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-charcoal-800 text-white rounded-lg">
            <div className="w-3 h-3 rounded-full bg-white" />
            <span>{iconCounts.dark} Mono</span>
          </div>
        </div>
      </div>

      {/* Search and filters */}
      <div className="space-y-6 mb-8">
        {/* Search bar */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground">
            {renderIcon(Search)}
          </div>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search icons by brand or type..."
            className="pl-10 h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter row */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Variant filter */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-muted-foreground">
              Variant
            </h3>
            <div className="flex flex-wrap gap-2">
              {allVariants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant.id)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                    selectedVariant === variant.id
                      ? variant.id === "Dark"
                        ? "bg-charcoal-800 text-white ring-2 ring-bernese-400"
                        : "bg-primary text-primary-foreground"
                      : variant.id === "Dark"
                        ? "bg-charcoal-700 text-charcoal-200 hover:bg-charcoal-600"
                        : "bg-taupe-300 text-taupe-foreground hover:bg-taupe-300/80"
                  )}
                >
                  {variant.id === "Dark" && (
                    <div className="w-3 h-3">{renderIcon(Moon)}</div>
                  )}
                  {variant.id === "Default" && (
                    <div className="w-3 h-3">{renderIcon(Sun)}</div>
                  )}
                  {variant.name}
                </button>
              ))}
            </div>
          </div>

          {/* Category filters */}
          <div className="flex-1">
            <h3 className="text-sm font-medium mb-2 text-muted-foreground">
              Type
            </h3>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
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

        {/* Brand filter (scrollable) */}
        <div>
          <h3 className="text-sm font-medium mb-2 text-muted-foreground">
            Brand
          </h3>
          <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto pr-2">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-all",
                  selectedBrand === brand
                    ? "bg-bernese-400 text-black"
                    : "bg-muted hover:bg-muted/80"
                )}
              >
                {brand === "All" ? "All Brands" : brand}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-4 text-sm text-muted-foreground">
        Showing {filteredIcons.length} of {allIcons.length} icons
      </div>

      {/* Icons grid */}
      {filteredIcons.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredIcons.map((icon) => (
            <IconCard key={icon.id} icon={icon} onClick={handleIconClick} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 bg-muted/30 rounded-xl">
          <div className="text-4xl mb-4">🔍</div>
          <p className="text-lg text-muted-foreground">
            No icons found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedBrand("All");
              setSelectedCategory("All");
              setSelectedVariant("All");
            }}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Details panel */}
      {selectedIcon && <IconPanel icon={selectedIcon} onClose={closePanel} />}
    </div>
  );
}
