import DashboardPageLayout from "@/components/dashboard/layout"
import EmailIcon from "@/components/icons/email"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const messages = [
  {
    from: "KRIMSON",
    subject: "Project Status Update",
    preview: "The latest deployment is running smoothly...",
    time: "2 hours ago",
    unread: true,
  },
  {
    from: "MATI",
    subject: "Code Review Ready",
    preview: "Please review the feature branch for the new auth system...",
    time: "4 hours ago",
    unread: true,
  },
  {
    from: "PEK",
    subject: "Infrastructure Changes",
    preview: "We are planning to upgrade the database servers...",
    time: "1 day ago",
    unread: false,
  },
]

export default function CommunicationPage() {
  return (
    <DashboardPageLayout
      header={{
        title: "Communication",
        description: "Team messages and notifications",
        icon: EmailIcon,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-3">
          <Button className="w-full">New Message</Button>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start bg-transparent">
              Inbox (2)
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Sent
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Drafts
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Archive
            </Button>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <div className="flex gap-2">
            <Input placeholder="Search messages..." />
            <Button variant="outline">Filter</Button>
          </div>

          <div className="space-y-2">
            {messages.map((msg, idx) => (
              <Card
                key={idx}
                className={`border-pop cursor-pointer hover:bg-accent/50 ${msg.unread ? "bg-accent/30" : "bg-card"}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <p className="font-display font-semibold">{msg.from}</p>
                      {msg.unread && (
                        <Badge variant="default" className="text-xs">
                          NEW
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <p className="font-semibold text-sm mb-1">{msg.subject}</p>
                  <p className="text-sm text-muted-foreground">{msg.preview}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardPageLayout>
  )
}
