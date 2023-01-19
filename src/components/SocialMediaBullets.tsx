import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { opacityVariants } from "../types/transitions";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function SocialMediaBullets() {
  const controls = useAnimation();
  const [listRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <AnimatePresence>
      <motion.div
        variants={opacityVariants}
        initial="hidden"
        exit={"visible"}
        animate={controls}
        ref={listRef}
        className="fixed left-10 bottom-6 right-auto z-10 hidden w-10 text-white transition duration-500 ease-in-out xl:block 2xl:left-16"
      >
        <ul className="m-0 flex list-none flex-col items-center space-y-2 p-0">
          <li className="group relative cursor-pointer ">
            <a href="https://github.com/bvoelund" target="_blank">
              <AiOutlineGithub
                size={36}
                className="mt-2 transition duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:text-[#6bd6f0]"
              />
            </a>
          </li>
          <li className="group relative cursor-pointer">
            <a href="https://www.linkedin.com/in/bvoelund/" target="_blank">
              <AiOutlineLinkedin
                size={36}
                className="mt-2 transition duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:text-[#6bd6f0]"
              />
            </a>
          </li>
          <li className="flex flex-col items-center justify-center space-y-2">
            <div className="h-2 w-2 rounded-full bg-white opacity-80"></div>
            <div className="h-4 w-4 rounded-full bg-white opacity-80"></div>
            <div className="h-2 w-2 rounded-full bg-white opacity-80"></div>
          </li>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}
