"use client"

import type { Organization } from "@/data/organization"
import { useState } from "react"
import { motion } from "framer-motion"
import { OrgMemberCard } from "./org-member-card"
import { OrgTreeNode } from "./org-tree-node"

interface OrgTreeProps {
  organization: Organization
}

export function OrgTree({ organization }: OrgTreeProps) {
  const [expandedDepts, setExpandedDepts] = useState<Set<string>>(new Set(organization.departments.map((d) => d.id)))

  const toggleDepartment = (deptId: string) => {
    setExpandedDepts((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(deptId)) {
        newSet.delete(deptId)
      } else {
        newSet.add(deptId)
      }
      return newSet
    })
  }

  return (
    <motion.div className="w-full space-y-12 pb-12">
      {/* CEO Level */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center relative"
      >
        <div className="flex flex-col items-center">
          <div className="text-xs font-bold uppercase text-sidebar-primary mb-2">Chief Executive</div>
          <OrgMemberCard member={organization.ceo} level={0} />
          {/* Connector from CEO to departments */}
          <div className="w-1 h-16 bg-gradient-to-b from-sidebar-primary to-sidebar-primary/50 mt-4 shadow-lg shadow-sidebar-primary/30" />
        </div>
      </motion.div>

      {/* Horizontal connector line */}
      {organization.departments.length > 1 && (
        <div className="flex justify-center px-8">
          <div className="w-full max-w-6xl h-1 bg-gradient-to-r from-transparent via-sidebar-primary/40 to-transparent relative flex items-center justify-center shadow-md shadow-sidebar-primary/20" />
        </div>
      )}

      {/* Departments Level */}
      <motion.div className="flex flex-wrap gap-8 justify-center px-8">
        {organization.departments.map((dept, index) => (
          <motion.div
            key={dept.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative"
            style={{
              flex: `1 1 ${100 / Math.min(organization.departments.length, 3)}%`,
              minWidth: "250px",
              maxWidth: "350px",
            }}
          >
            {/* Vertical connector from horizontal line to department head */}
            <div className="absolute -top-16 left-1/2 w-1 h-16 bg-gradient-to-b from-sidebar-primary/40 to-sidebar-primary -translate-x-1/2 shadow-md shadow-sidebar-primary/20" />

            <motion.div
              onClick={() => toggleDepartment(dept.id)}
              className="cursor-pointer flex flex-col items-center"
              whileHover={{ scale: 1.02 }}
            >
              <OrgTreeNode department={dept} isExpanded={expandedDepts.has(dept.id)} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
