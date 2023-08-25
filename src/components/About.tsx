import "./About.scss";
import ProfilePic from "../assets/MyPic.jpg";

function About() {
  return (
    <div className="about" id="About">
      <h1>About Me</h1>
      <div className="info">
        <img src={ProfilePic} alt="" />
        <div>
          I'm <b>GLVS Kiriti</b> | Full Stack developer | Open Source
          contributor
          <br />
          <br />
          👋 Seasoned Full Stack Developer weaving together digital experiences.
          <br />
          <br />
          🚀 On a DevOps learning path for streamlined development.
          <br />
          <br />
          💻 Active Open Source contributor, collaborating and learning with the
          community
          <br />
          <br />
          🏡 Finding joy in the company of family and friends beyond the screen.
        </div>
      </div>
    </div>
  );
}

export default About;
