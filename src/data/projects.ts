export const professionalProjectsData = [
  {
    title: "Quranly – AI Tutor SaaS",
    description:
      "AI-powered Quran recitation tutor built on Firebase & Google Cloud. Includes a Stripe-based monetization phase with subscription tiers (Pro/Institutional), Checkout sessions, webhooks for billing events, and gated premium features via role claims and Firestore rules.",
    tags: ["React", "Firebase", "Google Cloud", "Stripe", "SaaS"],
    imageUrl: "/project-thumbnails/quran-ai-tutor.jpg",
    projectUrl: "https://github.com/fikrat86",
  },
  {
    title: "OPL Website CI/CD",
    description:
      "CI/CD workflow for OPL website using GitHub Actions to build and deploy.",
    tags: ["GitHub Actions", "CI/CD", "HTML"],
  imageUrl: "/project-thumbnails/opl.png",
    projectUrl: "https://github.com/fikrat86/opl-website-ci-cd",
  },
  {
    title: "Database",
    description:
      "Repository for database-related work and scripts.",
    tags: ["SQL", "Data"],
    imageUrl: "/file.svg",
    projectUrl: "https://github.com/fikrat86/Database",
  },
] as const;

export const personalProjectsData = [
  {
    title: "Portfolio App",
    description:
      "Professional portfolio built with Next.js, Tailwind CSS, and TypeScript; deployed to Firebase Hosting.",
    tags: ["Next.js", "Firebase Hosting", "TypeScript", "Tailwind CSS"],
    imageUrl: "/file.svg",
    projectUrl: "https://github.com/fikrat86/portfolio-app",
  },
] as const;
