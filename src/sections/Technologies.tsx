import { useEffect } from "react";
import { AnimatePresence, useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LibraryFrameworkCollection from "../components/technologies/LibraryFrameworkCollection";
import SectionTitle from "../components/SectionTitle";
import coding from "../assets/images/coding.png";
import { opacityVariants } from "../utils/transitions";
import ProgrammingLanguagesCollection from "../components/technologies/ProgrammingLanguagesCollection";
import ToolsCollection from "../components/technologies/ToolsCollection";
import TechnologySection from "../components/technologies/TechnologySection";
import EditorsCollection from "../components/technologies/EditorsCollection";

export default function Technologies() {
  const [sectionRef, inView] = useInView({ delay: 1000 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <section
      className="relative flex w-full flex-col items-center"
      ref={sectionRef}
      id="technologies-section"
    >
      <div className="mt-10 flex w-5/6 flex-col items-center justify-center md:w-1/2 lg:justify-start xl:w-5/12">
        <SectionTitle title="Technologies" />
        <p className="mt-4 text-lg">
          I always aspire to learn something new, but below are a lot of the
          technologies that I prefer and have worked with throughout my career.
        </p>
      </div>
      <AnimatePresence>
        <motion.div className="relative mx-auto mt-12 max-w-7xl rounded-3xl">
          <div className="flex w-full flex-col items-center md:flex-col ">
            <div className="relative mb-16 w-4/6 transform opacity-100 transition-all delay-100 duration-500 ease-out">
              <AnimatePresence>
                {/* Top left border */}
                <motion.div
                  variants={opacityVariants}
                  initial="hidden"
                  exit={"visible"}
                  animate={controls}
                  ref={sectionRef}
                  key="technology-tl-border"
                  className="absolute -top-6 left-0 block h-16 w-16 rounded-tl-2xl border-t-4 border-l-4 border-yellow opacity-60 md:h-20 md:w-20"
                />

                {/* Bottom right border */}
                <motion.div
                  variants={opacityVariants}
                  initial="hidden"
                  exit={"visible"}
                  animate={controls}
                  ref={sectionRef}
                  key="technology-br-border"
                  className="absolute -bottom-8 -right-2 h-16 w-16 rounded-br-2xl border-r-4 border-b-4 border-yellow opacity-60 md:-bottom-10 md:h-40 md:w-40"
                />

                <motion.div
                  variants={opacityVariants}
                  initial="hidden"
                  exit={"visible"}
                  animate={controls}
                  ref={sectionRef}
                  className="mx-6 mb-4 flex justify-center lg:mb-0"
                >
                  <img
                    src={coding}
                    className="h-auto w-full rounded-3xl"
                    alt="coding"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="relative z-10 flex w-full flex-col items-center space-y-8 text-end">
              <TechnologySection title="Programming languages">
                <ProgrammingLanguagesCollection />
              </TechnologySection>
              <TechnologySection title="Libraries and frameworks">
                <LibraryFrameworkCollection />
              </TechnologySection>
              <TechnologySection title="Editors">
                <EditorsCollection />
              </TechnologySection>
              <TechnologySection title="Tools">
                <ToolsCollection />
              </TechnologySection>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
