import Header from "./components/header/Header";
import NavMenu from "./components/navmenu/NavMenu";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AboutMe from "./sections/AboutMe";
import Experience from "./sections/Experience";
import Landing from "./sections/Landing";
import MyWork from "./sections/MyWork";
import Technologies from "./sections/Technologies";

export default function App() {
  return (
    <div className="fredoka relative min-h-screen w-full max-w-full scroll-smooth bg-dark text-white transition duration-300 ease-in-out">
      <Header />
      <ScrollToTopButton />
      <NavMenu />

      <div className="flex flex-col space-y-12 pb-20 lg:space-y-0">
        <Landing />
        <AboutMe />
        <Experience />
        <Technologies />
        <MyWork />
      </div>
    </div>
  );
}
