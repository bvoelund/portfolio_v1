import { FaReact } from "react-icons/fa";
import {
  SiFramer,
  SiHeroku,
  SiMaterialui,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import WorkCard from "./WorkCard";
import typescript from "../../assets/images/technologies/typescript.svg";
import stratbooks from "../../assets/images/mywork/stratbook.png";
import portfolio from "../../assets/images/mywork/portfolio_v1.png";
import smartMirror from "../../assets/images/mywork/smartMirror.png";
import csharp from "../../assets/images/technologies/c_sharp.svg";
import jwt from "../../assets/images/technologies/jwt.svg";

export default function WorkCardCollection() {
  const cards = [
    <WorkCard
      host={null}
      repo="https://github.com/bvoelund/react-smart-mirror"
      status="In Progress ✍️"
      content="Smart home app for displaying day-to-day information. In short - a web app hosted on a RaspberryPi, displayed on a monitor."
      title="SmartMirror"
      techUsed={[
        <FaReact color="#61dafb" size={24} />,
        <img src={typescript} className="h-6 w-6" />,
        <SiTailwindcss color="#38bdf8" size={24} />,
        <SiRedux size={24} color="#764abc" />,
      ]}
      image={smartMirror}
      key="smartMirror"
    />,
    <WorkCard
      host={null}
      repo="https://github.com/bvoelund/portfolio_v1"
      status="Done ✔️"
      content="The portfolio that you're currently beholding. Used as a opportunity to play with new technologies and libraries."
      title="Portfolio V1"
      techUsed={[
        <FaReact color="#61dafb" size={24} />,
        <SiFramer color="#fff" size={24} />,
        <img src={typescript} className="h-6 w-6" />,
        <SiTailwindcss color="#38bdf8" size={24} />,
      ]}
      image={portfolio}
      key="portfolio"
    />,
    <WorkCard
      host={null}
      repo={null}
      status="Done ✔️"
      content="Bachelor project - Created a strategic platform for the popular video game Counter Strike."
      title="Stratbooks"
      techUsed={[
        <FaReact color="#61dafb" size={24} />,
        <img src={typescript} className="h-6 w-6" />,
        <SiMaterialui color="#00b0ff" size={24} />,
        <img src={csharp} className="h-6 w-6" />,
        <SiMongodb color="#12924f" size={24} />,
        <SiHeroku color="#430098" size={24} />,
        <img src={jwt} className="h-6 w-6" />,
      ]}
      image={stratbooks}
      key="stratbooks"
    />,
  ];

  return <>{cards.map((card) => card)}</>;
}
