import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import me from "../assets/images/personal/me-about.jpg";
import { SlGraduation } from "react-icons/sl";
import classNames from "classnames";
import useDarkMode from "../hooks/useDarkMode";

export default function AboutMe() {
  const [sectionRef, inView] = useInView({ delay: 1000 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center"
      ref={sectionRef}
    >
      {/* <DownloadModal showModal={showModal} setShowModal={setShowModal} /> */}
      <div className="flex w-full flex-col pt-10 lg:mb-10 lg:w-4/6 lg:flex-row lg:gap-36">
        <div
          className={
            "about-me-image-bg flex h-96 w-96 justify-center rounded-3xl bg-[#102770] dark:bg-[#6bd6f0]"
          }
        >
          <img
            src={me}
            className="h-full rotate-12 select-none rounded-3xl object-cover transition duration-200 ease-linear hover:rotate-0"
            alt="Me"
          />
        </div>
        <div className="lg:items flex flex-col items-center lg:flex-row lg:items-start lg:space-x-10">
          <div className="flex h-52 w-52 flex-col items-center justify-center space-y-4 rounded-3xl border-4 border-[#102770] bg-transparent px-6 py-8 text-[#102770] dark:border-[#6bd6f0]  dark:text-[#6bd6f0]">
            <SlGraduation size={40} />
            <h4 className="whitespace-nowrap text-lg font-semibold">
              Software Engineer
            </h4>
            <p className="text-sm italic">Aarhus University, 2021</p>
          </div>
          <div className="flex h-52 w-52 flex-col items-center justify-center space-y-4 rounded-3xl border-4 border-[#102770] bg-transparent px-6 py-8 text-[#102770] dark:border-[#6bd6f0]  dark:text-[#6bd6f0]">
            <SlGraduation size={40} />
            <h4 className="whitespace-nowrap text-lg font-semibold">
              Software Engineer
            </h4>
            <p className="text-sm italic">Aarhus University, 2021</p>
          </div>
          <div className="flex h-52 w-52 flex-col items-center justify-center space-y-4 rounded-3xl border-4 border-[#102770] bg-transparent px-6 py-8 text-[#102770] dark:border-[#6bd6f0]  dark:text-[#6bd6f0]">
            <SlGraduation size={40} />
            <h4 className="whitespace-nowrap text-lg font-semibold">
              Software Engineer
            </h4>
            <p className="text-sm italic">Aarhus University, 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
}
