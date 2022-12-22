import DarkModeToggler from "./DarkModeToggler";
import { MdWorkOutline } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdMusicalNotes } from "react-icons/io";
import {
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import NavBarIcon from "./NavBarIcon";
import PortfolioIcon from "./PortfolioIcon";

type Props = {
  toggleDarkMode: boolean;
  setToggleDarkMode: (toggle: boolean) => void;
  toggleSideBar: boolean;
  setToggleSideBar: (state: boolean) => void;
};

export default function Header({
  toggleDarkMode,
  setToggleDarkMode,
  toggleSideBar,
  setToggleSideBar,
}: Props) {
  return (
    <nav className="dark:shadow-[20px 20px 60px #0e1421, -20px -20px 60px #141c2d] shadow-[20px 20px 60px #bebebe, -20px -20px 60px #ffffff] sticky top-0 z-50 flex w-full flex-col md:flex-row">
      <div
        className={
          "flex w-full items-center justify-between px-8 py-2 opacity-100 transition duration-100 ease-in-out dark:border-none"
        }
      >
        <PortfolioIcon />
        {/* <div className="hidden items-center md:space-x-6 lg:flex lg:space-x-12">
          <NavBarIcon
            sectionRef="mywork-section"
            icon={<AiOutlineFundProjectionScreen size={24} />}
            text={"My Work"}
          />
          <NavBarIcon
            sectionRef="technologies-section"
            icon={<GiGearStickPattern size={24} />}
            text={"Technologies"}
          />
          <NavBarIcon
            sectionRef="experience-section"
            icon={<MdWorkOutline size={24} />}
            text={"Experience"}
          />
          <NavBarIcon
            sectionRef="personal-section"
            icon={<BsPersonLinesFill size={24} />}
            text={"About me"}
          />
        </div> */}

        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center space-x-3 border-r-2 border-[#102770] pr-4 dark:border-[#6bd6f0]">
            <a
              className="z-20 cursor-pointer text-[#102770] transition duration-100 ease-in-out hover:scale-110 focus:outline-none dark:text-white dark:hover:text-[#6bd6f0]"
              href="https://github.com/bvoelund"
              target="_blank"
            >
              <AiOutlineLinkedin
                size={36}
                className="cursor-pointer transition-all duration-150 ease-in-out hover:scale-110"
              />
            </a>
            <a
              className="z-20 cursor-pointer text-[#102770] transition duration-100 ease-in-out hover:scale-110 focus:outline-none dark:text-white dark:hover:text-[#6bd6f0]"
              href="https://github.com/bvoelund"
              target="_blank"
            >
              <AiOutlineGithub
                size={36}
                className="cursor-pointer transition-all duration-150 ease-in-out hover:scale-110"
              />
            </a>
          </div>
          <div className="flex items-center justify-center space-x-3 pl-4">
            <div>
              <AiOutlinePlayCircle size={30} />
            </div>
            <DarkModeToggler
              toggleDarkMode={toggleDarkMode}
              setToggleDarkMode={setToggleDarkMode}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
