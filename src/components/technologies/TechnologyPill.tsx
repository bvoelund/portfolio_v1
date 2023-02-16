import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { opacityVariants } from "../../utils/transitions";

type TechnologyPillType = {
  icon: React.ReactNode;
  header: string | React.ReactNode;
};

const TechnologyPill = ({ icon, header }: TechnologyPillType) => {
  const controls = useAnimation();
  const [pillRef, inView] = useInView();

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
        ref={pillRef}
      >
        <div className="col-span-1 row-span-1 h-full w-full">
          <div className=" rounded-3xl bg-gradient-to-tl from-lightBlue to-yellow p-[2px] transition duration-300 ease-in-out hover:shadow-none dark:shadow-sky-800">
            <div className="flex h-full w-full items-center justify-between rounded-3xl  bg-dark p-3">
              <p className="mr-2 text-sm font-bold sm:text-lg">{header}</p>
              <div className="ml-2">{icon}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TechnologyPill;
