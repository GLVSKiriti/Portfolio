import "./About.scss";
import ProfilePic from "../assets/MyPic.jpg";

function About() {
  return (
    <div className="about" id="About">
      <h1>About Me</h1>
      <div className="info">
        <img src={ProfilePic} alt="" />
        <div>
          I'm <b>GLVS Kiriti</b> | Software Engineer | Open Source Contributor
          <br />
          <br />
          👋 Software Engineer at <b>MediaTek</b>, interested in understanding
          how things work under the hood and building software around that.
          <br />
          <br />
          🚀 I’ve been involved in open source through <b>GSoC 2024</b> with
          Falco and <b>LFX Mentorship 2023</b> with Jaeger.
          <br />
          <br />
          💻 I enjoy exploring new technologies across{" "}
          <b>software engineering, systems, and AI/ML</b>, working on side
          projects, and contributing to open source.
          <br />
          <br />
          🏡 Outside of tech, I enjoy spending time with family and friends.
        </div>
      </div>
    </div>
  );
}
export default About;
