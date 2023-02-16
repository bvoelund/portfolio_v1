import { AnimatePresence, AnimationControls, motion } from "framer-motion";
import Lottie from "lottie-react";
import scrollDown from "../../assets/lotties/scroll-down.json";

type Props = {
  sectionRef: (node?: Element | null | undefined) => void;
  controls: AnimationControls;
};

export default function LandingInformation({ sectionRef, controls }: Props) {
  return (
    <AnimatePresence>
      <div className="mx-4 flex items-center justify-center font-semibold">
        <div className="flex flex-col items-start">
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
            className="flex items-end pb-4"
          >
            <h2 className="bg-gradient-to-tl from-lightBlue to-yellow bg-clip-text fill-transparent text-3xl font-bold text-transparent text-lightBlue md:text-5xl">
              Hello there,
            </h2>
            <h4 className="pl-1 text-lg md:text-xl lg:pl-2 xl:text-2xl">
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
            className="whitespace-nowrap bg-gradient-to-r from-lightBlue to-yellow bg-clip-text fill-transparent pb-4 text-4xl text-transparent  md:mb-2 md:text-8xl"
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
            className="flex items-end"
          >
            <h4 className="whitespace-nowrap pb-2 text-lg md:text-xl xl:text-2xl">
              and I'm a
            </h4>
            <h3 className="whitespace-nowrap bg-gradient-to-l from-lightBlue to-yellow bg-clip-text fill-transparent pl-2 pb-2 text-3xl text-transparent md:text-4xl xl:text-5xl">
              Software Engineer
            </h3>
            <span className="pb-2 text-5xl">.</span>
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
            className="text-lg md:text-xl xl:text-2xl"
          >
            I simply love coding, and building smart and creative solutions for
            both myself and others. Feel free dive on down and read about my
            profile
            <span className="text-yellow">.</span>
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
            className="mt-4 flex w-full justify-center"
          >
            <Lottie
              animationData={scrollDown}
              loop
              className="h-auto w-14 opacity-60"
            />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
