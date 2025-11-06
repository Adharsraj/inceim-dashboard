"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import DashboardPageLayout from "@/components/dashboard/layout"
import CuteRobotIcon from "@/components/icons/cute-robot"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  React.useEffect(() => {
    console.error("Application error:", error)
  }, [error])

  return (
    <DashboardPageLayout
      header={{
        title: "Error",
        description: "Something went wrong",
        icon: CuteRobotIcon,
      }}
    >
      <div className="flex flex-col items-center justify-center gap-6 min-h-full">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-display font-bold">Oops!</h2>
          <p className="text-muted-foreground max-w-md">
            {error.message || "An unexpected error occurred. Please try again."}
          </p>
        </div>
        <div className="flex gap-4">
          <Button onClick={() => reset()}>Try Again</Button>
          <Button variant="outline" asChild>
            <a href="/">Go Home</a>
          </Button>
        </div>
      </div>
    </DashboardPageLayout>
  )
}
