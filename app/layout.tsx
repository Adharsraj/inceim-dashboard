import type React from "react"
import { Roboto_Mono } from "next/font/google"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { MobileHeader } from "@/components/dashboard/mobile-header"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import mockDataJson from "@/mock.json"
import type { MockData } from "@/types/dashboard"
import Widget from "@/components/dashboard/widget"
import Notifications from "@/components/dashboard/notifications"
import { MobileChat } from "@/components/chat/mobile-chat"
import Chat from "@/components/chat"

const mockData = mockDataJson as MockData

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
})

const rebelGrotesk = localFont({
  src: "../public/fonts/Rebels-Fett.woff2",
  variable: "--font-rebels",
  display: "swap",
})


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: {
    template: "%s – Inciem",
    default: "Inciem Dashboard",
  },
  description: "Inciem - Enterprise Intelligence Dashboard. Empowering teams with data-driven insights.",
  keywords: "dashboard, Inciem, enterprise, analytics",
  authors: [{ name: "Inciem" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" href="/fonts/Rebels-Fett.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script>
          {`
            const savedTheme = localStorage.getItem('theme') || 'dark';
            if (savedTheme === 'light') {
              document.documentElement.classList.remove('dark');
            } else {
              document.documentElement.classList.add('dark');
            }
          `}
        </script>
      </head>
      <body className={`${rebelGrotesk.variable} ${robotoMono.variable} antialiased`}>
          <SidebarProvider>
            {/* Mobile Header - only visible on mobile */}
            <MobileHeader mockData={mockData} />

            {/* Mobile Sidebar - managed by SidebarTrigger */}
            <DashboardSidebar />

            {/* Main Content Area */}
            <SidebarInset>
              <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gap lg:px-sides">
                <div className="hidden lg:block col-span-2 top-0 relative">
                  <DashboardSidebar />
                </div>
                <div className="col-span-1 lg:col-span-7">{children}</div>
                <div className="col-span-3 hidden lg:block">
                  <div className="space-y-gap py-sides min-h-screen max-h-screen sticky top-0 overflow-clip">
                    <Widget widgetData={mockData.widgetData} />
                    <Notifications initialNotifications={mockData.notifications} />
                    <Chat />
                  </div>
                </div>
              </div>
            </SidebarInset>

            {/* Mobile Chat - floating CTA with drawer */}
            <MobileChat />
          </SidebarProvider>
      </body>
    </html>
  )
}
