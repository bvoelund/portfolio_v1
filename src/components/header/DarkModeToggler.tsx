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
      className="z-20 cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:text-[#6bd6f0] focus:outline-none"
    >
      {toggleDarkMode ? (
        <TbMoonStars size={22} />
      ) : (
        <MdOutlineWbSunny size={22} />
      )}
    </div>
  );
}
