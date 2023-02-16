import ExperienceCard from "./ExperienceCard";
import jyskLogo from "../../assets/images/companies/jysk.svg";
import kamstrupLogo from "../../assets/images/companies/kamstrup.svg";

export default function ExperienceCardCollection() {
  const cards = [
    <ExperienceCard
      icon={jyskLogo}
      date="Aug. 2022 - Now"
      position="Web Developer"
      content={[
        "Worked on multiple systems - primarily a modern webbased cashregister system",
        "Used technologies like ReactJS, TypeScript, SCSS and others",
        "Been part of a mixed scrum team of backend and frontend developers",
      ]}
      title="Jysk"
      key="jysk"
    />,
    <ExperienceCard
      icon={kamstrupLogo}
      date="Feb. 2020 - July 2020"
      position="Internship"
      content={[
        "Internship as part of my study - as a Full Stack Developer",
        "Worked with C#, WPF and Caliburn.Micro",
        "Was responsible for developing a new dekstop app to support my team's main application",
      ]}
      title="Kamstrup"
      key="kamstrup"
    />,
  ];
  return <>{cards}</>;
}
