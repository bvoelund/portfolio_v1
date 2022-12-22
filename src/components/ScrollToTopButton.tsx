import classNames from "classnames";
import { AiOutlineArrowUp } from "react-icons/ai";
import useGetScrollPosition from "../hooks/useGetScrollPosition";

export default function ScrollToTopButton() {
  const scrollPosition = useGetScrollPosition();

  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={classNames(
        scrollPosition > 200
          ? "opacity-100 "
          : "pointer-events-none cursor-default opacity-0",
        "fixed bottom-0 right-0 z-50 m-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-dark transition duration-200 ease-in-out hover:scale-125 dark:bg-white md:h-12 md:w-12 2xl:right-6"
      )}
    >
      <AiOutlineArrowUp className="h-3/6 w-3/6 text-white dark:text-dark " />
    </div>
  );
}
