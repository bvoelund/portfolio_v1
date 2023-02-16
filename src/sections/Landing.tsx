import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import scrollDown from "../assets/lotties/scroll-down.json";
import resume from "../assets/documents/Resume_BenjaminVoelund.pdf";
import { Link } from "react-scroll";

export default function Landing() {
  const [sectionRef, inView] = useInView({ delay: 1000 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      className="relative mt-16 mb-20 w-full items-center justify-center md:mt-24"
      ref={sectionRef}
    >
      <div className="relative mx-auto flex w-auto max-w-6xl flex-col items-center px-4 md:flex-col lg:flex-row">
        <div className="relative z-10 flex w-full flex-col items-center justify-center text-center">
          <AnimatePresence>
            <div className="mx-4 flex flex-col items-center justify-center font-semibold">
              <motion.div
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,

                    transition: { duration: 1, delay: 0.2 },
                  },
                  hidden: { y: 100, opacity: 0 },
                }}
                initial="hidden"
                exit={"visible"}
                animate={controls}
                ref={sectionRef}
                className="flex w-full items-end justify-start pb-4"
              >
                <h2 className="bg-gradient-to-tl from-lightBlue to-yellow bg-clip-text fill-transparent text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
                  Hello there,
                </h2>
                <h4 className="pl-1 text-lg sm:text-xl lg:pl-2 xl:text-2xl">
                  my name is...
                </h4>
              </motion.div>
              <motion.h1
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,

                    transition: { duration: 1, delay: 0.5 },
                  },
                  hidden: { y: 100, opacity: 0 },
                }}
                initial="hidden"
                exit={"visible"}
                animate={controls}
                ref={sectionRef}
                className="flex w-full justify-start whitespace-nowrap bg-gradient-to-r from-lightBlue to-yellow bg-clip-text fill-transparent pb-4 text-4xl text-transparent sm:text-6xl md:mb-2 md:text-8xl"
              >
                Benjamin Vølund,
              </motion.h1>
              <motion.div
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,

                    transition: { duration: 1, delay: 0.8 },
                  },
                  hidden: { y: 100, opacity: 0 },
                }}
                initial="hidden"
                exit={"visible"}
                animate={controls}
                ref={sectionRef}
                className="flex w-full items-end justify-start"
              >
                <h4 className="whitespace-nowrap pb-2 text-lg md:text-xl xl:text-2xl">
                  and I'm a
                </h4>
                <h3 className="whitespace-nowrap bg-gradient-to-l from-lightBlue to-yellow bg-clip-text fill-transparent pl-2 pb-2 text-3xl text-transparent md:text-4xl xl:text-5xl">
                  Software Engineer
                </h3>
                <span className="pb-2 md:text-xl xl:text-2xl">.</span>
              </motion.div>
              <motion.div
                variants={{
                  visible: {
                    scale: 1,

                    transition: { duration: 0.7, delay: 1.4 },
                  },
                  hidden: { scale: 0 },
                }}
                initial="hidden"
                exit={"visible"}
                animate={controls}
                ref={sectionRef}
                className="my-4 flex w-full items-center justify-center lg:my-8"
              >
                <div className=" w-full rounded-l-2xl border-[1px] border-dashed border-lightBlue opacity-60" />
                <div className="mx-4 h-7 min-h-[28px] w-7 min-w-[28px] rotate-45 rounded-lg border-[2px] border-lightBlue opacity-60" />
                <div className="w-full rounded-l-2xl border-[1px] border-dashed border-lightBlue opacity-60" />
              </motion.div>

              <motion.h4
                variants={{
                  visible: {
                    opacity: 1,

                    transition: { duration: 1, delay: 2 },
                  },
                  hidden: { opacity: 0 },
                }}
                initial="hidden"
                exit={"visible"}
                animate={controls}
                ref={sectionRef}
                className="flex flex-col text-lg md:text-xl xl:text-2xl"
              >
                <span>
                  I simply love coding, and building smart and creative
                  solutions for both myself and others.
                </span>{" "}
                <span>Feel free dive on down and read about my profile.</span>
              </motion.h4>
              <motion.div
                variants={{
                  visible: {
                    scale: 1,

                    transition: { duration: 0.7, delay: 2.2 },
                  },
                  hidden: { scale: 0 },
                }}
                initial="hidden"
                exit={"visible"}
                animate={controls}
                ref={sectionRef}
                className="mt-4 flex w-full flex-col items-center justify-center"
              >
                <Link to="personal-section" smooth offset={-10}>
                  <Lottie
                    animationData={scrollDown}
                    loop
                    className="h-auto w-14 cursor-pointer opacity-60 transition duration-300 ease-out lg:hover:scale-110"
                  />
                </Link>
                <div className="mt-12 flex w-full items-center justify-center space-x-8 text-lg md:hidden">
                  <a
                    onClick={() => window.open("mailto:bvoelund@hotmail.com")}
                    className="cursor-pointer rounded-lg border-[3px] border-yellow px-6 py-4 font-semibold text-yellow underline-offset-4 transition duration-300 ease-in-out active:border-lightBlue active:text-lightBlue md:hover:border-lightBlue md:hover:text-lightBlue"
                  >
                    Contact
                  </a>
                  <a
                    href={resume}
                    target="_blank"
                    className="cursor-pointer rounded-lg border-[3px] border-yellow px-6 py-4 font-semibold text-yellow underline-offset-4 transition duration-300 ease-in-out active:border-lightBlue active:text-lightBlue md:hover:border-lightBlue md:hover:text-lightBlue"
                  >
                    Resume
                  </a>
                </div>
              </motion.div>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
