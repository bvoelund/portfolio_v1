import classNames from "classnames";
import React from "react";

type Props = {
  company: string;
  period: string;
  role: string;
  content: string[];
  isActive: boolean;
};

export default function ExperienceTabContent({
  company,
  content,
  isActive,
  period,
  role,
}: Props) {
  console.log(content);
  console.log(isActive);

  return (
    <div
      className={classNames(
        isActive
          ? "relative z-10 h-auto w-full opacity-100 "
          : "absolute z-0 opacity-0",
        "border-tr-lightBlue border-tr top-0 left-0 min-w-full rounded-3xl p-4 transition-all duration-500 ease-in-out"
      )}
    >
      <div className="mb-6 flex flex-col space-y-2">
        <div className="flex items-center justify-start">
          <h3 className="mr-1 text-xl font-semibold">{role}</h3>
          {"-"}
          <h3 className="ml-1 text-xl font-semibold text-lightBlue">
            {company}
          </h3>
        </div>
        <h4 className="font-semibold">{period}</h4>
      </div>
      <ul>
        {content.map((text) => (
          <li className="before:content-['\'] before:pr-2 before:text-lightBlue">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
