'use client';

import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { educationData } from "@/data/education";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Education</SectionHeading>
      <VerticalTimeline lineColor="">
        {educationData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.year}
              iconStyle={{ background: "white", fontSize: "1.5rem" }}
            >
              <h3 className="font-semibold capitalize">{item.degree}</h3>
              <p className="font-normal !mt-0">{item.institution}</p>
              {item.type && <p className="!mt-1 !font-normal text-gray-700">{item.type}</p>}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
