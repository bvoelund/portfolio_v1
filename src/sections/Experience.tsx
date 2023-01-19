import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ExperienceTabPanel from "../components/experience/ExperienceTabPanel";
import astronautFloating from "../assets/images/astronaut-floats.png";
import SectionImage from "../components/SectionImage";
import { flyInFromBottom } from "../types/transitions";
import SectionTitle from "../components/SectionTitle";

export default function Experience() {
  const [sectionRef, inView] = useInView({ delay: 1000 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //https://codepen.io/bchiang7/pen/mjzMbj

  //bg-gradient-to-b from-[#0B334A] to-[#0D506D]
  return (
    <section
      className="relative -mt-2 flex min-h-screen w-full flex-col items-center justify-center  md:mt-0"
      ref={sectionRef}
      id="experience-section"
    >
      <div className="w-5/6 xl:w-4/6">
        <div className="flex items-center justify-center lg:justify-end">
          <div className="flex w-full items-center justify-center md:w-1/2 xl:w-5/12">
            <SectionTitle title="Experience" reverse />
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex w-auto max-w-6xl flex-col items-center px-4 md:flex-col lg:flex-row lg:space-x-32">
        <div className="relative z-10 flex w-full flex-col items-center pt-8 text-center md:pt-12 lg:w-1/2 lg:items-start lg:pt-24 lg:text-left">
          <div className="delay-400 w-3/4 translate-y-0 transform opacity-100 transition-all duration-500 ease-out lg:w-full">
            <ExperienceTabPanel controls={controls} sectionRef={sectionRef} />
          </div>
        </div>
        <div className="order-first w-full lg:order-last lg:mt-0">
          <div className="mx-auto translate-y-0 transform opacity-100 transition-all delay-100 duration-500 ease-out sm:w-1/2 lg:w-full">
            <div className="relative m-0 box-border block overflow-hidden">
              <SectionImage
                controls={controls}
                sectionRef={sectionRef}
                variant={flyInFromBottom}
              >
                <img
                  src={astronautFloating}
                  className="ml-auto mr-auto w-60 animate-floating md:w-80 lg:ml-0 lg:mr-0 lg:w-128"
                />
              </SectionImage>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
