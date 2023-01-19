import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionFrame from "../components/SectionFrame";
import SectionImage from "../components/SectionImage";
import { flyInFromBottom } from "../types/transitions";
import astronautCruising from "../assets/images/astronaut-cruising.png";

export default function Contact() {
  const [sectionRef, inView] = useInView({ delay: 1000 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //bg-gradient-to-b from-[#2795B9] to-[#3B9FBF]
  return (
    <SectionFrame
      title="Contact"
      textChild={
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      }
      id="contact-section"
      imageChild={<img src={astronautCruising} alt="" />}
    />
  );
}
