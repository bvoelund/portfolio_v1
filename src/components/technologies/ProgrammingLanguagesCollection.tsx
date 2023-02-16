import jest from "../../assets/images/technologies/jest.svg";
import csharp from "../../assets/images/technologies/c_sharp.svg";
import typescript from "../../assets/images/technologies/typescript.svg";
import css from "../../assets/images/technologies/css.svg";
import html from "../../assets/images/technologies/html.png";
import scss from "../../assets/images/technologies/scss.png";
import {
  SiCss3,
  SiDotnet,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiRedux,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import TechnologyPill from "./TechnologyPill";

export default function ProgrammingLanguagesCollection() {
  const pills = [
    <TechnologyPill
      header="Typescript"
      icon={<img src={typescript} className="h-6 w-6" />}
      key="typescript"
    />,
    <TechnologyPill
      header="JavaScript"
      icon={<SiJavascript size={24} color="#f7df1e" />}
      key="javascript"
    />,
    <TechnologyPill
      header="CSS"
      icon={<img src={css} className="h-6 w-6" />}
      key="css"
    />,
    <TechnologyPill
      header="SCSS"
      icon={<img src={scss} className="h-6 w-6" />}
      key="scss"
    />,
    <TechnologyPill
      header="C#"
      icon={<img src={csharp} className="h-6 w-6" />}
      key="cSharp"
    />,
    <TechnologyPill
      header="HTML 5"
      icon={<img src={html} className="h-6 w-6" />}
      key="html5"
    />,
  ];

  return <>{pills}</>;
}
