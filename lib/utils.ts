import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function GetIconComponent(iconName: string): LucideIcon {
  const icon = (Icons as unknown as Record<string, LucideIcon>)[iconName];
  return icon ?? (Icons as unknown as Record<string, LucideIcon>)["HelpCircle"];
}
// ...existing code.

// export default function GetIconComponent(iconName: string): LucideIcon {
//   console.log("Looking for icon with name:", `|${iconName}|`);
//   if (!iconName) {
//     return HelpCircle; // Default fallback icon if no iconName is provided
//   }

//   const IconComponent = icons[iconName as keyof typeof icons];

//   if (IconComponent) {
//     return IconComponent;
//   }

//   console.warn(`Icon "${iconName}" not found. Falling back to default icon.`);
//   return HelpCircle; // Default fallback icon
// }
