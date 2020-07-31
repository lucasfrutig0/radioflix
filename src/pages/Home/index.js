import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Menu from "../../components/Menu";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import repositoryCategories from "../../repositories/categories";

const AppWrapper = styled.div`
  background: var(--grayDark);
  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    repositoryCategories
      .getAllWithVideos()
      .then(async (categoriesWithVideos) => {
        await setInitialData(categoriesWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <AppWrapper>
      <Menu />

      {initialData.length === 0 && <div>Loading ...</div>}

      {initialData.map((category, idx) => {
        if (idx === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].title}
                url={initialData[0].videos[0].url}
                videoDescription={
                  "Recorded at Eurockéennes de Belfort, Lac du Malsaucy, Belfort, France"
                }
              />

              <Carousel ignoreFirstVideo category={initialData[0]} />
            </div>
          );
        }

        return <Carousel key={category.id} category={category} />;
      })}

      {/* <BannerMain
        videoTitle={dadosinicias.categorias[0].videos[0].titulo}
        url={dadosinicias.categorias[0].videos[0].url}
        videoDescription={
          "Recorded at Eurockéennes de Belfort, Lac du Malsaucy, Belfort, France"
        }
      />

      <Carousel ignoreFirstVideo category={dadosinicias.categorias[0]} />

      <Carousel category={dadosinicias.categorias[1]} />

      <Carousel category={dadosinicias.categorias[2]} />

      <Carousel category={dadosinicias.categorias[3]} />

      <Carousel category={dadosinicias.categorias[4]} />

      <Carousel category={dadosinicias.categorias[5]} /> */}

      <Footer></Footer>
    </AppWrapper>
  );
}

export default Home;
