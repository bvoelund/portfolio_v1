import LibraryFrameworkCollection from "./LibraryFrameworkCollection";
import ProgrammingLanguagesCollection from "./ProgrammingLanguagesCollection";
import TechnologyPill from "./TechnologyPill";
import TechnologySection from "./TechnologySection";
import csharp from "../../assets/images/technologies/c_sharp.svg";
import typescript from "../../assets/images/technologies/typescript.svg";
import java from "../../assets/images/technologies/java.svg";
import css from "../../assets/images/technologies/css.svg";
import html from "../../assets/images/technologies/html.png";
import scss from "../../assets/images/technologies/scss.png";
import python from "../../assets/images/technologies/python.png";
import { SiJavascript } from "react-icons/si";
import jest from "../../assets/images/technologies/jest.svg";
import cypress from "../../assets/images/technologies/cypress.svg";
import rtl from "../../assets/images/technologies/rtl.png";
import bootstrap from "../../assets/images/technologies/bootstrap.png";
import antd from "../../assets/images/technologies/antd.png";
import headlessUI from "../../assets/images/technologies/headlessUi.png";
import {
  SiDotnet,
  SiFramer,
  SiGraphql,
  SiMaterialui,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function OverallTechs() {
  return (
    <>
      <TechnologySection title="">
        <TechnologyPill
          header="Typescript"
          icon={<img src={typescript} className="h-6 w-6" />}
          key="typescript"
        />
        <TechnologyPill
          header="React"
          icon={<FaReact color="#61dafb" size={24} />}
          key="reactjs"
        />
        <TechnologyPill
          header="NextJs"
          icon={<SiNextdotjs color="#fff" size={24} />}
          key="nextjs"
        />
        <TechnologyPill
          header="Tailwind"
          icon={<SiTailwindcss color="#38bdf8" size={24} />}
          key="tailwind"
        />
        <TechnologyPill
          header="JavaScript"
          icon={
            <SiJavascript size={24} color="#f7df1e" className="rounded-md" />
          }
          key="javascript"
        />
        <TechnologyPill
          header="CSS"
          icon={<img src={css} className="h-6 w-6" />}
          key="css"
        />
        <TechnologyPill
          header="SCSS"
          icon={<img src={scss} className="h-6 w-6" />}
          key="scss"
        />
        {/* <TechnologyPill
          header="Java"
          icon={<img src={java} className="h-7 w-7" />}
          key="java"
        /> */}

        <TechnologyPill
          header="Redux"
          icon={<SiRedux size={24} color="#764abc" />}
          key="redux"
        />
        <TechnologyPill
          header="Node"
          icon={<SiNodedotjs className="h-6 w-6" color="#3c873a" />}
          key="node"
        />
        {/* <TechnologyPill
          header="Framer"
          icon={<SiFramer size={24} color="#fff" />}
          key="framer"
        /> */}

        <TechnologyPill
          header="Jest"
          icon={<img src={jest} className="h-6 w-6" />}
          key="jest"
        />
        {/* <TechnologyPill
          header="RTL"
          icon={<img src={rtl} className="h-6 w-6" />}
          key="rtl"
        /> */}
        <TechnologyPill
          header="Cypress"
          icon={<img src={cypress} className="h-6 w-6 rounded-full bg-white" />}
          key="cypress"
        />
        {/* <TechnologyPill
          header=".NET"
          icon={<SiDotnet size={24} color="#764abc" />}
          key="dotnet"
        /> */}

        <TechnologyPill
          header="GraphQL"
          icon={<SiGraphql color="#e535ab" size={24} />}
          key="graphql"
        />
        {/* <TechnologyPill
          header="MongoDb"
          icon={<SiMongodb color="#12924f" size={24} />}
          key="mongodb"
        /> */}
      </TechnologySection>
      <div className="flex w-full justify-center">
        <p className="text-center text-yellow">... and more!</p>
      </div>
    </>

    //   <TechnologySection title="Libraries and frameworks">
    //     <LibraryFrameworkCollection />
    //   </TechnologySection>
  );
}
