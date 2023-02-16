import classNames from "classnames";
import useGetScrollPosition from "../hooks/useGetScrollPosition";
import { TbArrowBigTop } from "react-icons/tb";

export default function ScrollToTopButton() {
  const scrollPosition = useGetScrollPosition();

  return (
    <div className="text-white">
      <TbArrowBigTop
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={classNames(
          scrollPosition > 200
            ? "opacity-100 "
            : "pointer-events-none cursor-default opacity-0",
          "fixed bottom-0 right-0 z-50 m-5 hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-lightBlue to-yellow p-2 text-dark transition duration-200 ease-in-out hover:scale-110 sm:flex md:h-12 md:w-12 2xl:right-6"
        )}
      />
    </div>
  );
}
