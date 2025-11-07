import { useEffect } from "react";
import { Outlet } from "react-router";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import mockDataJson from "../mock.json";
import type { MockData } from "@/types/dashboard";
import { MobileHeader } from "./components/dashboard/mobile-header";
import { DashboardSidebar } from "./components/dashboard/sidebar";
import Widget from "./components/dashboard/widget";
import Notifications from "./components/dashboard/notifications";
import { MobileChat } from "./components/chat/mobile-chat";
import Chat from "./components/chat";

const Layout = () => {
  const mockData = mockDataJson as MockData;

  // Set page title dynamically (optional, can be overridden in route)
  useEffect(() => {
    document.title = "Inciem Dashboard";
  }, []);

  // Apply saved theme from localStorage

  return (
    <div>
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

            <div className="col-span-1 lg:col-span-7">
              <Outlet /> {/* renders child route */}
            </div>

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
    </div>
  );
};

export default Layout;
