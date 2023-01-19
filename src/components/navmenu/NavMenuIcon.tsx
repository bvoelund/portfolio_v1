import { Link } from "react-scroll";
import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element | JSX.Element[];
  text: string;
  sectionRef: string;
};

export default function NavMenuIcon({ icon, text, sectionRef }: Props) {
  return (
    <Link to={sectionRef} smooth offset={-110}>
      <div className="group relative flex cursor-pointer flex-col items-center justify-center rounded-3xl p-4 text-inherit transition duration-200 ease-linear active:-translate-y-1 active:text-[#6bd6f0] md:hover:-translate-y-1 md:hover:text-[#6bd6f0]">
        <span className="menu-tooltip bottom-0 right-0 touch-none lg:group-hover:scale-100">
          {text}
        </span>
        {icon}
      </div>
    </Link>
  );
}
