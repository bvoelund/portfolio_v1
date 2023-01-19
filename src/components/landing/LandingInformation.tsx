import { AnimatePresence, AnimationControls, motion } from "framer-motion";
import { SiCoderwall } from "react-icons/si";
import {
  RxCornerBottomLeft,
  RxCornerBottomRight,
  RxCornerTopLeft,
  RxCornerTopRight,
} from "react-icons/rx";
import { flyInFromTop } from "../../types/transitions";
import Lottie from "lottie-react";
import astronautDark from "../../assets/lotties/scroll-down.json";

type Props = {
  sectionRef: (node?: Element | null | undefined) => void;
  controls: AnimationControls;
};

export default function LandingInformation({ sectionRef, controls }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        variants={flyInFromTop}
        initial="hidden"
        exit={"visible"}
        animate={controls}
        ref={sectionRef}
        className="relative opacity-100 lg:items-center"
      >
        <RxCornerTopLeft
          size={95}
          className="absolute -left-24 -top-20 hidden text-lightBlue opacity-30 xl:block"
        />

        <RxCornerBottomLeft
          size={95}
          className="absolute -left-24 -bottom-14 hidden text-lightBlue opacity-30 xl:block"
        />
        <RxCornerTopRight
          size={95}
          className="absolute -top-20 -right-14 hidden text-lightBlue opacity-30 xl:block"
        />

        <RxCornerBottomRight
          size={95}
          className="absolute -bottom-14 -right-14 hidden text-lightBlue opacity-30 xl:block"
        />

        <div className="mx-10 flex items-center justify-center font-semibold">
          <div className="flex flex-col items-start">
            <div className="flex items-end">
              <h2 className="text-3xl font-bold text-lightBlue md:text-4xl xl:text-5xl">
                Hello there,
              </h2>
              <h4 className="pl-1 text-lg md:text-xl xl:text-2xl">
                my name is...
              </h4>
            </div>
            <h1 className="whitespace-nowrap text-3xl md:mb-2 md:text-4xl xl:text-5xl">
              Benjamin Vølund,
            </h1>
            <div className="flex items-end">
              <h4 className="whitespace-nowrap text-lg md:text-xl xl:text-2xl">
                and I'm a
              </h4>
              <h3 className="whitespace-nowrap pl-2 text-3xl text-lightBlue md:text-4xl xl:text-5xl">
                Software Engineer
              </h3>
              <span className="text-5xl">.</span>
            </div>
            <div className="my-4 flex w-full items-center justify-center lg:my-8">
              <div className=" w-full rounded-l-2xl border-[1px] border-dashed border-lightBlue opacity-60" />
              <div className="mx-4 h-7 min-h-[28px] w-7 min-w-[28px] rotate-45 rounded-lg border-[2px] border-lightBlue opacity-60" />
              <div className="w-full rounded-l-2xl border-[1px] border-dashed border-lightBlue opacity-60" />
            </div>
            <h4 className="text-lg  md:text-xl xl:text-2xl">
              I simply love coding, and building smart and creative solutions
              for both myself and others.
            </h4>
            <div className="mt-4 flex w-full justify-center">
              <Lottie
                animationData={astronautDark}
                loop
                className="h-auto w-14 opacity-60"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
