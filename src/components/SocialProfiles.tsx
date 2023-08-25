import "./SocialProfiles.scss";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
interface profileProps {
  check: string;
}
function SocialProfiles(props: profileProps) {
  return (
    <div className={props.check === "home" ? "homeProfiles" : "socialProfiles"}>
      <div className="icon">
        <a href="https://github.com/GLVSKiriti">
          <img src={github} alt="" />
        </a>
      </div>
      <div className="icon">
        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=glvskiriti2003369@gmail.com">
          <img src={gmail} alt="" />
        </a>
      </div>
      <div className="icon">
        <a href="https://www.instagram.com/glvs_kiriti_9/">
          <img src={instagram} alt="" />
        </a>
      </div>
      <div className="icon">
        <a href="https://www.linkedin.com/in/glvs-kiriti/">
          <img src={linkedin} alt="" />
        </a>
      </div>
      <div className="icon">
        <a href="https://twitter.com/kiriti2003">
          <img src={twitter} alt="" />
        </a>
      </div>
      {/* <div className="line"></div> */}
    </div>
  );
}

export default SocialProfiles;
