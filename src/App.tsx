import ContactBullets from "./components/ContactBullets";
import Header from "./components/header/Header";
import NavMenu from "./components/navmenu/NavMenu";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SocialMediaBullets from "./components/SocialMediaBullets";
import useDarkMode from "./hooks/useDarkMode";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Landing from "./sections/Landing";
import MyWork from "./sections/MyWork";
import Technologies from "./sections/Technologies";
import grass from "./assets/images/grass.png";

//fredoka relative min-h-screen w-full scroll-smooth bg-gradient-to-br from-gray-400 to-white text-dark transition duration-300 ease-in-out dark:bg-opacity-90 dark:bg-gradient-to-b dark:from-[#142c69] dark:to-[#008081] dark:text-white
//bg-gradient-to-b from-[#050F1D] via-[#118AB2] to-[#3B9FBF]
function App() {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <div className="fredoka text-dark relative min-h-screen w-full scroll-smooth bg-[#050F1D]  text-white transition duration-300 ease-in-out">
      <Header toggleDarkMode={isDarkMode} setToggleDarkMode={toggle} />
      <ScrollToTopButton />
      <NavMenu />

      <SocialMediaBullets />
      <ContactBullets />

      <div className="flex flex-col">
        <Landing />
        <AboutMe />
        <Experience />
        <MyWork />
        <Technologies />
        <Contact />
      </div>

      {/* <div className="flex w-full bg-[#3B9FBF]">
        <img src={grass} className="w-1/2" />
        <img src={grass} className="w-1/2" />
      </div> */}
      {/* <MyWork sectionRef={myWorkRef} inView={inView2} />
          <Technologies sectionRef={technologiesRef} inView={inView4} /> */}
      {/* <Experience /> */}
      {/* <Personal sectionRef={personalRef} inView={inView} /> */}
    </div>
  );
}

export default App;
