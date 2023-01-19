import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { opacityVariants } from "../types/transitions";
import CV_BenjaminVoelund_Dansk from "../assets/documents/cv/CV_BenjaminVoelund_Dansk.pdf";

export default function ContactBullets() {
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
        className="fixed top-6 right-10 left-auto z-50 hidden w-10 text-white transition duration-500 ease-in-out xl:block 2xl:right-16"
      >
        <ul className="mb-2 flex list-none flex-col items-center space-y-2 p-0">
          <li className="mb-2 flex flex-col items-center justify-center space-y-2">
            <div className="h-2 w-2 rounded-full bg-white opacity-60"></div>
            <div className="h-4 w-4 rounded-full bg-white opacity-60"></div>
            <div className="h-2 w-2 rounded-full bg-white opacity-60"></div>
          </li>

          <li className="group relative cursor-pointer">
            <a href={CV_BenjaminVoelund_Dansk} target="_blank">
              <HiOutlineDocumentDownload
                size={36}
                className="mb-2 transition duration-300 ease-in-out  group-hover:translate-y-2 group-hover:scale-110 group-hover:text-[#6bd6f0]"
              />
            </a>
          </li>
          <li className="group relative cursor-pointer">
            <div onClick={() => window.open("mailto:bvoelund@hotmail.com")}>
              <MdOutlineMail
                size={36}
                className="mb-2 transition duration-300 ease-in-out  group-hover:translate-y-2 group-hover:scale-110 group-hover:text-[#6bd6f0]"
              />
            </div>
          </li>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}
