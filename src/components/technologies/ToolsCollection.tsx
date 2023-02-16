import {
  SiDotnet,
  SiGit,
  SiGraphql,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { FaAtlassian, FaReact } from "react-icons/fa";
import TechnologyPill from "./TechnologyPill";
import jenkins from "../../assets/images/technologies/jenkins.png";
import postman from "../../assets/images/technologies/postman.svg";
import intellij from "../../assets/images/technologies/intellij.png";
import blender from "../../assets/images/technologies/blender.png";
import figma from "../../assets/images/technologies/figma.svg";
import slack from "../../assets/images/technologies/slack.png";
import {
  SiBlender,
  SiDocker,
  SiVisualstudio,
  SiVisualstudiocode,
} from "react-icons/si";

export default function ToolsCollection() {
  const pills = [
    <TechnologyPill
      header="VS Code"
      icon={<SiVisualstudiocode size={32} fill="#3fa6eb" />}
      key="vsCode"
    />,
    <TechnologyPill
      header="Visual Studio"
      icon={<SiVisualstudio size={32} fill="#ce98f9" />}
      key="visualStudio"
    />,
    <TechnologyPill
      header="Intellij"
      icon={<img src={intellij} alt="jenkins" className="h-8 w-8" />}
      key="intellij"
    />,
    <TechnologyPill
      header="Docker"
      icon={<SiDocker size={32} fill="#2497ed" />}
      key="docker"
    />,
    <TechnologyPill
      header="Jenkins"
      icon={<img src={jenkins} alt="jenkins" className="h-8 w-6" />}
      key="jenkins"
    />,
    <TechnologyPill
      header="Vercel"
      icon={<SiVercel color="#fff" size={32} />}
      key="vercel"
    />,
    <TechnologyPill
      header="Postman"
      icon={
        <img src={postman} alt="postman" className="h-auto w-8 min-w-[32px]" />
      }
      key="postman"
    />,
    <TechnologyPill
      header="Git"
      icon={<SiGit color="#f15030" size={32} />}
      key="git"
    />,
    <TechnologyPill
      header="Blender"
      icon={<img src={blender} alt="jenkins" className="h-8 w-auto" />}
      key="blender"
    />,
    <TechnologyPill
      header="Figma"
      icon={<img src={figma} alt="jenkins" className="h-8 w-8" />}
      key="figma"
    />,
    <TechnologyPill
      header="Heroku"
      icon={<SiHeroku color="#430098" size={32} />}
      key="heroku"
    />,
    <TechnologyPill
      header="Atlassian"
      icon={<FaAtlassian color="#2684ff" size={32} />}
      key="atlassian"
    />,
  ];

  return <>{pills}</>;
}
