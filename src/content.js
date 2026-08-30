export const profile = {
  name: "William Buechele",
  shortName: "Willie",
  headline:
    "Technical Support Engineer | Cloud, DNS & Kubernetes | AWS CCP",
  location: "Sherman / Denison, TX",
  citizenship: "US citizen",
  pitch:
    "I troubleshoot DNS, networking, and production tickets, then back that up with shipped AWS and Kubernetes work. Looking for remote Technical Support Engineer, Cloud Support, or junior DevOps roles.",
  email: "buechelewd@gmail.com",
  github: "https://github.com/fredly11",
  linkedin: "https://www.linkedin.com/in/william-buechele",
  site: "https://williambuechele.com",
};

export const skillGroups = [
  {
    title: "Support & triage",
    summary:
      "Day-to-day support work: reproduce the issue, isolate DNS or network causes, and keep tickets moving.",
    items: [
      "DNS troubleshooting",
      "Networking basics",
      "Ticket triage",
      "ServiceNow",
      "Halp",
    ],
  },
  {
    title: "Cloud & AWS",
    summary:
      "Hands-on AWS from support-adjacent infrastructure and portfolio projects. Comfortable in the console; not claiming deep specialist depth in every service.",
    items: [
      "EC2",
      "S3",
      "CloudFront",
      "IAM",
      "Lambda",
      "API Gateway",
      "Cognito",
      "DynamoDB",
      "CloudWatch",
    ],
  },
  {
    title: "Kubernetes & IaC",
    summary:
      "Cluster and automation work from a junior DevOps role and a learning project on EKS. Production UDS on EKS is still unfinished.",
    items: ["EKS", "Helm", "Terraform", "UDS Core"],
  },
  {
    title: "Frontend",
    summary:
      "React for this site, TaskTest, and earlier frontend work. I write clean UI; I am not positioning as a senior frontend engineer.",
    items: ["React"],
  },
];

export const projects = [
  {
    slug: "nstp",
    featured: true,
    name: "NSTP",
    subtitle: "Never Split the Party",
    role: "Founder",
    summary:
      "A TTRPG group scheduler so campaigns do not die on the calendar. I built and run the product.",
    stack: ["React", "Scheduling"],
    live: "https://nstp.app",
  },
  {
    slug: "tasktest",
    featured: true,
    name: "TaskTest",
    subtitle: "Multi-tenant SaaS task app",
    role: "Portfolio project",
    summary:
      "A multi-tenant task app on AWS: React (Vite) frontend with Cognito, API Gateway, Lambda, DynamoDB, S3, and CloudFront. The backend was assembled in the AWS console and is not in the GitHub repo.",
    stack: [
      "React",
      "Cognito",
      "API Gateway",
      "Lambda",
      "DynamoDB",
      "S3",
      "CloudFront",
    ],
    repo: "https://github.com/fredly11/TaskTest",
  },
  {
    slug: "secure-edge-analytics",
    featured: true,
    name: "Secure Edge Analytics",
    subtitle: "Terraform, Amazon EKS, and UDS Core",
    role: "Portfolio / learning project",
    summary:
      "A hands-on project to provision Amazon EKS with Terraform and explore UDS Core. The local k3d UDS Core demo worked. Production UDS on EKS is not finished, and this is not a production DoD deployment.",
    stack: ["Terraform", "Amazon EKS", "k3d", "UDS Core"],
    repo: "https://github.com/fredly11/uds-secure-edge-analytics",
  },
];

export const smallerProjects = [
  {
    name: "KBBuilder",
    summary: "A knowledge base builder for writers and tabletop players.",
    repo: "https://github.com/fredly11/KBBuilder",
  },
  {
    name: "ttrpg-toolbox",
    summary: "Small tooling experiments for tabletop games.",
    repo: "https://github.com/fredly11/ttrpg-toolbox",
  },
];

export const certifications = [
  {
    name: "CompTIA A+",
    earned: "June 2025",
    status: "Earned",
    detail:
      "Hardware, operating systems, networking, and troubleshooting fundamentals.",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    earned: "June 2026",
    status: "Earned",
    detail:
      "AWS cloud concepts, security, billing, and support. Current credential I lead with.",
  },
  {
    name: "AWS Solutions Architect Associate",
    earned: null,
    status: "In progress",
    detail: "Studying toward the associate exam. Not earned yet.",
  },
];

export const education = {
  school: "Brigham Young University–Idaho",
  program: "Computer Science",
  status: "Senior, expected April 2027",
  note: "Online program.",
};

export const experience = [
  {
    title: "Technical Support Engineer",
    company: "Ezoic",
    dates: "Feb 2022 – Jul 2023",
    location: "Remote",
    bullets: [
      "DNS, networking, and site-performance triage across 50+ publisher sites.",
      "Worked tickets in Halp and coordinated fixes with customers and internal teams.",
    ],
  },
  {
    title: "Junior Frontend and DevOps",
    company: "Bluefire Leads",
    dates: "Jun 2021 – Jan 2022",
    bullets: [
      "Supported AWS EC2 workloads and Kubernetes deployments with Helm.",
      "Used Cloudflare in front of application traffic and helped with frontend work.",
    ],
  },
  {
    title: "Technical Support Agent",
    company: "G4S Retail Solutions",
    dates: "Jan 2020 – Jul 2021",
    bullets: [
      "Handled support tickets in ServiceNow for retail technology issues.",
    ],
  },
];

export const languages = [
  { name: "English", level: "Native" },
  { name: "Portuguese", level: "Fluent" },
  { name: "Spanish", level: "Conversational" },
];
