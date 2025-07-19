'use client';

import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { certificationsData } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Certifications</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {certificationsData.map((certification, index) => (
          <li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
          >
            {certification.name} ({certification.year})
          </li>
        ))}
      </ul>
    </section>
  );
}
