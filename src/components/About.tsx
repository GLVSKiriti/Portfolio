import logo from "../assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg";

import "./About.scss";

function About() {
  return (
    <div className="about">
      <div className="infoSection">
        <div className="infoDecoration">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        <div className="info">
          <div>
            Hi, I'm <b>Kiriti</b>
          </div>
          <div className="caption">Software Developer</div>
          <button>Download Resume</button>
        </div>
      </div>
      <div className="aboutLogo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default About;
