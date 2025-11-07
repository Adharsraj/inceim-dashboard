import DashboardPageLayout from "@/components/dashboard/layout"
import ProcessorIcon from "@/components/icons/proccesor"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const devices = [
  { name: "Main Server", status: "online", uptime: "99.9%", cpu: "45%" },
  { name: "Backup Node", status: "online", uptime: "99.8%", cpu: "28%" },
  { name: "Worker-1", status: "online", uptime: "98.5%", cpu: "72%" },
  { name: "Worker-2", status: "idle", uptime: "99.7%", cpu: "5%" },
]

export default function DevicesPage() {
  return (
    <DashboardPageLayout
      header={{
        title: "Devices",
        description: "Manage connected hardware and nodes",
        icon: ProcessorIcon,
      }}
    >
      <div className="space-y-6">
        <Card className="border-pop bg-card">
          <CardHeader>
            <CardTitle>Active Devices</CardTitle>
            <CardDescription>Overview of all connected nodes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {devices.map((device) => (
                <div key={device.name}>
                  <div className="flex items-center justify-between pb-3">
                    <div>
                      <p className="font-display font-semibold">{device.name}</p>
                      <p className="text-sm text-muted-foreground">Uptime: {device.uptime}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-mono">CPU: {device.cpu}</p>
                        <Badge variant={device.status === "online" ? "default" : "secondary"}>{device.status}</Badge>
                      </div>
                      <Button size="sm" variant="outline">
                        Details
                      </Button>
                    </div>
                  </div>
                  <Separator className="mt-3" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-pop bg-card">
          <CardHeader>
            <CardTitle>Add New Device</CardTitle>
            <CardDescription>Register a new node in the network</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Connect Device</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardPageLayout>
  )
}
