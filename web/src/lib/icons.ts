import { IconName } from "@cardog-icons/react";

export type IconCategory = "Icon" | "Logo" | "LogoHorizontal" | "Wordmark";
export type FilterCategory = "All" | IconCategory;

// Icon information
export interface IconInfo {
  id: string;
  name: string;
  brand: string;
  category: IconCategory;
  componentName: IconName;
}

// Process the icon name (like "BMWLogo") into brand and category
function processIconName(iconName: IconName): IconInfo {
  const regex = /^([A-Za-z0-9]+)(Icon|Logo|LogoHorizontal|Wordmark)$/;
  const match = iconName.match(regex);

  if (!match) {
    throw new Error(`Invalid icon name format: ${iconName}`);
  }

  const [, brand, category] = match;

  return {
    id: iconName,
    name: iconName,
    brand,
    category: category as IconCategory,
    componentName: iconName,
  };
}

// All icon names from our library
const allIconNames: IconName[] = [
  "AcuraIcon",
  "AcuraLogoHorizontal",
  "AcuraLogo",
  "AcuraWordmark",
  "AudiIcon",
  "AudiLogoHorizontal",
  "AudiLogo",
  "AudiWordmark",
  "BMWIcon",
  "BMWLogoHorizontal",
  "BMWLogo",
  "BMWWordmark",
  "BentleyIcon",
  "BentleyLogoHorizontal",
  "BentleyLogo",
  "BentleyWordmark",
  "CadillacIcon",
  "CadillacLogoHorizontal",
  "CadillacLogo",
  "CadillacWordmark",
  "ChevroletIcon",
  "ChevroletLogoHorizontal",
  "ChevroletLogo",
  "ChevroletWordmark",
  "ChryslerIcon",
  "ChryslerLogoHorizontal",
  "ChryslerLogo",
  "ChryslerWordmark",
  "DodgeIcon",
  "DodgeLogoHorizontal",
  "DodgeLogo",
  "DodgeWordmark",
  "FerrariIcon",
  "FerrariLogoHorizontal",
  "FerrariLogo",
  "FerrariWordmark",
  "FordIcon",
  "FordLogoHorizontal",
  "FordLogo",
  "FordWordmark",
  "GenesisIcon",
  "GenesisLogoHorizontal",
  "GenesisLogo",
  "GenesisWordmark",
  "HondaIcon",
  "HondaLogoHorizontal",
  "HondaLogo",
  "HondaWordmark",
  "HyundaiIcon",
  "HyundaiLogoHorizontal",
  "HyundaiLogo",
  "HyundaiWordmark",
  "InfinitiIcon",
  "InfinitiLogoHorizontal",
  "InfinitiLogo",
  "InfinitiWordmark",
  "JaguarIcon",
  "JaguarLogoHorizontal",
  "JaguarLogo",
  "JaguarWordmark",
  "JeepIcon",
  "JeepLogoHorizontal",
  "JeepLogo",
  "JeepWordmark",
  "KiaIcon",
  "KiaLogoHorizontal",
  "KiaLogo",
  "KiaWordmark",
  "LamborghiniIcon",
  "LamborghiniLogoHorizontal",
  "LamborghiniLogo",
  "LamborghiniWordmark",
  "LandroverIcon",
  "LandroverLogoHorizontal",
  "LandroverLogo",
  "LandroverWordmark",
  "LexusIcon",
  "LexusLogoHorizontal",
  "LexusLogo",
  "LexusWordmark",
  "LucidIcon",
  "LucidLogoHorizontal",
  "LucidLogo",
  "LucidWordmark",
  "MBIcon",
  "MBLogoHorizontal",
  "MBLogo",
  "MBWordmark",
  "MaseratiIcon",
  "MaseratiLogoHorizontal",
  "MaseratiLogo",
  "MaseratiWordmark",
  "MazdaIcon",
  "MazdaLogoHorizontal",
  "MazdaLogo",
  "MazdaWordmark",
  "MclarenIcon",
  "MclarenLogoHorizontal",
  "MclarenLogo",
  "MclarenWordmark",
  "MiniIcon",
  "MiniLogoHorizontal",
  "MiniLogo",
  "MiniWordmark",
  "MitsubishiIcon",
  "MitsubishiLogoHorizontal",
  "MitsubishiLogo",
  "MitsubishiWordmark",
  "NissanIcon",
  "NissanLogoHorizontal",
  "NissanLogo",
  "NissanWordmark",
  "PolestarIcon",
  "PolestarLogoHorizontal",
  "PolestarLogo",
  "PolestarWordmark",
  "PorscheIcon",
  "PorscheLogoHorizontal",
  "PorscheLogo",
  "PorscheWordmark",
  "RAMIcon",
  "RAMLogoHorizontal",
  "RAMLogo",
  "RAMWordmark",
  "RollsRoyceIcon",
  "RollsRoyceLogoHorizontal",
  "RollsRoyceLogo",
  "RollsRoyceWordmark",
  "SubaruIcon",
  "SubaruLogoHorizontal",
  "SubaruLogo",
  "SubaruWordmark",
  "TeslaIcon",
  "TeslaLogoHorizontal",
  "TeslaLogo",
  "TeslaWordmark",
  "ToyotaIcon",
  "ToyotaLogoHorizontal",
  "ToyotaLogo",
  "ToyotaWordmark",
  "VolkswagenIcon",
  "VolkswagenLogoHorizontal",
  "VolkswagenLogo",
  "VolkswagenWordmark",
  "VolvoIcon",
  "VolvoLogoHorizontal",
  "VolvoLogo",
  "VolvoWordmark",
];

// Process all icons
export const allIcons: IconInfo[] = allIconNames.map(processIconName);

// Get all unique brands
export const allBrands = [...new Set(allIcons.map((icon) => icon.brand))];

// Get unique categories with proper display names
export const allCategories: { id: IconCategory | "All"; name: string }[] = [
  { id: "All", name: "All Types" },
  { id: "Icon", name: "Icons" },
  { id: "Logo", name: "Logos" },
  { id: "LogoHorizontal", name: "Horizontal Logos" },
  { id: "Wordmark", name: "Wordmarks" },
];

// Filter icons by brand and category
export function filterIcons(
  icons: IconInfo[],
  brand?: string | "All",
  category?: IconCategory | "All",
  searchQuery?: string
): IconInfo[] {
  return icons.filter((icon) => {
    if (brand && brand !== "All" && icon.brand !== brand) return false;
    if (category && category !== "All" && icon.category !== category)
      return false;
    if (
      searchQuery &&
      !icon.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !icon.brand.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });
}
