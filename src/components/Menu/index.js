import React from "react";

import Logo from "../../assets/images/logo.png";
import "./Menu.css";
import Button from "../Buttons";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo MyDevFlix" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
