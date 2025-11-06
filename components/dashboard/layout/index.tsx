import React from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, LogOut, User, Settings } from "lucide-react";

interface DashboardPageLayoutProps {
  children: React.ReactNode;
  header: {
    title: string;
    description?: string;
    icon: React.ElementType;
  };
}

export default function DashboardPageLayout({
  children,
  header,
}: DashboardPageLayoutProps) {
  return (
    <div className="flex flex-col relative w-full gap-1 min-h-full">
      {/* ✅ Top Navbar */}
      <div className="sticky top-0 z-30 flex items-center justify-between px-4 md:px-6 py-3 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Search Bar */}
        <div className="flex items-center gap-2 w-full max-w-sm">
          <Search className="size-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent border-none focus-visible:ring-0 outline-none shadow-none"
          />
        </div>
        

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-full hover:opacity-80 transition">
              <Avatar className="size-9">
                <AvatarImage src="/avatars/user_krimson.png" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 mt-2" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 size-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 size-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <LogOut className="mr-2 size-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* ✅ Existing Header (adjusted top offset) */}
      <div className="flex items-center lg:items-baseline gap-2.5 md:gap-4 px-4 md:px-6 py-3 md:pb-4 lg:pt-7 ring-2 ring-pop sticky top-[56px] lg:top-[48.5px] bg-background z-20">
        <div className="max-lg:contents rounded bg-primary dark:text-white size-7 md:size-9 flex items-center justify-center my-auto">
          <header.icon className="ml-1 lg:ml-0 opacity-50 md:opacity-100 size-5 dark:text-white" />
        </div>
        <h1 className="text-xl lg:text-4xl font-display leading-[1] mb-1">
          {header.title}
        </h1>
        {header.description && (
          <span className="ml-auto text-xs md:text-sm text-muted-foreground block">
            {header.description}
          </span>
        )}
      </div>

      {/* ✅ Page Content */}
      <div className="min-h-full flex-1 flex flex-col gap-8 md:gap-14 px-3 lg:px-6 py-6 md:py-10 ring-2 ring-pop bg-background">
        {children}
      </div>
    </div>
  );
}
