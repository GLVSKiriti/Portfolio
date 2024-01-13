import TrustVaultLogo from "../assets/TrustVault.png";
import PortfolioLogo from "../assets/Portfolio.png";
import TrendZLogo from "../assets/TrendZ.png";
import MiniRouteLogo from "../assets/MiniRoute.png";

export interface Project {
  name: string;
  description: string;
  tags: string[];
  image: any;
  source: string;
}

export const ProjectsList: Project[] = [
  {
    name: "GLVSKiriti",
    description:
      "This website which you're currently looking at, made to show my skills and project to everyone",
    tags: ["React", "TypeScript", "Sass"],
    image: PortfolioLogo,
    source: "https://github.com/GLVSKiriti/Portfolio",
  },
  {
    name: "TrustVault",
    description:
      "A Web App that allow users to store and share sensitive data with nominated individuals \
      in a secure and automated manner during emergencies or unforeseen circumstances",
    tags: ["React", "JavaScript", "CSS3", "Jest", "Express", "PostgreSQL"],
    image: TrustVaultLogo,
    source: "https://github.com/GLVSKiriti/TrustVaultFrontend",
  },
  {
    name: "TrendZ",
    description:
      "An e-commerce store for clothing enthusiasts,Discover the latest fashion\
        trends effortlessly while enjoying a secure and stylish shopping experience.",
    tags: ["React", "JavaScript", "Redux", "Express", "MongoDB"],
    image: TrendZLogo,
    source: "https://github.com/GLVSKiriti/TrendZ",
  },
  {
    name: "MiniRoute",
    description:
      "A Go lang based URL shortner where users can shorten the long url where Shortened urls\
       are redirected to original long urls on accessing.\
       Containerized the whole application",
    tags: ["React", "TypeScript", "Sass", "Go", "Docker", "PostgreSQL"],
    image: MiniRouteLogo,
    source: "https://github.com/GLVSKiriti/MiniRoute",
  },
];
