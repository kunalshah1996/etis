import React, { useState } from "react";

import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="/">ADMISSIONS AND AID</a>
    </p>
    <p>
      <a href="/">ACADEMICS</a>
    </p>
    <p>
      <a href="/">RESEARCH</a>
    </p>
    <p>
      <a href="/">LIFE AT UIC</a>
    </p>
    <p>
      <a href="/">HEALTH CARE</a>
    </p>
    <p>
      <a href="/">ALUMINI</a>
    </p>
    <p>
      <a href="/">ABOUT</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="etis__navbar">
      <div className="etis__navbar-links">
        <div className="etis__navbar-links_logo">
          <a href="https://uic.edu">
            <img src={logo} alt="uic logo" aria-label="logo" />
          </a>
        </div>
        <div className="etis__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="etis__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#001e62"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#001e62"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="etis__navbar-menu_container scale-up-center">
            <div className="etis__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
