import classNames from "classnames";
import { AnimatePresence, AnimationControls, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { flyInFromLeft, flyInFromTop } from "../../types/transitions";
import ExperienceTabButton from "./ExperienceTabButton";
import ExperienceTabContent from "./ExperienceTabContent";

type Job = {
  company: string;
  content: string[];
  period: string;
  role: string;
};

type Props = {
  sectionRef: (node?: Element | null | undefined) => void;
  controls: AnimationControls;
};

const jobs: Job[] = [
  {
    company: "Jysk",
    period: "August 2021 - Now",
    role: "Web Developer",
    content: [
      "Worked on both their webshop, and primarily a modern cash register system",
      "Used technologies like ReactJS, TypeScript, SCSS and others",
      "Been part of a mixed scrum team of backend and frontend developers",
    ],
  },
  {
    company: "Kampstrup",
    period: "February 2020 - June 2020",
    role: "Intern",
    content: [
      "Internship as part of my study - as a Full Stack Developer",
      "Worked with C#, WPF and Caliburn.Micro",
      "was responsible for developing a new dekstop app to support my team's main application",
    ],
  },
];

export default function ExperienceTabPanel({ sectionRef, controls }: Props) {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);

  return (
    <AnimatePresence>
      <motion.div
        variants={flyInFromLeft}
        initial="hidden"
        exit={"visible"}
        animate={controls}
        ref={sectionRef}
        className="relative flex w-full flex-col items-start lg:min-w-[600px] lg:flex-row lg:p-5"
      >
        <div className="relative z-10 block w-max">
          {jobs.map((job, i) => (
            <ExperienceTabButton
              isActive={activeTabId === i}
              tabIndex={i}
              title={job.company}
              onClick={setActiveTabId}
              isLast={i === jobs.length}
            />
          ))}
        </div>
        <div className="relative h-96 w-5/6 py-0 lg:min-w-[500px] lg:max-w-[500px]">
          {jobs.map((job, i) => (
            <ExperienceTabContent
              period={job.period}
              role={job.role}
              company={job.company}
              content={job.content}
              isActive={activeTabId === i}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
