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
        As a dedicated IT and Cloud Computing professional, I have a strong
        background in system administration, DevOps, and cloud platforms like
        AWS, Azure, and GCP. My passion lies in leveraging cloud automation and
        AI-powered solutions to solve complex problems and drive business
        efficiency. I am constantly exploring new technologies and methodologies
        to stay at the forefront of the ever-evolving IT landscape.
      </p>

      <p>
        I am a firm believer in the power of collaboration and continuous
        learning. I am always eager to take on new challenges and work with
        like-minded individuals to create innovative solutions. My goal is to
        contribute to the advancement of cloud computing and help organizations
        harness its full potential.
      </p>
    </motion.section>
  );
}
