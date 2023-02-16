import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../components/SectionTitle";
import WorkCardCollection from "../components/mywork/WorkCardCollection";

export default function MyWork() {
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
      id="mywork-section"
    >
      <div className="flex w-5/6 items-center justify-center md:w-1/2 xl:w-5/12">
        <SectionTitle title="My Work" reverse />
      </div>
      <div className="dense relative mx-auto mt-10 grid w-auto max-w-7xl grid-cols-1 gap-10 p-6 sm:grid-cols-2 xl:grid-cols-3">
        <WorkCardCollection />
      </div>
    </section>
  );
}
