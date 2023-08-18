import "./NavBar.css";
import logo from "../assets/kiriti-high-resolution-logo-color-on-transparent-background.png";
import { navBarLinks } from "../constants/index.ts";

function NavBar() {
  return (
    <>
      <div className="navBar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="navBarList">
          {navBarLinks.map((each) => (
            <li>{each.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
