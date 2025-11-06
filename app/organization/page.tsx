"use client"

import DashboardPageLayout from "@/components/dashboard/layout"
import { OrgTree } from "@/components/dashboard/org-tree/org-tree"
import { organizationData } from "@/data/organization"
import OrganizationIcon from "@/components/icons/organization"

export default function OrganizationPage() {
  return (
    <DashboardPageLayout
      header={{
        title: "Organization",
        description: "Company hierarchy and team structure",
        icon: OrganizationIcon,
      }}
    >
      <div className="space-y-6">
        <div className="overflow-x-auto pb-4">
          <OrgTree organization={organizationData} />
        </div>
      </div>
    </DashboardPageLayout>
  )
}
