import intellij from "../../assets/images/technologies/intellij.png";
import androidStudio from "../../assets/images/technologies/androidStudio.png";
import { SiVisualstudio, SiVisualstudiocode } from "react-icons/si";
import TechnologyPill from "./TechnologyPill";

export default function EditorsCollection() {
  const editors = [
    <TechnologyPill
      header="VS Code"
      icon={<SiVisualstudiocode size={28} fill="#3fa6eb" />}
      key="vsCode"
    />,
    <TechnologyPill
      header="Visual Studio"
      icon={<SiVisualstudio size={28} fill="#ce98f9" />}
      key="visualStudio"
    />,
    <TechnologyPill
      header="Intellij"
      icon={<img src={intellij} alt="jenkins" className="h-7 w-7" />}
      key="intellij"
    />,
    <TechnologyPill
      header="Android Studio"
      icon={<img src={androidStudio} alt="androidStudio" className="h-7 w-7" />}
      key="androidStudio"
    />,
  ];

  return <>{editors}</>;
}
