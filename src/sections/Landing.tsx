import { SiCoderwall } from "react-icons/si";
import LandingImage from "../components/landing/LandingImage";
import {
  flyInFromBottom,
  flyInFromRight,
  flyInFromTop,
} from "../types/transitions";
import { SectionInterface } from "../types/sectionInterface";
import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LandingInformation from "../components/landing/LandingInformation";

export default function Landing() {
  const [showModal, setShowModal] = useState(false);
  const [sectionRef, inView] = useInView({ delay: 1000 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (showModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showModal]);

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center"
      ref={sectionRef}
    >
      {/* <DownloadModal showModal={showModal} setShowModal={setShowModal} /> */}
      <div className="flex w-full flex-col pt-10 lg:mb-10 lg:w-4/6 lg:flex-row lg:gap-36">
        <LandingInformation controls={controls} sectionRef={sectionRef} />
        <LandingImage controls={controls} sectionRef={sectionRef} />
      </div>
    </section>
  );
}
