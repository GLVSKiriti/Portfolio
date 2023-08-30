import "./Experience.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { ExperienceList, experience } from "../constants/experiences";
import "react-vertical-timeline-component/style.min.css";

interface expProps {
  experience: experience;
}

const ExperienceCard = ({ experience }: expProps) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: experience.color,
        color: "#fff",
        boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      }}
      contentArrowStyle={{ borderRight: `7px solid rgba(0,0,0,0)` }}
      date={experience.date}
      iconStyle={{
        background: "rgba(255,255,255)",
      }}
      icon={
        <div className="icon">
          <img src={experience.logo} alt={experience.role} />
        </div>
      }
    >
      <h3 className="vertical-timeline-element-title">{experience.title}</h3>
      <p
        className="vertical-timeline-element-subtitle"
        style={{ fontSize: "16px", fontWeight: "bold" }}
      >
        {experience.role}
      </p>
      <p className="activities">{experience.points}</p>
    </VerticalTimelineElement>
  );
};

function Experience() {
  return (
    <div className="Experience" id="Experience">
      <h2>Work Experience</h2>
      <br />
      <p>What I have done so far</p>
      <div className="experienceTimeline">
        <VerticalTimeline>
          {ExperienceList.map((experience, index) => {
            return <ExperienceCard key={index} experience={experience} />;
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
