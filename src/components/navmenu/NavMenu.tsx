import { BsPersonLinesFill } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import NavMenuIcon from "./NavMenuIcon";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

//fixed right-0 left-0 bottom-0 z-50 mx-2 w-fit transform rounded-3xl border-2 border-[#102770] bg-opacity-80 bg-gradient-to-bl from-gray-400 to-white px-4 text-[#102770] shadow-2xl backdrop-blur backdrop-filter transition-all duration-500 ease-in-out dark:border-[#6bd6f0] dark:bg-opacity-90 dark:bg-gradient-to-bl dark:from-gray-700 dark:to-[#111827] dark:text-[#6bd6f0] sm:bottom-4 sm:mx-auto md:bottom-10 md:rounded-3xl
//bg-[#050F1D]

export default function NavMenu() {
  const [ref, inView] = useInView({ delay: 1000 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <AnimatePresence>
      <motion.div
        variants={{
          visible: {
            y: 0,
            opacity: 1,

            transition: { duration: 1, delay: 1.5 },
          },
          hidden: { y: 50, opacity: 0 },
        }}
        initial="hidden"
        exit={"visible"}
        animate={controls}
        ref={ref}
        className="fixed right-0 left-0 bottom-2 z-50 mx-auto w-fit rounded-3xl bg-opacity-95 bg-gradient-to-br from-lightBlue  to-yellow p-[3px] text-white shadow-2xl backdrop-blur backdrop-filter transition-all duration-500 ease-in-out sm:bottom-4 sm:mx-auto md:bottom-10 md:rounded-3xl"
      >
        <div className="flex w-full items-center justify-between space-x-3 rounded-3xl bg-dark px-4 opacity-100 transition duration-100  ease-in-out md:space-x-4">
          <NavMenuIcon
            sectionRef="personal-section"
            icon={<BsPersonLinesFill size={27} />}
            text={"About me"}
          />
          <NavMenuIcon
            sectionRef="experience-section"
            icon={<MdWorkOutline size={27} />}
            text={"Experience"}
          />
          <NavMenuIcon
            sectionRef="technologies-section"
            icon={<GiGearStickPattern size={27} />}
            text={"Technologies"}
          />
          <NavMenuIcon
            sectionRef="mywork-section"
            icon={<AiOutlineFundProjectionScreen size={27} />}
            text={"My Work"}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
