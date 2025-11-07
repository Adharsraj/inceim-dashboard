import DashboardPageLayout from "@/components/dashboard/layout"
import MonkeyIcon from "@/components/icons/monkey"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ProfilePage() {
  return (
    <DashboardPageLayout
      header={{
        title: "Profile",
        description: "Manage your account settings",
        icon: MonkeyIcon,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="border-pop bg-card lg:col-span-1">
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-lg bg-primary flex items-center justify-center overflow-hidden">
                <Image src="/avatars/user_krimson.png" alt="Profile" width={96} height={96} />
              </div>
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              Change Avatar
            </Button>
          </CardContent>
        </Card>

        <Card className="border-pop bg-card lg:col-span-2">
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Update your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="KRIMSON" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="handle">Handle</Label>
                <Input id="handle" defaultValue="@KRIMSON" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="krimson@joyco.studio" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Input id="bio" placeholder="Tell us about yourself..." maxLength={160} />
            </div>

            <Button>Save Changes</Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-pop bg-card">
        <CardHeader>
          <CardTitle>Activity & Stats</CardTitle>
          <CardDescription>Your contribution metrics</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Points</p>
            <p className="text-2xl font-display">148</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Streak</p>
            <Badge>2 WEEKS</Badge>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Joined</p>
            <p className="text-sm">Jul 2024</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Tier</p>
            <Badge variant="secondary">REBEL</Badge>
          </div>
        </CardContent>
      </Card>
    </DashboardPageLayout>
  )
}
