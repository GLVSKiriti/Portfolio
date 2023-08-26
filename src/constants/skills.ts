import {
  SiJavascript,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiMongodb,
  SiPython,
  SiReact,
  SiSass,
  SiGit,
  SiGithub,
  SiLinux,
  SiJest,
  SiPostgresql,
  SiRedux,
  SiTypescript,
  SiUbuntu,
  SiCplusplus,
  SiC,
  SiMysql,
  SiExpress,
  SiPostman,
  SiMui,
  SiRedis,
  SiGo,
  SiGnubash,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
interface skill {
  name: string;
  icon: any;
  color?: string;
}

const skills: skill[] = [
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "yellow",
  },
  {
    name: "Go",
    icon: SiGo,
    color: "#00ADD8",
  },
  {
    name: "C",
    icon: SiC,
    color: "white",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599C",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "Bash",
    icon: SiGnubash,
    color: "white",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: SiCss3,
    color: "#1572B6",
  },
  {
    name: "Sass",
    icon: SiSass,
    color: "#CC6699",
  },

  {
    name: "NodeJS",
    icon: FaNodeJs,
    color: "#339933",
  },

  {
    name: "Express",
    icon: SiExpress,
    color: "white",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
  },

  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "Redis",
    icon: SiRedis,
    color: "#DC382D",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "white",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },
  {
    name: "Jest",
    icon: SiJest,
    color: "#C21325",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC",
  },
  {
    name: "Linux",
    icon: SiLinux,
    color: "#FCC624",
  },
  {
    name: "Ubuntu",
    icon: SiUbuntu,
    color: "#E95420",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
  },
  {
    name: "Material UI",
    icon: SiMui,
    color: "#007FFF",
  },
];

export default skills;
