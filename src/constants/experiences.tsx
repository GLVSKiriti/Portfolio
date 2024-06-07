import cncf from "../assets/CNCF.png";
import gsoc from "../assets/GSoC.png";

export interface experience {
  title: string;
  role: string;
  logo: any;
  color: string;
  date: string;
  points: JSX.Element;
}

export const ExperienceList: experience[] = [
  {
    title: "Google Summer of Code 2024",
    role: "Contributor",
    logo: gsoc,
    color: "linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)",
    date: "May 2024 to Present",
    points: (
      <>
        Upgraded Falco's event-generator using <b>Go</b>, enhancing its testing
        and benchmarking capabilities. Added declarative YAML testing support
        and integrated the tool into Falco's <b>CI</b> pipeline, ensuring
        systematic assessment of Falco's threat detection performance.
      </>
    ),
  },
  {
    title: "Linux Foundation Mentorship 2023",
    role: "Contributor",
    logo: cncf,
    color: "linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)",
    date: "June 2023 to August 2023",
    points: (
      <>
        Developed Critical Path analysis feature using <b>TypeScript</b> and
        <b> React</b>, integrated seamlessly into Jaeger UI. Ensured reliability
        through comprehensive testing with <b>Jest</b>.
      </>
    ),
  },
];
