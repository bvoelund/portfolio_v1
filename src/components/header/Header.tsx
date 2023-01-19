import DarkModeToggler from "./DarkModeToggler";
import {
  AiOutlinePlayCircle,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import PortfolioIcon from "./PortfolioIcon";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { headerFlyIn } from "../../types/transitions";
import useGetScrollPosition from "../../hooks/useGetScrollPosition";
import classNames from "classnames";
import usePrevious from "../../hooks/usePrevious";
import HeaderIcon from "./HeaderIcon";
import { BsPause, BsPlay } from "react-icons/bs";

type Props = {
  toggleDarkMode: boolean;
  setToggleDarkMode: (toggle: boolean) => void;
};

export default function Header({ toggleDarkMode, setToggleDarkMode }: Props) {
  const scrollPostion = useGetScrollPosition();
  const prevScrollPosition = usePrevious(scrollPostion);
  // sticky z-30 flex w-full transform flex-col rounded-b-2xl bg-gradient-to-tr from-gray-400 to-white shadow-2xl backdrop-blur backdrop-filter transition-all duration-500 ease-in-out dark:bg-gradient-to-tr dark:from-gray-700 dark:to-[#111827] md:flex-row

  return (
    <nav
      id="navbar"
      className={classNames(
        scrollPostion > prevScrollPosition ? "-top-32" : "top-0",
        "sticky z-30 flex w-full transform flex-col bg-[#050F1D] bg-opacity-90 backdrop-blur backdrop-filter transition-all duration-500 ease-in-out md:flex-row"
      )}
    >
      <div
        className={
          "flex w-full items-center justify-start space-x-4 rounded-b-2xl py-2 px-3 opacity-100 transition duration-100 ease-in-out dark:border-none md:px-8"
        }
      >
        {/* <PortfolioIcon /> */}
        <HeaderIcon />
        {/* <div className="h-1/2 w-[2px] bg-white" />
        <AnimatePresence>
          <motion.div
            className="flex items-center justify-center"
            variants={headerFlyIn}
            initial="hidden"
            animate={"visible"}
          >
            <div className="flex items-center justify-center space-x-3">
              <div className="z-20 cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:text-[#6bd6f0] focus:outline-none">
                <AiOutlinePlayCircle size={22} />
              </div>
              <DarkModeToggler
                toggleDarkMode={toggleDarkMode}
                setToggleDarkMode={setToggleDarkMode}
              />
            </div>
          </motion.div>
        </AnimatePresence> */}
      </div>
    </nav>
  );
}
