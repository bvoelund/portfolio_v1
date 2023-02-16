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
import TechnologyPill from "./TechnologyPill";

export default function LibraryFrameworkCollection() {
  const libFrames = [
    <TechnologyPill
      header="React"
      icon={<FaReact color="#61dafb" size={24} />}
      key="reactjs"
    />,
    <TechnologyPill
      header="Tailwind"
      icon={<SiTailwindcss color="#38bdf8" size={24} />}
      key="tailwind"
    />,
    <TechnologyPill
      header="Redux"
      icon={<SiRedux size={24} color="#764abc" />}
      key="redux"
    />,
    <TechnologyPill
      header="Node"
      icon={<SiNodedotjs className="h-6 w-6" color="#3c873a" />}
      key="node"
    />,
    <TechnologyPill
      header="Framer"
      icon={<SiFramer size={24} color="#fff" />}
      key="framer"
    />,

    <TechnologyPill
      header="Jest"
      icon={<img src={jest} className="h-6 w-6" />}
      key="jest"
    />,
    <TechnologyPill
      header="RTL"
      icon={<img src={rtl} className="h-6 w-6" />}
      key="rtl"
    />,
    <TechnologyPill
      header="Cypress"
      icon={<img src={cypress} className="h-6 w-6 rounded-full bg-white" />}
      key="cypress"
    />,
    <TechnologyPill
      header=".NET"
      icon={<SiDotnet size={24} color="#764abc" />}
      key="dotnet"
    />,
    <TechnologyPill
      header="NextJs"
      icon={<SiNextdotjs color="#fff" size={24} />}
      key="nextjs"
    />,
    <TechnologyPill
      header="GraphQL"
      icon={<SiGraphql color="#e535ab" size={24} />}
      key="graphql"
    />,
    <TechnologyPill
      header="MongoDb"
      icon={<SiMongodb color="#12924f" size={24} />}
      key="mongodb"
    />,
    <TechnologyPill
      header="Ant Design"
      icon={<img src={antd} className="h-6 w-6" />}
      key="antDesign"
    />,
    <TechnologyPill
      header="Headless UI"
      icon={<img src={headlessUI} className="h-6 w-auto" />}
      key="headlessUi"
    />,
    <TechnologyPill
      header="Bootstrap"
      icon={<img src={bootstrap} className="h-6 w-auto" />}
      key="bootstrap"
    />,
    <TechnologyPill
      header="Material UI"
      icon={<SiMaterialui color="#017fff" size={24} />}
      key="materialUI"
    />,
  ];

  return <>{libFrames}</>;
}
