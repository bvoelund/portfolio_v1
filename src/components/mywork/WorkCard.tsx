import { ReactNode } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SiGithub } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";

type Props = {
  status: "Done ✔️" | "In Progress ✍️";
  image: string;
  content: string;
  title: string;
  repo: string | null;
  host: string | null;
  techUsed: Array<ReactNode | string>;
};

export default function WorkCard({
  status,
  image,
  content,
  title,
  repo,
  host,
  techUsed,
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
        variants={{
          visible: {
            opacity: 1,

            transition: { duration: 0.7, delay: 0.5 },
          },
          hidden: { opacity: 0 },
        }}
        initial="hidden"
        exit={"visible"}
        animate={controls}
        ref={experienceCardRef}
        className="col-span-1 row-span-1 h-full rounded-xl bg-gradient-to-tl from-lightBlue to-yellow p-[3px] shadow-xl md:mx-2"
      >
        <div className="relative flex h-full max-h-full w-full flex-col justify-evenly space-y-8 rounded-lg bg-darker p-6">
          <img
            className="h-40 min-h-[160px] w-full rounded-3xl object-cover"
            src={image}
          />
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold md:text-xl lg:text-xl xl:text-2xl">
                {title}
              </h2>
              <p className="text-md text-yellow">{status}</p>
            </div>
            <div className="flex justify-center space-x-3">
              {repo && (
                <a target="_blank" href={repo}>
                  <SiGithub
                    size={24}
                    className="cursor-pointer text-yellow transition duration-300 ease-in-out hover:scale-110 hover:text-[#6bd6f0]"
                  />
                </a>
              )}
              {host && (
                <a target="_blank" href={host}>
                  <HiOutlineExternalLink
                    size={24}
                    className="cursor-pointer text-yellow transition duration-300 ease-in-out hover:scale-110 hover:text-[#6bd6f0]"
                  />
                </a>
              )}
            </div>
          </div>

          <div className="my-4 flex w-full items-center justify-center lg:my-8">
            <div className=" w-full rounded-l-2xl border-[1px] border-dashed border-lightBlue opacity-60" />
            <div className="mx-4 h-7 min-h-[28px] w-7 min-w-[28px] rotate-45 rounded-lg border-[2px] border-lightBlue opacity-60" />
            <div className="w-full rounded-l-2xl border-[1px] border-dashed border-lightBlue opacity-60" />
          </div>
          <div className="flex flex-col justify-between"></div>
          <p className="text-md font-medium">{content}</p>
          <div className="right-3 bottom-3 flex h-full w-full items-end justify-end space-x-2">
            {techUsed.map((tech, i) => (
              <div
                className="h-6 max-h-[24px] min-h-[24px] w-6 min-w-[24px] max-w-[24px]"
                key={`${title}-tech-${i}`}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
