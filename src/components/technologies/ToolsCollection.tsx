import { SiGit, SiHeroku, SiVercel } from "react-icons/si";
import { FaAtlassian } from "react-icons/fa";
import TechnologyPill from "./TechnologyPill";
import jenkins from "../../assets/images/technologies/jenkins.png";
import postman from "../../assets/images/technologies/postman.svg";
import blender from "../../assets/images/technologies/blender.png";
import figma from "../../assets/images/technologies/figma.svg";
import firebase from "../../assets/images/technologies/firebase.svg";
import webpack from "../../assets/images/technologies/webpack.png";
import slack from "../../assets/images/technologies/slack.png";
import vite from "../../assets/images/technologies/vite.svg";
import { SiDocker } from "react-icons/si";

export default function ToolsCollection() {
  const pills = [
    <TechnologyPill
      header="Vite"
      icon={<img src={vite} alt="vite" className="h-8 w-6" />}
      key="vite"
    />,
    <TechnologyPill
      header="Webpack"
      icon={<img src={webpack} alt="webpack" className="h-8 w-8" />}
      key="webpack"
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
      header="Postman"
      icon={
        <img src={postman} alt="postman" className="h-auto w-8 min-w-[32px]" />
      }
      key="postman"
    />,
    <TechnologyPill
      header="Firebase"
      icon={<img src={firebase} alt="jenkins" className="h-8 w-8" />}
      key="firebase"
    />,
    <TechnologyPill
      header="Vercel"
      icon={<SiVercel color="#fff" size={32} />}
      key="vercel"
    />,
    <TechnologyPill
      header="Git"
      icon={<SiGit color="#f15030" size={32} />}
      key="git"
    />,
    <TechnologyPill
      header="Atlassian"
      icon={<FaAtlassian color="#2684ff" size={32} />}
      key="atlassian"
    />,
    <TechnologyPill
      header="Slack"
      icon={<img src={slack} alt="slack" className="h-8 w-8" />}
      key="slack"
    />,
    <TechnologyPill
      header="Figma"
      icon={<img src={figma} alt="figma" className="h-8 w-8" />}
      key="figma"
    />,
    <TechnologyPill
      header="Blender"
      icon={<img src={blender} alt="blender" className="h-8 w-auto" />}
      key="blender"
    />,
  ];

  return <>{pills}</>;
}
