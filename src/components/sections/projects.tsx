'use client';

import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { professionalProjectsData, personalProjectsData } from "@/data/projects";
import Project from "@/components/ui/project";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Professional Projects</SectionHeading>
      <div>
        {professionalProjectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <SectionHeading>Personal Projects</SectionHeading>
      <div>
        {personalProjectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
