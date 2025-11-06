import DashboardPageLayout from "@/components/dashboard/layout"
import AtomIcon from "@/components/icons/atom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function LaboratoryPage() {
  return (
    <DashboardPageLayout
      header={{
        title: "Laboratory",
        description: "Experimental features and tools",
        icon: AtomIcon,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-pop bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Quantum Processor
              <Badge variant="secondary">BETA</Badge>
            </CardTitle>
            <CardDescription>Advanced computational engine</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Test cutting-edge processing capabilities with real-time analysis and adaptive algorithms.
            </p>
            <Button className="w-full">Launch Experiment</Button>
          </CardContent>
        </Card>

        <Card className="border-pop bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Neural Network
              <Badge variant="secondary">ALPHA</Badge>
            </CardTitle>
            <CardDescription>Machine learning playground</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Train and deploy custom models with integrated data pipelines and performance tracking.
            </p>
            <Button className="w-full">Start Training</Button>
          </CardContent>
        </Card>

        <Card className="border-pop bg-card">
          <CardHeader>
            <CardTitle>Data Visualization Lab</CardTitle>
            <CardDescription>Interactive analytics dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Explore multi-dimensional datasets with interactive 3D visualizations and export tools.
            </p>
            <Button className="w-full">Explore Data</Button>
          </CardContent>
        </Card>

        <Card className="border-pop bg-card">
          <CardHeader>
            <CardTitle>API Sandbox</CardTitle>
            <CardDescription>Test endpoints safely</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Make test requests to all available endpoints with built-in request/response formatting.
            </p>
            <Button className="w-full">Open Sandbox</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardPageLayout>
  )
}
