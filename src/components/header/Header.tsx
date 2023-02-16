import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HeaderIcon from "./HeaderIcon";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import resume from "../../assets/documents/Resume_BenjaminVoelund.pdf";
import { opacityVariants } from "../../utils/transitions";

// FIX INTRO ANIMATION
export default function Header() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  return (
    <header
      id="navbar"
      className="flex w-full transform flex-col bg-[#050F1D] text-white backdrop-blur backdrop-filter transition-all duration-500 ease-in-out md:flex-row"
    >
      <motion.div
        className="flex w-full items-center justify-between space-x-4 rounded-b-2xl py-2 px-3 opacity-100 transition duration-100 ease-in-out dark:border-none md:px-8"
        variants={opacityVariants}
        initial="hidden"
        animate={controls}
        exit="visible"
      >
        <HeaderIcon />
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center justify-center space-x-3">
              <a href="https://github.com/bvoelund" target="_blank">
                <FiGithub
                  size={24}
                  className="transition duration-300 ease-in-out hover:text-[#6bd6f0]"
                />
              </a>
              <a href="https://www.linkedin.com/in/bvoelund/" target="_blank">
                <FiLinkedin
                  size={24}
                  className=" transition duration-300 ease-in-out hover:text-[#6bd6f0]"
                />
              </a>
            </div>
            <div className="hidden items-center justify-center space-x-3 md:flex">
              <a
                onClick={() => window.open("mailto:bvoelund@hotmail.com")}
                className="transion cursor-pointer rounded-lg border-[3px] border-yellow p-2 font-semibold text-yellow underline-offset-4 transition duration-300 ease-in-out hover:border-lightBlue hover:text-lightBlue"
              >
                Contact
              </a>
              <a
                href={resume}
                target="_blank"
                className="cursor-pointer rounded-lg border-[3px] border-yellow p-2 font-semibold text-yellow underline-offset-4 transition duration-300 ease-in-out hover:border-lightBlue hover:text-lightBlue"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
