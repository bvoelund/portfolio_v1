import { useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const [showModal, setShowModal] = useState(false);
  const [experienceRef, inView] = useInView({ delay: 1000 });
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
      className="flex w-full flex-col  items-center justify-center md:p-8"
      ref={experienceRef}
    >
      {/* <DownloadModal showModal={showModal} setShowModal={setShowModal} /> */}
      <div className="flex w-5/6 justify-center">
        <div className="h-[340px] w-4/6 border-2 border-lightOrange"></div>
      </div>
    </section>
  );
}
