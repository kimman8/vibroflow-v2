import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/vibroflow-logo.png";

const Header = () => {
  return (
    <header className="transform scale-75">
      <img src={logo} alt="" />
    </header>
  );
};

export default Header;
