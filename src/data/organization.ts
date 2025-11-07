export interface TeamMember {
  id: string
  name: string
  role: string
  avatar: string
  email: string
  status: "online" | "offline" | "away"
}

export interface Team {
  id: string
  name: string
  lead: TeamMember
  members: TeamMember[]
}

export interface Department {
  id: string
  name: string
  head: TeamMember
  teams: Team[]
}

export interface Organization {
  id: string
  ceo: TeamMember
  departments: Department[]
}

export const organizationData: Organization = {
  id: "inceim-1",
  ceo: {
    id: "ceo-1",
    name: "Anoop Sasidharan",
    role: "Chief Executive Officer",
    avatar: "/avatars/user_krimson.png",
    email: "anoop@inceim.io",
    status: "online",
  },
  departments: [
    {
      id: "dept-1",
      name: "Product & Engineering",
      head: {
        id: "dept-head-1",
        name: "PRIYA NAIR",
        role: "VP Engineering",
        avatar: "/avatars/user_mati.png",
        email: "priya@inceim.io",
        status: "online",
      },
      teams: [
        {
          id: "team-1",
          name: "Platform Development",
          lead: {
            id: "lead-1",
            name: "ARJUN KUMAR",
            role: "Tech Lead",
            avatar: "/avatars/user_pek.png",
            email: "arjun@inceim.io",
            status: "online",
          },
          members: [
            {
              id: "member-1",
              name: "MAYA PILLAI",
              role: "Senior Developer",
              avatar: "/avatars/user_joyboy.png",
              email: "maya@inceim.io",
              status: "online",
            },
            {
              id: "member-2",
              name: "AKSHAY MENON",
              role: "Full Stack Developer",
              avatar: "/avatars/user_krimson.png",
              email: "akshay@inceim.io",
              status: "away",
            },
          ],
        },
 
      ],
    },
    {
      id: "dept-2",
      name: "Design & UX",
      head: {
        id: "dept-head-2",
        name: "ANJALI VERMA",
        role: "Head of Design",
        avatar: "/avatars/user_joyboy.png",
        email: "anjali@inceim.io",
        status: "online",
      },
      teams: [
        {
          id: "team-3",
          name: "Product Design",
          lead: {
            id: "lead-3",
            name: "SURESH KARAN",
            role: "Lead Designer",
            avatar: "/avatars/user_krimson.png",
            email: "suresh@inceim.io",
            status: "online",
          },
          members: [
            {
              id: "member-5",
              name: "DIVYA SRINIVAS",
              role: "UI/UX Designer",
              avatar: "/avatars/user_mati.png",
              email: "divya@inceim.io",
              status: "online",
            },
          ],
        },
      ],
    },
    {
      id: "dept-3",
      name: "Operations & Business",
      head: {
        id: "dept-head-3",
        name: "MEERA GUPTA",
        role: "COO",
        avatar: "/avatars/user_pek.png",
        email: "meera@inceim.io",
        status: "online",
      },
      teams: [
        {
          id: "team-4",
          name: "Business Development",
          lead: {
            id: "lead-4",
            name: "ROHAN DESAI",
            role: "BD Lead",
            avatar: "/avatars/user_joyboy.png",
            email: "rohan@inceim.io",
            status: "online",
          },
          members: [
            {
              id: "member-6",
              name: "PUJA SETH",
              role: "Business Analyst",
              avatar: "/avatars/user_krimson.png",
              email: "puja@inceim.io",
              status: "online",
            },
          ],
        },
      ],
    },
  ],
}
