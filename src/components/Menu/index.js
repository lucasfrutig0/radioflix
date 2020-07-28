import React from "react";

/* import ButtonLink from "./components/ButtonLink"; */

import Logo from "../../assets/images/logo.png";
import { LogoImage, MenuWrapper, ButtonLink } from "./style.js";

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <a href="/">
        <LogoImage src={Logo} alt="Logo RadioFlix" />
      </a>

      <ButtonLink as="a" className="ButtonLink" href="/">
        Novo vídeo
      </ButtonLink>
    </MenuWrapper>
  );
}

export default Menu;
