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
    title: "AWS Unused Service Remover",
    description:
      "Flask app that identifies idle EC2 instances tagged for auto-shutdown and lets users review and stop them safely. Uses Boto3, secure IAM roles (least privilege), and a confirm-before-action UI to cut AWS costs and strengthen FinOps governance.",
    tags: ["Python", "Flask", "AWS", "EC2", "Boto3", "IAM", "Cost Optimization"],
    imageUrl: "/project-thumbnails/awsunused.jpg",
    projectUrl: "https://github.com/fikrat86",
  },
] as const;

export const personalProjectsData = [
  {
    title: "Portfolio App",
    description:
      "Professional portfolio built with Next.js, Tailwind CSS, and TypeScript; deployed to Firebase Hosting.",
    tags: ["Next.js", "Firebase Hosting", "TypeScript", "Tailwind CSS"],
  imageUrl: "/project-thumbnails/portfolio.jpg",
    projectUrl: "https://github.com/fikrat86/portfolio-app",
  },
] as const;
