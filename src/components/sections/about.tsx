'use client';

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

export default function About() {
  return (
    <motion.section
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
          <p className="mb-3">
            Cloud Computing student (May–Dec 2025) with 10+ years of IT experience in Windows and Linux system administration, cloud infrastructure management, and scripting-based automation. Skilled in provisioning, performance tuning, backup/disaster recovery planning, and troubleshooting across on‑prem and cloud environments (AWS/Azure). Adept at supporting CI/CD pipelines and integrating infrastructure automation with DevOps teams. Bilingual in English and French, committed to ensuring high system availability and operational excellence.
          </p>
    </motion.section>
  );
}
