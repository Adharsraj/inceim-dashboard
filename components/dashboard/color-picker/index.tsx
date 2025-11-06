"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

interface ColorPickerProps {
  label: string
  value: string
  onChange: (value: string) => void
  description?: string
}

export function ColorPicker({ label, value, onChange, description }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hexColor, setHexColor] = useState("#6366f1")
  const [lightness, setLightness] = useState(50)
  const [chroma, setChroma] = useState(0.2)
  const [hue, setHue] = useState(263)

  const oklchToHex = (oklch: string) => {
    const match = oklch.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)/)
    if (!match) return "#6366f1"
    const h = Number.parseFloat(match[3])
    return `hsl(${h}, 100%, 50%)`
  }

  const hexToOklch = (hex: string, l: number, c: number, h: number) => {
    return `oklch(${l / 100} ${c} ${h})`
  }

  const currentHex = oklchToHex(value)

  const handleColorChange = (newHex: string) => {
    setHexColor(newHex)
    const hslMatch = newHex.match(/hsl\(([\d.]+)/)
    if (hslMatch) {
      const newHue = Number.parseFloat(hslMatch[1])
      setHue(newHue)
      onChange(hexToOklch(newHex, lightness, chroma, newHue))
    }
  }

  const handleLightnessChange = (l: number) => {
    setLightness(l)
    onChange(hexToOklch(hexColor, l, chroma, hue))
  }

  const handleChromaChange = (c: number) => {
    setChroma(c / 1000)
    onChange(hexToOklch(hexColor, lightness, c / 1000, hue))
  }

  const handleHueChange = (h: number) => {
    setHue(h)
    onChange(hexToOklch(hexColor, lightness, chroma, h))
  }

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">{label}</Label>
      {description && <p className="text-xs text-muted-foreground">{description}</p>}

      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full h-12 justify-start gap-3 bg-transparent border-border hover:bg-secondary"
          >
            <div className="w-8 h-8 rounded border border-border" style={{ backgroundColor: currentHex }} />
            <div className="flex-1 text-left">
              <p className="text-sm font-medium">{label}</p>
              <p className="text-xs text-muted-foreground">{value}</p>
            </div>
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-80 bg-card border-border">
          <div className="space-y-4">
            <div>
              <Label htmlFor={`hex-${label}`} className="text-xs">
                Hex Color
              </Label>
              <Input
                id={`hex-${label}`}
                type="color"
                value={currentHex}
                onChange={(e) => handleColorChange(e.target.value)}
                className="w-full h-10 cursor-pointer bg-transparent border-border"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label className="text-xs">Lightness</Label>
                <span className="text-xs text-muted-foreground">{lightness}%</span>
              </div>
              <Input
                type="range"
                min="0"
                max="100"
                value={lightness}
                onChange={(e) => handleLightnessChange(Number(e.target.value))}
                className="w-full cursor-pointer accent-primary"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label className="text-xs">Chroma (Saturation)</Label>
                <span className="text-xs text-muted-foreground">{chroma.toFixed(2)}</span>
              </div>
              <Input
                type="range"
                min="0"
                max="300"
                value={chroma * 1000}
                onChange={(e) => handleChromaChange(Number(e.target.value))}
                className="w-full cursor-pointer accent-primary"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label className="text-xs">Hue</Label>
                <span className="text-xs text-muted-foreground">{hue.toFixed(0)}°</span>
              </div>
              <Input
                type="range"
                min="0"
                max="360"
                value={hue}
                onChange={(e) => handleHueChange(Number(e.target.value))}
                className="w-full cursor-pointer accent-primary"
              />
            </div>

            <div className="pt-2 border-t border-border">
              <p className="text-xs font-mono text-muted-foreground break-all">{value}</p>
            </div>

            <Button onClick={() => setIsOpen(false)} className="w-full">
              Done
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
