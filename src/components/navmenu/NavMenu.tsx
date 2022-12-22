import { BsPersonLinesFill } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import useDarkMode from "../../hooks/useDarkMode";
import classNames from "classnames";
import NavMenuIcon from "./NavMenuIcon";

export default function NavMenu() {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={classNames(
        isDarkMode ? "glass-dark" : "glass",
        " fixed right-0 left-0 bottom-10 z-50 ml-auto mr-auto w-fit rounded-3xl border-2 px-4 text-[#102770] dark:text-white"
      )}
    >
      <div className="flex w-full items-center justify-between space-x-4 opacity-100 transition duration-100 ease-in-out dark:border-none">
        <NavMenuIcon
          sectionRef="personal-section"
          icon={<BsPersonLinesFill size={27} />}
          text={"About me"}
        />
        <NavMenuIcon
          sectionRef="mywork-section"
          icon={<AiOutlineFundProjectionScreen size={27} />}
          text={"My Work"}
        />
        <NavMenuIcon
          sectionRef="technologies-section"
          icon={<GiGearStickPattern size={27} />}
          text={"Technologies"}
        />
        <NavMenuIcon
          sectionRef="experience-section"
          icon={<MdWorkOutline size={27} />}
          text={"Experience"}
        />

        <NavMenuIcon
          sectionRef="contact-section"
          icon={<BsChat size={27} />}
          text={"Contact"}
        />
      </div>
    </div>
  );
}
