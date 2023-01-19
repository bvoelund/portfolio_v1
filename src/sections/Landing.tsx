import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LandingInformation from "../components/landing/LandingInformation";
import SectionImage from "../components/SectionImage";
import { flyInFromBottom } from "../types/transitions";
import astronautDark from "../assets/lotties/astronaut.json";
import Lottie from "lottie-react";

export default function Landing() {
  const [sectionRef, inView] = useInView({ delay: 1000 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //bg-gradient-to-b from-[#050F1D] to-[#081527]
  return (
    <section
      className="relative -mt-8 min-h-screen w-full items-center justify-center md:mt-0"
      ref={sectionRef}
    >
      <div className="relative mx-auto flex w-auto max-w-6xl flex-col items-center px-4 md:flex-col lg:flex-row lg:space-x-32">
        <div className="relative z-10 flex w-full flex-col items-center pt-8 text-center md:pt-12 lg:w-1/2 lg:items-start lg:pt-24 lg:text-left">
          <div className="delay-400 w-3/4 translate-y-0 transform opacity-100 transition-all duration-500 ease-out lg:w-full">
            <LandingInformation controls={controls} sectionRef={sectionRef} />
          </div>
        </div>
        <div className="order-first mt-14 w-full lg:order-last lg:mt-0">
          <div className="mx-auto translate-y-0 transform opacity-100 transition-all delay-100 duration-500 ease-out sm:w-1/2 lg:w-full">
            <div className="relative m-0 box-border block overflow-hidden">
              <SectionImage
                controls={controls}
                sectionRef={sectionRef}
                variant={flyInFromBottom}
              >
                <Lottie
                  animationData={astronautDark}
                  loop
                  className="ml-auto mr-auto w-60 md:w-80 lg:ml-0 lg:mr-0 lg:w-128"
                />
              </SectionImage>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
