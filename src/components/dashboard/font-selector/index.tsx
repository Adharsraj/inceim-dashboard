"use client"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export interface FontOption {
  name: string
  value: string
  family: string
  description?: string
}

interface FontSelectorProps {
  label: string
  value: string
  options: FontOption[]
  onChange: (value: string) => void
}

export function FontSelector({ label, value, options, onChange }: FontSelectorProps) {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">{label}</Label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((font) => (
          <Card
            key={font.value}
            className={`p-4 cursor-pointer transition-all border-2 ${
              value === font.value ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
            }`}
            onClick={() => onChange(font.value)}
          >
            <div className="space-y-2" style={{ fontFamily: font.family }}>
              <p className="text-base font-semibold">{font.name}</p>
              {font.description && <p className="text-xs text-muted-foreground">{font.description}</p>}
              <p className="text-sm opacity-70">The quick brown fox jumps over the lazy dog</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
