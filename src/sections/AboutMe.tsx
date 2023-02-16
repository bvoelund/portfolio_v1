import { AnimatePresence, useAnimation, motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import me from "../assets/images/me.png";
import SectionTitle from "../components/SectionTitle";
import { opacityVariants } from "../utils/transitions";
import getAge from "../utils/getAge";
import { BsPerson } from "react-icons/bs";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { TbMapPin } from "react-icons/tb";
import { SlGameController } from "react-icons/sl";

type AboutMeItemProps = {
  text: string;
};

type AboutMeItemTitleProps = {
  icon: ReactNode;
  text: string;
};

function AboutMeItem({ text }: AboutMeItemProps) {
  return (
    <p className="mb-1 md:ml-1">
      <span className="text-lightBlue opacity-60">♢</span>
      <span className="ml-2">{text}</span>
    </p>
  );
}

function AboutMeTitle({ text, icon }: AboutMeItemTitleProps) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <p className="text-lightBlue lg:text-xl">{text}</p>
    </div>
  );
}

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
      className="relative flex w-full flex-col items-center"
      id="personal-section"
    >
      <div className="mt-10 flex w-5/6 items-center justify-center md:w-1/2 lg:justify-start xl:w-5/12">
        <SectionTitle title="About Me" />
      </div>
      <div className="relative mx-auto flex w-auto max-w-7xl flex-col items-center px-4 md:flex-col lg:flex-row">
        <div className="relative flex flex-col items-center justify-between gap-10 pt-10 lg:mb-10 lg:flex-row lg:items-start">
          <motion.div
            variants={opacityVariants}
            initial="hidden"
            exit={"visible"}
            animate={controls}
            ref={sectionRef}
            className="flex w-5/6 flex-col justify-center"
          >
            <img
              alt="Me"
              src={me}
              className="w-full select-none rounded-3xl object-cover"
            />
            <div className="mt-6 flex w-full justify-center lg:justify-start">
              <div className="flex flex-col space-y-4 whitespace-nowrap text-sm sm:w-full sm:flex-row sm:items-center sm:justify-evenly sm:space-y-0 md:text-base">
                <div className="flex flex-col items-center space-x-1 md:flex-row">
                  <HiOutlineMail size={28} className="text-yellow" />
                  <a
                    onClick={() => window.open("mailto:bvoelund@hotmail.com")}
                    className="cursor-pointer underline underline-offset-4 transition duration-300 ease-in-out active:text-lightBlue md:hover:text-lightBlue"
                  >
                    bvoelund@hotmail.com
                  </a>
                </div>
                <div className="flex flex-col items-center space-x-1 md:flex-row">
                  <TbMapPin size={28} className="text-yellow" />
                  <a
                    href="https://www.google.com/maps/search/Silkeborg/@56.1762235,9.5457681,13.25z"
                    target="_blank"
                    className="cursor-pointer underline underline-offset-4 transition duration-300 ease-in-out active:text-lightBlue md:hover:text-lightBlue"
                  >
                    Silkeborg, Denmark
                  </a>
                </div>
                <div className="flex flex-col items-center space-x-1 md:flex-row">
                  <HiOutlinePhone size={28} className="text-yellow" />
                  <a
                    href="tel:+4526159059"
                    className="cursor-pointer underline underline-offset-4 transition duration-300 ease-in-out active:text-lightBlue md:hover:text-lightBlue"
                  >
                    +45 26 15 90 59
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <AnimatePresence>
            <div className="lg:items relative flex w-5/6 flex-col items-center lg:flex-row lg:items-start lg:space-x-10">
              {/* Top right border */}
              <motion.div
                variants={{
                  visible: {
                    scale: 1,
                    transition: { duration: 0.7, delay: 0.3 },
                  },
                  hidden: { scale: 0 },
                }}
                initial="hidden"
                exit={"visible"}
                animate={controls}
                ref={sectionRef}
                className="absolute top-4 -right-4 block h-16 w-16 rounded-tr-2xl border-t-4 border-r-4 border-lightBlue opacity-60 md:h-40 md:w-40"
              />

              {/* Bottom left border */}
              <motion.div
                variants={{
                  visible: {
                    scale: 1,
                    transition: { duration: 0.7, delay: 0.3 },
                  },
                  hidden: { scale: 0 },
                }}
                initial="hidden"
                exit={"visible"}
                animate={controls}
                ref={sectionRef}
                className="absolute -bottom-4 -left-4 h-8 w-8 rounded-bl-2xl border-l-4 border-b-4 border-lightBlue opacity-60 md:-bottom-10 md:-left-10 md:h-20 md:w-20"
              />

              <motion.div
                variants={{
                  visible: {
                    opacity: 1,

                    transition: { duration: 1, delay: 0.7 },
                  },
                  hidden: { opacity: 0 },
                }}
                initial="hidden"
                exit={"visible"}
                animate={controls}
                ref={sectionRef}
                className="flex flex-col items-start space-y-4 xl:text-lg"
              >
                <div className="flex flex-col space-y-2">
                  <AboutMeTitle
                    text="Who am I?"
                    icon={<BsPerson size={32} className="text-yellow" />}
                  />
                  <AboutMeItem
                    text={`My name is Benjamin Vølund and I'm a
                    ${getAge("01-09-1996")} year old developer from Denmark.`}
                  />
                  <AboutMeItem
                    text="I have a degree as a Software Engineer from Aarhus
                    University."
                  />
                  <AboutMeItem
                    text="I am a very laidback and openminded guy, who is always up
                      for a nerdy challenge."
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <AboutMeTitle
                    text="Sparetime"
                    icon={
                      <SlGameController size={32} className="text-yellow" />
                    }
                  />
                  <AboutMeItem
                    text="Outside work I'm also huge nerd, and I spend a lot of time
                      improving my programming skills and knowledge."
                  />
                  <AboutMeItem
                    text="I enjoy gaming, collecting Legos, playing football and
                    spending time with friends and family."
                  />
                  <AboutMeItem text="I'm a proud dad-to-be, which is very exciting! " />
                </div>

                <div className="flex flex-col space-y-2">
                  <AboutMeTitle
                    text="In the workplace"
                    icon={
                      <MdOutlineMapsHomeWork
                        size={32}
                        className="text-yellow"
                      />
                    }
                  />
                  <AboutMeItem
                    text="I engage in technical discussions, and I'm not afraid of
                    responsibility."
                  />
                  <AboutMeItem
                    text="I love knowledge sharing and find it to be one of the key
                    components of success."
                  />
                  <AboutMeItem
                    text="Contribute to a positive work environment by socializing
                    with my colleagues at the office or over a beer."
                  />
                </div>
              </motion.div>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
