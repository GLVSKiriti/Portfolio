import "./About.scss";
import ProfilePic from "../assets/MyPic.jpg";

function About() {
  return (
    <div className="about" id="About">
      <h1>About Me</h1>
      <div className="info">
        <img src={ProfilePic} alt="" />
        <div>
          I'm GLVS Kiriti <b>|</b> Full Stack developer <b>|</b> Open Source
          contributor
          <br />
          <br />
          I'm well versed in the domain of Full Stack Development and also love
          tinkering with technologies related to DevOps and learning how things
          work. I love contributing in Open Source
        </div>
      </div>
    </div>
  );
}

export default About;
