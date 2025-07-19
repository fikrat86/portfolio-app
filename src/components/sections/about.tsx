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
        IT professional with over 10 years of experience specializing in IT infrastructure management and system integration. AWS Certified Cloud Practitioner, currently pursuing a post-graduate program in Cloud Computing at Durham College to deepen expertise in cloud technologies. Skilled in designing and implementing scalable cloud solutions, leveraging a robust technical foundation and AWS knowledge.
      </p>
    </motion.section>
  );
}
