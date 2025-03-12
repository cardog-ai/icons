"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Copy,
  Check,
  Download,
  ChevronRight,
  ChevronLeft,
  X,
  ChevronUp,
  ChevronDown,
  LucideIcon,
} from "lucide-react";
import * as Icons from "@cardog-icons/react";
import { IconInfo } from "../lib/icons";
import { cn } from "../lib/utils";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { saveAs } from "file-saver";

import { useIsMobile } from "@/hooks/use-mobile";

// Animation variants
const variants: Record<string, Variants> = {
  desktop: {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 40, opacity: 0 },
  },
  mobile: {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 40, opacity: 0 },
  },
};

// Define copy types
enum CopyType {
  SVG,
  SVG_RAW,
  SVG_DATA,
  PNG,
  IMPORT,
  REACT,
  REACT_NATIVE,
}

interface IconPanelProps {
  icon: IconInfo | null;
  onClose: () => void;
}

// Helper to render icons correctly
const renderIcon = (Icon: any) => (
  <div className="flex items-center justify-center w-full h-full">
    {React.createElement(Icon, { className: "h-full w-full" })}
  </div>
);

// Clone SVG with specific size
function cloneWithSize(svg: SVGSVGElement, size: number): SVGSVGElement {
  const sized = svg.cloneNode(true) as SVGSVGElement;
  sized.setAttribute("width", `${size}`);
  sized.setAttribute("height", `${size}`);
  return sized;
}

// Action button component for panel actions
function ActionButton({
  icon,
  activeIcon = Check,
  label,
  active = false,
  onClick,
  className,
}: {
  icon: LucideIcon;
  activeIcon?: LucideIcon;
  label: string;
  active?: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      className={cn(
        "flex items-center justify-start  h-9 px-3 w-24",
        className
      )}
    >
      <div className="w-2 h-2 mr-2 flex-shrink-0">
        {active ? renderIcon(activeIcon) : renderIcon(icon)}
      </div>
      <span className="text-[9px] truncate">{label}</span>
    </Button>
  );
}

// Tags component to display icon tags
function TagCloud({ name }: { name: string }) {
  // Simple mock tags based on icon name
  const tags = name.split(/(?=[A-Z])/).filter(Boolean);

  return (
    <div className="flex flex-wrap gap-2 p-4">
      {tags.map((tag) => (
        <span key={tag} className="px-2 py-1 bg-accent rounded-md text-xs">
          {tag}
        </span>
      ))}
    </div>
  );
}

export function IconPanel({ icon, onClose }: IconPanelProps) {
  const [copied, setCopied] = useState<CopyType | null>(null);
  const [actionPage, setActionPage] = useState<number>(0);
  const [initialTab, setInitialTab] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Reset state when icon changes
    setCopied(null);
    setActionPage(0);

    // Add escape key handler
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (!window) return;

    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [icon, onClose]);

  if (!icon) return null;

  // Get the icon component dynamically
  const IconComponent = Icons[
    icon.componentName as keyof typeof Icons
  ] as React.ComponentType<any>;

  // Set timeout to clear copied state
  const handleCopy = (type: CopyType, content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  // Copy the SVG
  const handleCopySVG = () => {
    if (!svgRef.current) return;
    handleCopy(CopyType.SVG, svgRef.current.outerHTML);
  };

  // Copy SVG as data URL
  const handleCopyDataSVG = () => {
    if (!svgRef.current) return;
    handleCopy(
      CopyType.SVG_DATA,
      "data:image/svg+xml;base64," +
        btoa(unescape(encodeURIComponent(svgRef.current.outerHTML)))
    );
  };

  // Copy raw SVG
  const handleCopyRawSVG = () => {
    if (!svgRef.current) return;
    handleCopy(CopyType.SVG_RAW, svgRef.current.outerHTML);
  };

  // Copy component import
  const handleCopyImport = () => {
    handleCopy(
      CopyType.IMPORT,
      `import { ${icon.componentName} } from '@cardog-icons/react';`
    );
  };

  // Copy React usage
  const handleCopyReact = () => {
    handleCopy(CopyType.REACT, `<${icon.componentName} size={24} />`);
  };

  // Copy React Native usage
  const handleCopyReactNative = () => {
    handleCopy(
      CopyType.REACT_NATIVE,
      `<${icon.componentName} width={24} height={24} />`
    );
  };

  // use svg2png-convert to convert svg to png
  const handleDownloadPNG = async () => {
    if (!svgRef.current) return;

    if (window) {
      const Svg2Png = await import("svg2png-converter");
      Svg2Png.Svg2Png.save(svgRef.current);
    }
  };

  // Download SVG
  const handleDownloadSVG = () => {
    if (!svgRef.current) return;
    const blob = new Blob([svgRef.current.outerHTML]);
    saveAs(blob, `${icon.name}.svg`);
  };

  // Download raw SVG
  const handleDownloadRawSVG = () => {
    if (!svgRef.current) return;
    const blob = new Blob([svgRef.current.outerHTML]);
    saveAs(blob, `${icon.name}-raw.svg`);
  };

  // Navigation between action sets
  const nextActionSet = () => {
    setActionPage(1);
  };

  const prevActionSet = () => {
    setActionPage(0);
  };

  // Create tabs content
  const tabs = [
    {
      value: "react",
      label: "React",
      content: (
        <div className="snippet">
          <pre className="rounded-md bg-muted p-2 overflow-x-auto text-xs relative">
            <code>{`<${icon.componentName} size={24} />`}</code>
            <button
              title="Copy snippet"
              className="absolute right-2 top-2 p-1 rounded-md hover:bg-accent"
              onClick={() => handleCopyReact()}
            >
              {copied === CopyType.REACT ? (
                <div className="w-4 h-4 text-green-500">
                  {renderIcon(Check)}
                </div>
              ) : (
                <div className="w-4 h-4">{renderIcon(Copy)}</div>
              )}
            </button>
          </pre>
        </div>
      ),
    },
    {
      value: "react-native",
      label: "React Native",
      content: (
        <div className="snippet">
          <pre className="rounded-md bg-muted p-2 overflow-x-auto text-xs relative">
            <code>{`<${icon.componentName} width={24} height={24} />`}</code>
            <button
              title="Copy snippet"
              className="absolute right-2 top-2 p-1 rounded-md hover:bg-accent"
              onClick={() => handleCopyReactNative()}
            >
              {copied === CopyType.REACT_NATIVE ? (
                <div className="w-4 h-4 text-green-500">
                  {renderIcon(Check)}
                </div>
              ) : (
                <div className="w-4 h-4">{renderIcon(Copy)}</div>
              )}
            </button>
          </pre>
        </div>
      ),
    },
    {
      value: "import",
      label: "Import",
      content: (
        <div className="snippet">
          <pre className="rounded-md bg-muted p-2 overflow-x-auto text-xs relative">
            <code>{`import { ${icon.componentName} } from '@cardog-icons/react';`}</code>
            <button
              title="Copy snippet"
              className="absolute right-2 top-2 p-1 rounded-md hover:bg-accent"
              onClick={() => handleCopyImport()}
            >
              {copied === CopyType.IMPORT ? (
                <div className="w-4 h-4 text-green-500">
                  {renderIcon(Check)}
                </div>
              ) : (
                <div className="w-4 h-4">{renderIcon(Copy)}</div>
              )}
            </button>
          </pre>
        </div>
      ),
    },
  ];

  return (
    <AnimatePresence initial={true}>
      {!!icon && (
        <div className="fixed left-0 right-0 flex items-end justify-center bottom-0 h-min pb-1 px-4">
          <motion.aside
            initial="initial"
            animate="animate"
            exit="exit"
            variants={isMobile ? variants.mobile : variants.desktop}
            className="w-full max-w-7xl  bg-background border rounded-lg shadow-lg overflow-hidden"
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center py-2 px-4 border-b bg-muted/30">
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <span className="font-bold text-lg">{icon.brand}</span>
                  <span className="text-muted-foreground text-base">
                    {icon.category}
                  </span>
                </h3>
                <button
                  className="p-1.5 rounded-full hover:bg-accent/80 transition-colors"
                  onClick={onClose}
                  aria-label="Close panel"
                >
                  <div className="w-4 h-4">{renderIcon(X)}</div>
                </button>
              </div>

              <div className="flex flex-row h-full overflow-hidden">
                {/* Left column: Icon preview */}
                <div className="flex flex-col items-center justify-between p-4 border-r  bg-muted/10 ">
                  <div className="flex flex-col items-center">
                    <div className="p-2 rounded-md dark:bg-charcoal-700 bg-background shadow-sm border flex items-center justify-center]">
                      {IconComponent && (
                        <IconComponent width={96} height={96} ref={svgRef} />
                      )}
                    </div>
                    <div className="text-xs text-center text-muted-foreground mt-2 max-w-full font-medium">
                      {icon.componentName}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="w-full mt-4">
                    {actionPage === 0 ? (
                      <div className="flex gap-2">
                        <div className="grid grid-cols-2 gap-2 flex-1">
                          <ActionButton
                            icon={Download}
                            label="SVG"
                            onClick={handleDownloadSVG}
                          />
                          <ActionButton
                            icon={Copy}
                            activeIcon={Check}
                            label="SVG"
                            active={copied === CopyType.SVG}
                            onClick={handleCopySVG}
                          />
                          <ActionButton
                            icon={Download}
                            label="PNG"
                            onClick={handleDownloadPNG}
                          />
                          <ActionButton
                            icon={Copy}
                            activeIcon={Check}
                            label="Import"
                            active={copied === CopyType.IMPORT}
                            onClick={handleCopyImport}
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-8 self-stretch text-muted-foreground hover:text-primary flex items-center justify-center"
                          onClick={nextActionSet}
                          title="More options"
                          aria-label="Show more options"
                        >
                          <div className="w-4 h-4">
                            {renderIcon(ChevronRight)}
                          </div>
                        </Button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <div className="grid grid-cols-2 gap-2 flex-1">
                          <ActionButton
                            icon={Copy}
                            activeIcon={Check}
                            label="React"
                            active={copied === CopyType.REACT}
                            onClick={handleCopyReact}
                          />
                          <ActionButton
                            icon={Copy}
                            activeIcon={Check}
                            label="RN"
                            active={copied === CopyType.REACT_NATIVE}
                            onClick={handleCopyReactNative}
                          />
                          <ActionButton
                            icon={Copy}
                            activeIcon={Check}
                            label="Raw SVG"
                            active={copied === CopyType.SVG_RAW}
                            onClick={handleCopyRawSVG}
                          />
                          <ActionButton
                            icon={Copy}
                            activeIcon={Check}
                            label="Data URL"
                            active={copied === CopyType.SVG_DATA}
                            onClick={handleCopyDataSVG}
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-8 self-stretch text-muted-foreground hover:text-primary flex items-center justify-center"
                          onClick={prevActionSet}
                          title="Back"
                          aria-label="Show previous options"
                        >
                          <div className="w-4 h-4">
                            {renderIcon(ChevronLeft)}
                          </div>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right column: Tabs with content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Tabs
                    defaultValue="react"
                    className="h-full flex flex-col px-4"
                  >
                    <TabsList className="bg-muted/20 h-9 p-1">
                      {tabs.map((tab) => (
                        <TabsTrigger
                          key={tab.value}
                          value={tab.value}
                          className="text-xs data-[state=active]:bg-background data-[state=active]:shadow-sm h-7"
                        >
                          {tab.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    <div className="flex-1 ">
                      {tabs.map((tab) => (
                        <TabsContent
                          key={tab.value}
                          value={tab.value}
                          className="p-2 h-full data-[state=active]:mt-2"
                        >
                          {tab.content}
                        </TabsContent>
                      ))}
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
