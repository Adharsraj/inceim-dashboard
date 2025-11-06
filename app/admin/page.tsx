import DashboardPageLayout from "@/components/dashboard/layout"
import GearIcon from "@/components/icons/gear"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import ThemeCustomizer from "@/components/dashboard/theme-customizer"

export default function AdminPage() {
  return (
    <DashboardPageLayout
      header={{
        title: "Admin Settings",
        description: "System configuration and management",
        icon: GearIcon,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ThemeCustomizer />

        <Card className="border-pop bg-card">
          <CardHeader>
            <CardTitle>System Configuration</CardTitle>
            <CardDescription>Core system settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="maintenance">Maintenance Mode</Label>
              <Switch id="maintenance" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="analytics">Analytics Tracking</Label>
              <Switch id="analytics" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-backup">Auto Backup</Label>
              <Switch id="auto-backup" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Email Notifications</Label>
              <Switch id="notifications" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card className="border-pop bg-card">
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Manage system users</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-accent rounded">
              <div>
                <p className="font-semibold">KRIMSON</p>
                <p className="text-xs text-muted-foreground">krimson@joyco.studio</p>
              </div>
              <Badge>Admin</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-accent rounded">
              <div>
                <p className="font-semibold">MATI</p>
                <p className="text-xs text-muted-foreground">mati@joyco.studio</p>
              </div>
              <Badge variant="secondary">User</Badge>
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              Add New User
            </Button>
          </CardContent>
        </Card>

        <Card className="border-pop bg-card lg:col-span-2">
          <CardHeader>
            <CardTitle>Backup & Recovery</CardTitle>
            <CardDescription>Data protection and restoration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="flex flex-col items-center gap-2 bg-transparent">
                <span className="text-2xl">📦</span>
                <span className="text-xs">Full Backup</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center gap-2 bg-transparent">
                <span className="text-2xl">🔄</span>
                <span className="text-xs">Restore</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center gap-2 bg-transparent">
                <span className="text-2xl">📋</span>
                <span className="text-xs">Backup Logs</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center gap-2 bg-transparent">
                <span className="text-2xl">⚙️</span>
                <span className="text-xs">Schedule</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardPageLayout>
  )
}
