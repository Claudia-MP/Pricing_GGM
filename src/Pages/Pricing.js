import React from "react";
import Header from "../Components/Header";
import Content from "../Components/Content";
import Cards from "../Components/Cards";
import { dataPricing } from "../utils/mocks/dataPricing";
import Footer from "../Components/Footer";

function Princing() {
  return (
    <>
      <Header
        companyName="Gabriel García Márquez"
        navBar={[
          {
            name: "Facebook",
            url: "http://Facebook.com"
          },
          {
            name: "instagram",
            url: "http://instagram.com"
          },
          {
            name: "twitter",
            url: "http://twitter.com"
          },
          {
            name: "github",
            url: "http://github.com"
          }
        ]}
        buttonName="Registrate"
      />
      <Content
        title="Precios"
        description="Los mejores precios del mercado para comprar gatitos"
      />
      <Cards data={dataPricing} />
      <Footer />
    </>
  );
}

export default Princing;
