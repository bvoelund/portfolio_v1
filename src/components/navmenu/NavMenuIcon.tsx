import { Link } from "react-scroll";

type Props = {
  icon: JSX.Element | JSX.Element[];
  text: string;
  sectionRef: string;
};

export default function NavMenuIcon({ icon, text, sectionRef }: Props) {
  return (
    <Link to={sectionRef} smooth offset={-10}>
      <div className="group relative flex cursor-pointer flex-col items-center justify-center rounded-3xl p-4  text-inherit transition duration-200 ease-linear active:-translate-y-1 active:text-lightBlue md:hover:-translate-y-1 md:hover:text-lightBlue">
        <span className="menu-tooltip bottom-0 right-0 touch-none lg:group-hover:scale-100">
          {text}
        </span>
        {icon}
      </div>
    </Link>
  );
}
