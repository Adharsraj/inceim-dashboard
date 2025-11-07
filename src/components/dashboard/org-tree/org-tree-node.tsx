"use client"

import type { Team, Department } from "@/data/organization"
import { motion } from "framer-motion"
import { OrgMemberCard } from "./org-member-card"

interface OrgTreeNodeProps {
  department: Department
  isExpanded?: boolean
}

export function OrgTreeNode({ department, isExpanded = true }: OrgTreeNodeProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center w-full">
      {/* Department Head */}
      <div className="mb-4">
        <OrgMemberCard member={department.head} role="Department Head" level={1} />
      </div>

      {/* Connector from department head to teams */}
      {isExpanded && department.teams.length > 0 && (
        <div className="w-1 h-8 bg-gradient-to-b from-sidebar-primary to-sidebar-primary/60 shadow-md shadow-sidebar-primary/25" />
      )}

      {/* Teams Container */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          {department.teams.length > 1 && (
            <div className="h-1 bg-gradient-to-r from-transparent via-sidebar-primary/40 to-transparent mb-6 shadow-sm shadow-sidebar-primary/20" />
          )}

          <div className="flex flex-wrap gap-6 justify-center">
            {department.teams.map((team, teamIndex) => (
              <TeamNode key={team.id} team={team} teamIndex={teamIndex} totalTeams={department.teams.length} />
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

function TeamNode({
  team,
  teamIndex,
  totalTeams,
}: {
  team: Team
  teamIndex: number
  totalTeams: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: teamIndex * 0.1 }}
      className="flex flex-col items-center"
      style={{ flex: `1 1 ${100 / Math.min(totalTeams, 2)}%`, minWidth: "220px" }}
    >
      {/* Connector from horizontal line to team lead */}
      <div className="w-1 h-6 bg-gradient-to-b from-sidebar-primary/40 to-sidebar-primary shadow-md shadow-sidebar-primary/20 mb-4" />

      {/* Team Lead Card */}
      <div className="mb-4 p-3 rounded-lg border-2 border-sidebar-primary/40 dark:border-sidebar-primary/60 bg-sidebar-primary-foreground/5 dark:bg-sidebar-primary/5 w-full text-center">
        <OrgMemberCard member={team.lead} role="Team Lead" level={2} />
        <p className="text-center text-xs font-bold uppercase text-sidebar-primary mt-2">{team.name}</p>
      </div>

      {/* Connector from team lead to members */}
      {team.members.length > 0 && (
        <div className="w-1 h-4 bg-gradient-to-b from-sidebar-primary/60 to-sidebar-primary/30 shadow-md shadow-sidebar-primary/20 mb-4" />
      )}

      {/* Team Members */}
      {team.members.length > 0 && (
        <>
          {team.members.length > 1 && (
            <div className="h-1 bg-gradient-to-r from-transparent via-sidebar-primary/50 to-transparent mb-4 w-full shadow-sm shadow-sidebar-primary/20" />
          )}

          <div className="flex flex-wrap gap-4 justify-center">
            {team.members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                className="relative"
              >
                {/* Connector from horizontal member line to member */}
                <div className="absolute -top-4 left-1/2 w-1 h-4 bg-gradient-to-b from-sidebar-primary/50 to-sidebar-primary/30 shadow-md shadow-sidebar-primary/20 -translate-x-1/2" />
                <OrgMemberCard member={member} level={3} />
              </motion.div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  )
}
