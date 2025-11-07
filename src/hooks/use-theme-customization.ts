"use client"

import { useEffect, useState } from "react"

export interface ThemeCustomization {
  primaryColor: string
  accentColor: string
  backgroundColor: string
  fontFamily: string
}

const DEFAULT_THEME: ThemeCustomization = {
  primaryColor: "oklch(0.4703 0.2364 263.19)",
  accentColor: "oklch(0.9851 0 0 / 5%)",
  backgroundColor: "oklch(0.2029 0.0037 345.62)",
  fontFamily: "rebels",
}

const FONT_OPTIONS = [
  { name: "Rebels", value: "rebels", family: "var(--font-rebels)", description: "M.O.N.K.Y OS Default Font" },
  { name: "Roboto Mono", value: "roboto", family: "var(--font-roboto-mono)", description: "Clean monospace font" },
  { name: "System Default", value: "system", family: "system-ui", description: "Your system's default font" },
]

export function useThemeCustomization() {
  const [theme, setTheme] = useState<ThemeCustomization>(DEFAULT_THEME)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("monkey-os-theme")
    if (savedTheme) {
      try {
        setTheme(JSON.parse(savedTheme))
      } catch (e) {
        console.error("Failed to parse saved theme:", e)
      }
    }
    setIsLoaded(true)
  }, [])

  // Apply theme to CSS variables
  useEffect(() => {
    if (!isLoaded) return

    const root = document.documentElement
    root.style.setProperty("--primary", theme.primaryColor)
    root.style.setProperty("--accent", theme.accentColor)
    root.style.setProperty("--background", theme.backgroundColor)

    // Apply font family
    const fontOption = FONT_OPTIONS.find((f) => f.value === theme.fontFamily)
    if (fontOption) {
      root.style.setProperty("--font-primary", fontOption.family)
    }

    // Save to localStorage
    localStorage.setItem("monkey-os-theme", JSON.stringify(theme))
  }, [theme, isLoaded])

  const updateTheme = (updates: Partial<ThemeCustomization>) => {
    setTheme((prev) => ({ ...prev, ...updates }))
  }

  const resetTheme = () => {
    setTheme(DEFAULT_THEME)
    localStorage.removeItem("monkey-os-theme")
  }

  return {
    theme,
    updateTheme,
    resetTheme,
    fontOptions: FONT_OPTIONS,
    isLoaded,
  }
}
