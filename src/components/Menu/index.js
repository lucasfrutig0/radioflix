import React from "react";

import Logo from "../../assets/images/logo.png";
import { LogoImage, MenuWrapper } from "./style.js";
import Button from "../Button";

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <a href="/">
        <LogoImage src={Logo} alt="Logo RadioFlix" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
