"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// 🚀 FIXED: Removed the direct path to dist/types which was causing the build error
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}