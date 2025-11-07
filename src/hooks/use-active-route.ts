"use client";

import { useLocation } from "react-router";

export function useActiveRoute() {
  const { pathname } = useLocation();

  const isActive = (href: string): boolean => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return { pathname, isActive };
}
