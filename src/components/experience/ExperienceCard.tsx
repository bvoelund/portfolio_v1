import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { opacityVariants } from "../../utils/transitions";

type Props = {
  icon: string;
  content: string[];
  title: string;
  position: string;
  date: string;
};

export default function ExperienceCard({
  icon,
  date,
  position,
  content,
  title,
}: Props) {
  const controls = useAnimation();
  const [experienceCardRef, inView] = useInView();

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
        ref={experienceCardRef}
        className="col-span-1 row-span-1 mx-10 h-full rounded-xl bg-gradient-to-tl from-lightBlue to-yellow p-[3px] shadow-xl md:mx-2"
      >
        <div className="relative h-full w-full rounded-lg bg-darker p-6">
          <img
            src={icon}
            className="absolute right-4 top-0 box-border h-20 w-20"
          />
          <h2 className="font-bold md:text-xl lg:text-xl xl:text-2xl">
            {title}
          </h2>
          <h3 className="font-semibold md:text-base lg:text-lg">{position}</h3>
          <p className="text-xs text-lightBlue">{date}</p>
          <div className="my-4 flex w-full items-center justify-center lg:my-8">
            <div className=" w-full rounded-l-2xl border-[1px] border-dashed border-lightBlue opacity-60" />
            <div className="mx-4 h-7 min-h-[28px] w-7 min-w-[28px] rotate-45 rounded-lg border-[2px] border-lightBlue opacity-60" />
            <div className="w-full rounded-l-2xl border-[1px] border-dashed border-lightBlue opacity-60" />
          </div>
          <ul>
            {content.map((text, i) => (
              <li
                className="before:pr-2 before:text-lightBlue before:content-['♢']"
                key={`${title}-content-${i}`}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
