"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useThemeCustomization } from "@/hooks/use-theme-customization"
import { Separator } from "@/components/ui/separator"
import { ColorPicker } from "@/components/dashboard/color-picker"
import { FontSelector } from "@/components/dashboard/font-selector"

export default function ThemeCustomizer() {
  const { theme, updateTheme, resetTheme, fontOptions } = useThemeCustomization()
  const [expanded, setExpanded] = useState(false)

  const handleColorChange = (key: keyof typeof theme, value: string) => {
    if (key.includes("Color")) {
      updateTheme({ [key]: value })
    }
  }

  const handleFontChange = (fontValue: string) => {
    updateTheme({ fontFamily: fontValue })
  }

  return (
    <Card className="border-pop bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Theme Customization</CardTitle>
            <CardDescription>Personalize your dashboard appearance</CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={() => setExpanded(!expanded)} className="bg-transparent">
            {expanded ? "Hide" : "Show"}
          </Button>
        </div>
      </CardHeader>

      {expanded && (
        <>
          <Separator />
          <CardContent className="pt-6 space-y-8">
            {/* Color Customization */}
            <div className="space-y-4">
              <h3 className="font-semibold text-base">Colors</h3>
              <div className="space-y-4">
                <ColorPicker
                  label="Primary Color"
                  value={theme.primaryColor}
                  onChange={(val) => handleColorChange("primaryColor", val)}
                  description="Main brand color for buttons and highlights"
                />
                <ColorPicker
                  label="Accent Color"
                  value={theme.accentColor}
                  onChange={(val) => handleColorChange("accentColor", val)}
                  description="Secondary accent color"
                />
                <ColorPicker
                  label="Background Color"
                  value={theme.backgroundColor}
                  onChange={(val) => handleColorChange("backgroundColor", val)}
                  description="Primary background color"
                />
              </div>
            </div>

            <Separator />

            {/* Font Customization */}
            <div className="space-y-4">
              <h3 className="font-semibold text-base">Font Family</h3>
              <FontSelector
                label="Choose Font"
                value={theme.fontFamily}
                options={fontOptions}
                onChange={handleFontChange}
              />
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button onClick={resetTheme} variant="outline" className="flex-1 bg-transparent">
                Reset to Default
              </Button>
              <Button onClick={() => setExpanded(false)} className="flex-1">
                Done
              </Button>
            </div>
          </CardContent>
        </>
      )}
    </Card>
  )
}
