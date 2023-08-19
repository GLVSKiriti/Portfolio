import "./NavBar.css";
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
          <img src={logo} alt="" />
        </div>
        <ul className="navBarList">
          {navBarLinks.map((each) => (
            <Link
              to={"/" + each.title}
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
          <div className={!toggle ? "dropDownMenu hidden" : "dropDownMenu"}>
            <ul className="navBarList">
              {navBarLinks.map((each) => (
                <Link
                  to={"/" + each.title}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <li
                    key={each.id}
                    className={
                      activeLink === each.title ? "list active" : "list"
                    }
                    onClick={() => setActiveLink(each.title)}
                  >
                    {each.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
