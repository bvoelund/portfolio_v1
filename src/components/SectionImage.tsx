import { AnimatePresence, motion, AnimationControls } from "framer-motion";
import Lottie from "lottie-react";
import { ReactNode } from "react";
import { flyInFromBottom, TransitionType } from "../types/transitions";

type Props = {
  sectionRef: (node?: Element | null | undefined) => void;
  controls: AnimationControls;
  children: ReactNode;
  variant: TransitionType;
};

export default function SectionImage({
  sectionRef,
  controls,
  children,
  variant,
}: Props) {
  return (
    <AnimatePresence>
      <motion.div
        variants={variant}
        initial="hidden"
        exit={"visible"}
        animate={controls}
        ref={sectionRef}
        className="flex justify-center"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
