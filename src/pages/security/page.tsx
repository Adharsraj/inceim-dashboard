import DashboardPageLayout from "@/components/dashboard/layout"
import CuteRobotIcon from "@/components/icons/cute-robot"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function SecurityPage() {
  return (
    <DashboardPageLayout
      header={{
        title: "Security",
        description: "Monitor system protection and threats",
        icon: CuteRobotIcon,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="border-pop bg-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Guard Bots Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-display mb-2">124/124</div>
            <Badge variant="default">ALL RUNNING</Badge>
          </CardContent>
        </Card>

        <Card className="border-pop bg-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Firewall Protection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-display mb-2">99.9%</div>
            <Badge variant="default">ACTIVE</Badge>
          </CardContent>
        </Card>

        <Card className="border-pop bg-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Threats Blocked</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-display mb-2">247</div>
            <Badge variant="secondary">LAST HOUR</Badge>
          </CardContent>
        </Card>
      </div>

      <Card className="border-pop bg-card">
        <CardHeader>
          <CardTitle>Recent Security Events</CardTitle>
          <CardDescription>Latest alerts and activities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start justify-between pb-3">
            <div>
              <p className="font-semibold">Suspicious Login Attempt</p>
              <p className="text-sm text-muted-foreground">From IP: 192.168.1.100</p>
            </div>
            <Badge variant="destructive">BLOCKED</Badge>
          </div>
          <Separator />
          <div className="flex items-start justify-between pb-3">
            <div>
              <p className="font-semibold">Certificate Updated</p>
              <p className="text-sm text-muted-foreground">SSL/TLS renewed successfully</p>
            </div>
            <Badge variant="default">SUCCESS</Badge>
          </div>
          <Separator />
          <div className="flex items-start justify-between">
            <div>
              <p className="font-semibold">Firewall Rules Modified</p>
              <p className="text-sm text-muted-foreground">2 new inbound rules added</p>
            </div>
            <Badge variant="secondary">INFO</Badge>
          </div>
        </CardContent>
      </Card>
    </DashboardPageLayout>
  )
}
