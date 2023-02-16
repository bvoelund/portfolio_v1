import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../components/SectionTitle";
import ExperienceCardCollection from "../components/experience/ExperienceCardCollection";

export default function Experience() {
  const [sectionRef, inView] = useInView({ delay: 1000 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      className="relative flex w-full flex-col items-center justify-center"
      ref={sectionRef}
      id="experience-section"
    >
      <div className="flex w-5/6 items-center justify-center md:w-1/2 xl:w-5/12">
        <SectionTitle title="Work Experience" reverse />
      </div>
      <div className="dense relative mx-auto mt-10 grid w-auto max-w-7xl grid-flow-dense grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        <ExperienceCardCollection />
      </div>
    </section>
  );
}
