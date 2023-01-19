import classNames from "classnames";
import { BsArrowUpCircle } from "react-icons/bs";
import useGetScrollPosition from "../hooks/useGetScrollPosition";

export default function ScrollToTopButton() {
  const scrollPosition = useGetScrollPosition();

  return (
    <BsArrowUpCircle
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={classNames(
        scrollPosition > 200
          ? "opacity-100 "
          : "pointer-events-none cursor-default opacity-0",
        "fixed bottom-0 right-0 z-50 m-5 hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full border-white shadow-2xl transition duration-200 ease-in-out hover:scale-125 hover:bg-lightBlue sm:flex md:h-12 md:w-12 2xl:right-6"
      )}
    />
  );
}
