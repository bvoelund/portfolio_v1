import classNames from "classnames";
import React from "react";

type Props = {
  title: string;
  isActive: boolean;
  isLast: boolean;
  tabIndex: number;
  onClick: (id: number) => void;
};

export default function ExperienceTabButton({
  isActive,
  isLast,
  title,
  tabIndex,
  onClick,
}: Props) {
  return (
    <div
      className={classNames(
        isActive ? "text-lightBlue" : "text-white",
        "mb-4 inline-block h-5 w-20 cursor-pointer items-center justify-start rounded-tl-sm text-start text-base font-bold transition-all duration-200 ease-in-out hover:text-lightBlue active:text-lightBlue"
      )}
      data-tab={tabIndex}
      onClick={() => onClick(tabIndex)}
    >
      {title}
    </div>
  );
}
