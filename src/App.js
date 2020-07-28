import React from "react";
import Menu from "./components/Menu";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

import dadosinicias from "./data/dados_iniciais.json";

function App() {
  return (
    <div style={{ backgroundColor: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosinicias.categorias[0].videos[0].titulo}
        url={dadosinicias.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End? Trabalhado na área"}
      />

      <Carousel ignoreFirstVideo category={dadosinicias.categorias[0]} />
      <Footer></Footer>
    </div>
  );
}

export default App;
