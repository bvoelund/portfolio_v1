import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import Header from "./components/header/Header";
import NavMenu from "./components/navmenu/NavMenu";
import ScrollToTopButton from "./components/ScrollToTopButton";
import useDarkMode from "./hooks/useDarkMode";
import useToggleDarkMode from "./hooks/useToggleDarkMode";
import AboutMe from "./sections/AboutMe";
import Experience from "./sections/Experience";
import Landing from "./sections/Landing";
import MyWork from "./sections/MyWork";
import Technologies from "./sections/Technologies";
import { opacityVariants } from "./types/transitions";

function App() {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <div
      className={classNames(
        isDarkMode ? "app-dark-bg" : "app-bg",
        "cantarell relative min-h-screen w-full scroll-smooth text-dark transition duration-300 ease-in-out dark:text-white"
      )}
    >
      <Header
        toggleDarkMode={isDarkMode}
        setToggleDarkMode={toggle}
        setToggleSideBar={() => null}
        toggleSideBar={false}
      />
      <ScrollToTopButton />
      <NavMenu />

      <Landing />
      <AboutMe />

      {/* <MyWork sectionRef={myWorkRef} inView={inView2} />
          <Technologies sectionRef={technologiesRef} inView={inView4} /> */}
      {/* <Experience /> */}
      {/* <Personal sectionRef={personalRef} inView={inView} /> */}
    </div>
  );
}

export default App;
