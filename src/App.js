import React from "react";
import styled from "styled-components";

import Menu from "./components/Menu";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

import dadosinicias from "./data/dados_iniciais.json";

const AppWrapper = styled.div`
  background: var(--grayDark);
`;

function App() {
  return (
    <AppWrapper style={{ backgroundColor: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosinicias.categorias[0].videos[0].titulo}
        url={dadosinicias.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End? Trabalhado na área"}
      />

      <Carousel ignoreFirstVideo category={dadosinicias.categorias[0]} />

      <Carousel category={dadosinicias.categorias[1]} />

      <Carousel category={dadosinicias.categorias[2]} />

      <Carousel category={dadosinicias.categorias[3]} />

      <Carousel category={dadosinicias.categorias[4]} />

      <Carousel category={dadosinicias.categorias[5]} />

      <Footer></Footer>
    </AppWrapper>
  );
}

export default App;
