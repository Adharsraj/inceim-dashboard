"use client";

import type { TeamMember } from "@/data/organization";
import { motion } from "framer-motion";

interface OrgMemberCardProps {
  member: TeamMember;
  role?: string;
  level?: number;
}

const statusColors = {
  online: "bg-emerald-500",
  offline: "bg-gray-500",
  away: "bg-amber-500",
};

export function OrgMemberCard({ member, role, level = 0 }: OrgMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: level * 0.1 }}
      className="flex flex-col items-center"
    >
      <motion.div whileHover={{ scale: 1.05 }} className="relative mb-3">
        <div className="relative w-16 h-16 rounded-lg overflow-clip border-2 border-sidebar-primary bg-sidebar-primary-foreground/10">
          <img
            src={member.avatar || "/placeholder.svg"}
            alt={member.name}
            className="object-cover"
          />
          <div
            className={`absolute bottom-1 right-1 w-3 h-3 rounded-full ${
              statusColors[member.status]
            } border border-background`}
          />
        </div>
      </motion.div>
      <div className="text-center max-w-xs">
        <h4 className="font-display text-sm font-bold text-foreground truncate">
          {member.name}
        </h4>
        <p className="text-xs text-muted-foreground uppercase truncate">
          {role || member.role}
        </p>
        <p className="text-xs text-muted-foreground opacity-75 truncate">
          {member.email}
        </p>
      </div>
    </motion.div>
  );
}
