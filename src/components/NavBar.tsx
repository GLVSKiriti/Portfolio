import "./NavBar.scss";
import logo from "../assets/kiriti-high-resolution-logo-color-on-transparent-background.png";
import menu from "../assets/icons8-hamburger-menu-48.png";
import cross from "../assets/icons8-cross-48.png";
import { navBarLinks } from "../constants/index.ts";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [activeLink, setActiveLink] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="navBar">
        <div className="logo">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="navBarList">
          {navBarLinks.map((each) => (
            <Link
              to={"#" + each.title}
              style={{ color: "white", textDecoration: "none" }}
            >
              <li
                key={each.id}
                className={activeLink === each.title ? "list active" : "list"}
                onClick={() => setActiveLink(each.title)}
              >
                {each.title}
              </li>
            </Link>
          ))}
        </ul>
        <div className="hamBurgerMenu">
          <img
            src={!toggle ? menu : cross}
            alt="menu"
            onClick={() => setToggle(!toggle)}
          />
          <ul className={!toggle ? "navBarList hidden" : "navBarList"}>
            {navBarLinks.map((each) => (
              <Link
                to={"#" + each.title}
                style={{ color: "white", textDecoration: "none" }}
              >
                <li
                  key={each.id}
                  className={activeLink === each.title ? "list active" : "list"}
                  onClick={() => setActiveLink(each.title)}
                >
                  {each.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
