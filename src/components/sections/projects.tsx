import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { projectsData } from "@/data/projects";
import Project from "@/components/ui/project";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
