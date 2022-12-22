import { AnimatePresence, motion, AnimationControls } from "framer-motion";
import astronaut from "../../assets/lotties/astronaut.json";
import astronautDark from "../../assets/lotties/astronaut-dark.json";
import Lottie from "lottie-react";
import useDarkMode from "../../hooks/useDarkMode";
import { flyInFromBottom } from "../../types/transitions";

type Props = {
  sectionRef: (node?: Element | null | undefined) => void;
  controls: AnimationControls;
};

export default function LandingImage({ sectionRef, controls }: Props) {
  const { isDarkMode } = useDarkMode();

  return (
    <AnimatePresence>
      <motion.div
        variants={flyInFromBottom}
        initial="hidden"
        exit={"visible"}
        animate={controls}
        ref={sectionRef}
        className="relative"
      >
        {isDarkMode ? (
          <Lottie animationData={astronautDark} loop />
        ) : (
          <Lottie animationData={astronaut} loop />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
