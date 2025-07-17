import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { skillsData } from "@/data/skills";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {Object.entries(skillsData).map(([category, skills]) => (
          <React.Fragment key={category}>
            <h3 className="text-xl font-semibold mt-8 mb-2 w-full">{category}</h3>
            {skills.map((skill, index) => (
              <motion.li
                className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}
