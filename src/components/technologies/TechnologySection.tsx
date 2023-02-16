import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function TechnologySection({ title, children }: Props) {
  return (
    <>
      <h2 className="bg-gradient-to-l from-lightBlue to-yellow bg-clip-text fill-transparent text-3xl text-transparent">
        {title}
      </h2>
      <div className="delay-400 grid translate-y-0 transform grid-cols-2 gap-3 opacity-100 transition-all duration-500 ease-out sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {children}
      </div>
    </>
  );
}
