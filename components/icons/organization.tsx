import type { SVGProps } from "react"

const OrganizationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    {/* Top center circle */}
    <circle cx="10" cy="3" r="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />

    {/* Bottom left circle */}
    <circle cx="4" cy="14" r="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />

    {/* Bottom right circle */}
    <circle cx="16" cy="14" r="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />

    {/* Center circle */}
    <circle cx="10" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />

    {/* Connecting lines */}
    <line x1="10" y1="4.5" x2="10" y2="8.5" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    <line x1="10" y1="11.5" x2="4" y2="12.5" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    <line x1="10" y1="11.5" x2="16" y2="12.5" stroke="currentColor" strokeWidth="1" opacity="0.6" />
  </svg>
)

export default OrganizationIcon
