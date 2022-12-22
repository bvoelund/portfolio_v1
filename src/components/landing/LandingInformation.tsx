import { AnimatePresence, AnimationControls, motion } from "framer-motion";
import { SiCoderwall } from "react-icons/si";
import { flyInFromTop } from "../../types/transitions";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineCloudDownload } from "react-icons/ai";

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
        className="relative flex justify-center  opacity-100 lg:items-center"
      >
        <SiCoderwall
          size={95}
          className="absolute -left-20 top-10 -rotate-90 text-[#102770] opacity-30 dark:text-[#6bd6f0]"
        />

        <SiCoderwall
          size={95}
          className="absolute bottom-10 -right-10 rotate-90 text-[#102770]  opacity-30 dark:text-[#6bd6f0]"
        />
        <div className="flex h-full flex-col justify-center font-semibold">
          <div className="flex items-end">
            <h2 className="text-8xl font-bold text-[#102770] dark:text-[#6bd6f0]">
              Hi,
            </h2>
            <h4 className="pl-1 text-3xl">my name is ...</h4>
          </div>
          <h1 className="whitespace-nowrap text-6xl">Benjamin Vølund,</h1>
          <div className="flex items-end">
            <h4 className="whitespace-nowrap text-3xl">and I'm a</h4>
            <h3 className="whitespace-nowrap pl-2 text-5xl text-[#102770] dark:text-[#6bd6f0]">
              Software Engineer
            </h3>
            <span className="text-5xl">.</span>
          </div>
          <h4 className="mt-8 whitespace-nowrap text-2xl">
            Scroll down to read about my profile 🙎‍♂️
          </h4>
          <h4 className="mt-8 whitespace-nowrap text-2xl">
            Enjoy your stay, and thanks for stopping by 🚀
          </h4>
          <div className="mt-8 flex w-full space-x-6">
            <button className="flex w-fit items-center justify-center space-x-2 rounded-3xl border-4 border-[#102770] p-4 text-2xl text-[#102770] transition-all duration-300 ease-in-out hover:bg-[#102770] hover:text-white dark:border-[#6bd6f0] dark:bg-transparent dark:text-[#6bd6f0] dark:hover:bg-[#6bd6f0] dark:hover:text-dark">
              <HiOutlineMail size={33} />
              <span>Contact</span>
            </button>
            <button className="flex w-fit items-center justify-center space-x-2 rounded-3xl border-4 border-[#102770] p-4 text-2xl text-[#102770] transition-all duration-300 ease-in-out hover:bg-[#102770] hover:text-white dark:border-[#6bd6f0] dark:bg-transparent dark:text-[#6bd6f0] dark:hover:bg-[#6bd6f0] dark:hover:text-dark">
              <AiOutlineCloudDownload size={33} />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
