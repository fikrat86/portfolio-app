export const professionalProjectsData = [
  {
    title: "CloudOps Lite",
    description:
      "A lightweight, open-source toolkit for simplifying cloud operations and automating common DevOps tasks. It provides a set of scripts and utilities for managing cloud resources, deploying applications, and monitoring infrastructure.",
    tags: ["Python", "AWS", "Docker", "Terraform"],
    imageUrl: "/project-thumbnails/cloudops-lite.png",
    projectUrl: "https://github.com/hushig/cloudops-lite",
  },
  {
    title: "Quran AI Tutor",
    description:
      "An AI-powered Quran teaching application that provides personalized feedback and guidance to learners. It uses speech recognition and natural language processing to analyze recitation and offer corrective suggestions.",
    tags: ["Python", "TensorFlow", "React", "Node.js"],
    imageUrl: "/project-thumbnails/quran-ai-tutor.png",
    projectUrl: "https://github.com/hushig/quran-ai-tutor",
  },
  {
    title: "OnHelp Platform",
    description:
      "A B2B/B2C service platform that connects educators and professionals with clients. It provides a marketplace for booking services, managing appointments, and processing payments.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/project-thumbnails/onhelp-platform.png",
    projectUrl: "https://onhelp.com",
  },
] as const;

export const personalProjectsData = [
  {
    title: "Azada Gorgeous",
    description:
      "A personal website showcasing various creative projects and interests.",
    tags: ["Web Design", "Personal Project"],
    imageUrl: "/file.svg", // Placeholder image
    projectUrl: "https://azadagorgeous.com/",
  },
] as const;
