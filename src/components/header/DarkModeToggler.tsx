import { MdOutlineWbSunny } from "react-icons/md";
import { TbMoonStars } from "react-icons/tb";

type Props = {
  setToggleDarkMode: (toggle: boolean) => void;
  toggleDarkMode: boolean;
};

export default function DarkModeToggler({
  setToggleDarkMode,
  toggleDarkMode,
}: Props) {
  return (
    <div
      onClick={() => setToggleDarkMode(!toggleDarkMode)}
      className="z-20 cursor-pointer text-[#102770] transition duration-300 ease-in-out hover:scale-110 focus:outline-none dark:text-white dark:hover:text-[#6bd6f0]"
    >
      {toggleDarkMode ? (
        <TbMoonStars size={35} />
      ) : (
        <MdOutlineWbSunny size={35} />
      )}
    </div>
  );
}
