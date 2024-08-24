import logo from "../assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg";
import angleDownArrow from "../assets/angle.png";
import "./Home.scss";
import SocialProfiles from "./SocialProfiles";

function Home() {
  return (
    <div className="home" id="">
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
          <button>
            <a href="https://drive.google.com/file/d/1VpM3cmanf0vnX9Z2WJMhEa1DrdcN_zVj/view?usp=sharing">
              Download Resume
            </a>
          </button>
        </div>
      </div>
      <div className="homeLogo">
        <img src={logo} alt="" />
      </div>
      <SocialProfiles check="home" />
      <a
        className="scollToAbout"
        href="/#About"
        style={{ color: "white", textDecoration: "none" }}
      >
        <img src={angleDownArrow} alt="" />
        <div>Scroll Down</div>
        <img src={angleDownArrow} alt="" />
      </a>
    </div>
  );
}

export default Home;
