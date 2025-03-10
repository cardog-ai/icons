import * as React from "react";
import { SvgProps } from "react-native-svg";

/**
 * Union type of all available icon names
 * This will be auto-generated during the build process
 */
export type IconName =
  | "AcuraIcon"
  | "AcuraLogoHorizontal"
  | "AcuraLogo"
  | "AcuraWordmark"
  | "AudiIcon"
  | "AudiLogoHorizontal"
  | "AudiLogo"
  | "AudiWordmark"
  | "BMWIcon"
  | "BMWLogoHorizontal"
  | "BMWLogo"
  | "BMWWordmark"
  | "BentleyIcon"
  | "BentleyLogoHorizontal"
  | "BentleyLogo"
  | "BentleyWordmark"
  | "CadillacIcon"
  | "CadillacLogoHorizontal"
  | "CadillacLogo"
  | "CadillacWordmark"
  | "ChevroletIcon"
  | "ChevroletLogoHorizontal"
  | "ChevroletLogo"
  | "ChevroletWordmark"
  | "ChryslerIcon"
  | "ChryslerLogoHorizontal"
  | "ChryslerLogo"
  | "ChryslerWordmark"
  | "DodgeIcon"
  | "DodgeLogoHorizontal"
  | "DodgeLogo"
  | "DodgeWordmark"
  | "FerrariIcon"
  | "FerrariLogoHorizontal"
  | "FerrariLogo"
  | "FerrariWordmark"
  | "FordIcon"
  | "FordLogoHorizontal"
  | "FordLogo"
  | "FordWordmark"
  | "GenesisIcon"
  | "GenesisLogoHorizontal"
  | "GenesisLogo"
  | "GenesisWordmark"
  | "HondaIcon"
  | "HondaLogoHorizontal"
  | "HondaLogo"
  | "HondaWordmark"
  | "HyundaiIcon"
  | "HyundaiLogoHorizontal"
  | "HyundaiLogo"
  | "HyundaiWordmark"
  | "InfinitiIcon"
  | "InfinitiLogoHorizontal"
  | "InfinitiLogo"
  | "InfinitiWordmark"
  | "JaguarIcon"
  | "JaguarLogoHorizontal"
  | "JaguarLogo"
  | "JaguarWordmark"
  | "JeepIcon"
  | "JeepLogoHorizontal"
  | "JeepLogo"
  | "JeepWordmark"
  | "KiaIcon"
  | "KiaLogoHorizontal"
  | "KiaLogo"
  | "KiaWordmark"
  | "LamborghiniIcon"
  | "LamborghiniLogoHorizontal"
  | "LamborghiniLogo"
  | "LamborghiniWordmark"
  | "LandroverIcon"
  | "LandroverLogoHorizontal"
  | "LandroverLogo"
  | "LandroverWordmark"
  | "LexusIcon"
  | "LexusLogoHorizontal"
  | "LexusLogo"
  | "LexusWordmark"
  | "LincolnIcon"
  | "LincolnLogoHorizontal"
  | "LincolnLogo"
  | "LincolnWordmark"
  | "LucidIcon"
  | "LucidLogoHorizontal"
  | "LucidLogo"
  | "LucidWordmark"
  | "MBIcon"
  | "MBLogoHorizontal"
  | "MBLogo"
  | "MBWordmark"
  | "MaseratiIcon"
  | "MaseratiLogoHorizontal"
  | "MaseratiLogo"
  | "MaseratiWordmark"
  | "MazdaIcon"
  | "MazdaLogoHorizontal"
  | "MazdaLogo"
  | "MazdaWordmark"
  | "MclarenIcon"
  | "MclarenLogoHorizontal"
  | "MclarenLogo"
  | "MclarenWordmark"
  | "MiniIcon"
  | "MiniLogoHorizontal"
  | "MiniLogo"
  | "MiniWordmark"
  | "MitsubishiIcon"
  | "MitsubishiLogoHorizontal"
  | "MitsubishiLogo"
  | "MitsubishiWordmark"
  | "NissanIcon"
  | "NissanLogoHorizontal"
  | "NissanLogo"
  | "NissanWordmark"
  | "PolestarIcon"
  | "PolestarLogoHorizontal"
  | "PolestarLogo"
  | "PolestarWordmark"
  | "PorscheIcon"
  | "PorscheLogoHorizontal"
  | "PorscheLogo"
  | "PorscheWordmark"
  | "RAMIcon"
  | "RAMLogoHorizontal"
  | "RAMLogo"
  | "RAMWordmark"
  | "RollsRoyceIcon"
  | "RollsRoyceLogoHorizontal"
  | "RollsRoyceLogo"
  | "RollsRoyceWordmark"
  | "SubaruIcon"
  | "SubaruLogoHorizontal"
  | "SubaruLogo"
  | "SubaruWordmark"
  | "TeslaIcon"
  | "TeslaLogoHorizontal"
  | "TeslaLogo"
  | "TeslaWordmark"
  | "ToyotaIcon"
  | "ToyotaLogoHorizontal"
  | "ToyotaLogo"
  | "ToyotaWordmark"
  | "VolkswagenIcon"
  | "VolkswagenLogoHorizontal"
  | "VolkswagenLogo"
  | "VolkswagenWordmark"
  | "VolvoIcon"
  | "VolvoLogoHorizontal"
  | "VolvoLogo"
  | "VolvoWordmark";
/**
 * Props for the Icon component
 */
export interface IconProps extends SvgProps {
  /** The name of the icon to display */
  name: IconName;
  /** Size of the icon (both width and height) */
  size?: number;
  /** Color of the icon */
  color?: string;
}

/**
 * SVG props for React Native SVG components
 */
export type IconComponentProps = SvgProps;
