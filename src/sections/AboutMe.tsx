import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import me from "../assets/images/personal/me-about.jpg";
import AboutMeInformation from "../components/aboutMe/AboutMeInformation";
import SectionTitle from "../components/SectionTitle";
import getAge from "../utils/getAge";

export default function AboutMe() {
  const [sectionRef, inView] = useInView({ delay: 1000 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //  bg-gradient-to-b from-[#081527] to-[#0B334A]
  return (
    <section
      className="relative -mt-2 flex min-h-screen w-full flex-col items-center pb-32"
      ref={sectionRef}
      id="personal-section"
    >
      <div className="w-5/6 xl:w-4/6">
        <div className="flex items-center justify-center md:w-1/2 lg:justify-start xl:w-5/12">
          <SectionTitle title="About Me" />
        </div>
        <div className="flex flex-col items-center justify-between gap-10 pt-10 lg:mb-10 lg:flex-row">
          <div
            className={
              "flex max-h-[500px] w-5/6 max-w-[500px] justify-center rounded-3xl bg-lightBlue"
            }
          >
            <img
              src={me}
              className="max-h-[500px] w-full max-w-[5000px] rotate-0 select-none rounded-3xl object-cover transition delay-200 duration-200 ease-linear hover:rotate-0"
              alt="Me"
            />
          </div>
          <AboutMeInformation />
        </div>
      </div>
    </section>
  );
}
