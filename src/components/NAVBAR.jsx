import React from "react";
import logo from "../assets/logo.avif";
import "./NAVBAR.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
function NAVBAR({ dark, setdark }) {
  const toggleDarkMode = () => {
    setdark(!dark);
  };
  return (
    <div className="nav-contents">
      <div className="left-contents">
        <img src={logo} alt="img" />
        <h2>GROW WEALTH</h2>
      </div>
      <div className="right-contents">
        <FontAwesomeIcon
          icon={faMoon}
          className="icon"
          onClick={toggleDarkMode}
        />

        <button>Login/Register</button>
      </div>
    </div>
  );
}

export default NAVBAR;
