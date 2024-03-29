import { useEffect, useState } from "react";

const useGetScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    if (window.pageYOffset !== scrollPosition) updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default useGetScrollPosition;
