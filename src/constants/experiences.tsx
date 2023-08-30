import cncf from "../assets/CNCF.png";

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
