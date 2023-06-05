import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with <b>React.js</b> <b>Node.js</b> <b>MySQL</b>.
      </span>
    </footer>
  );
};

export default Footer;
