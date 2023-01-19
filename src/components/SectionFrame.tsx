import classNames from "classnames";
import { AnimationControls, useAnimation } from "framer-motion";
import React, { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { flyInFromBottom } from "../types/transitions";
import SectionImage from "./SectionImage";
import SectionTitle from "./SectionTitle";

type Props = {
  textChild: ReactNode;
  imageChild: ReactNode;
  reverseOrder?: boolean;
  id: string;
  title: string;
};

export default function SectionFrame({
  textChild,
  imageChild,
  reverseOrder = false,
  id,
  title,
}: Props) {
  const [sectionRef, inView] = useInView({ delay: 1000 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      className="relative -mt-8 flex min-h-screen w-full flex-col items-center justify-center md:mt-0"
      ref={sectionRef}
      id={id}
    >
      <div className="py-18 relative z-10 mx-auto max-w-6xl px-4 md:py-32">
        <div
          className={classNames(
            reverseOrder ? "md:justify-end" : "md:justify-start",
            "flex w-full items-center justify-center md:px-10"
          )}
        >
          <div className="flex w-10/12 items-center justify-center md:w-1/2 xl:w-5/12">
            <SectionTitle title={title} reverse={reverseOrder} />
          </div>
        </div>
        <div className="md:grid md:grid-flow-row-dense md:grid-cols-2 md:items-center md:gap-12 lg:gap-20">
          <div className="md:col-start-2">
            <div className="translate-y-0 transform opacity-100 transition-all delay-200 duration-500 ease-in-out">
              <SectionImage
                controls={controls}
                sectionRef={sectionRef}
                variant={flyInFromBottom}
              >
                {imageChild}
              </SectionImage>
            </div>
          </div>
          <div className="mt-10 md:col-start-1 md:mt-0">
            <div className="translate-y-0 transform px-10 opacity-100 transition-all delay-300 duration-500 ease-in-out">
              {textChild}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
