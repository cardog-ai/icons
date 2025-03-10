#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const REACT_COMPONENTS_DIR = path.resolve(__dirname, '../react/src/components');
const REACT_NATIVE_COMPONENTS_DIR = path.resolve(__dirname, '../react-native/src/components');
const ICON_COMPONENT_NAME = 'Icon.tsx';

// Function to preserve the Icon component and remove all other components
function cleanComponentDirectory(directory) {
  console.log(`Cleaning directory: ${directory}`);

  // Check if the directory exists
  if (!fs.existsSync(directory)) {
    console.log(`Directory ${directory} does not exist. Creating it.`);
    fs.mkdirSync(directory, { recursive: true });
    return;
  }

  // Preserve the Icon.tsx file if it exists
  const iconPath = path.join(directory, ICON_COMPONENT_NAME);
  let iconContent = null;

  if (fs.existsSync(iconPath)) {
    console.log(`Preserving ${ICON_COMPONENT_NAME}`);
    iconContent = fs.readFileSync(iconPath, 'utf8');
  }

  // Delete all files in the directory
  fs.readdirSync(directory).forEach(file => {
    const filePath = path.join(directory, file);
    if (fs.lstatSync(filePath).isFile()) {
      fs.unlinkSync(filePath);
    }
  });

  // Restore the Icon.tsx file
  if (iconContent) {
    console.log(`Restoring ${ICON_COMPONENT_NAME}`);
    fs.writeFileSync(iconPath, iconContent);
  } else {
    // Create a basic Icon component if it doesn't exist
    console.log(`Creating basic ${ICON_COMPONENT_NAME}`);

    if (directory === REACT_COMPONENTS_DIR) {
      // React version
      fs.writeFileSync(iconPath, `import * as React from 'react';
import { IconProps } from '../types';
import { useIcon } from '../hooks/useIcon';

/**
 * Icon component that renders an SVG icon by name
 */
export const Icon: React.FC<IconProps> = (props) => {
  return useIcon(props);
};

Icon.displayName = 'Icon';

export default Icon;`);
    } else {
      // React Native version
      fs.writeFileSync(iconPath, `import * as React from 'react';
import { IconProps } from '../types';
import { useIcon } from '../hooks/useIcon';

/**
 * Icon component that renders an SVG icon by name in React Native
 */
export const Icon: React.FC<IconProps> = (props) => {
  return useIcon(props);
};

Icon.displayName = 'Icon';

export default Icon;`);
    }
  }
}

// Main execution function
function main() {
  try {
    console.log('Cleaning component directories...');

    // Clean React components
    cleanComponentDirectory(REACT_COMPONENTS_DIR);

    // Clean React Native components
    cleanComponentDirectory(REACT_NATIVE_COMPONENTS_DIR);

    console.log('\nRunning component generation...');

    // Execute the generate scripts
    console.log('Generating React components...');
    execSync('pnpm generate:react', { stdio: 'inherit', cwd: path.resolve(__dirname, '..') });

    console.log('\nGenerating React Native components...');
    execSync('pnpm generate:native', { stdio: 'inherit', cwd: path.resolve(__dirname, '..') });

    console.log('\nBuilding packages...');
    execSync('pnpm build', { stdio: 'inherit', cwd: path.resolve(__dirname, '..') });

    console.log('\nAll done! 🎉');
  } catch (error) {
    console.error('\nError during clean and build:', error);
    process.exit(1);
  }
}

main(); 