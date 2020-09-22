import React from "react";
import Header from "../Components/Header";
import Content from "../Components/Content";
import Cards from "../Components/Cards";
import { dataPricing } from "../utils/mocks/dataPricing";
import Footer from "../Components/Footer";

function Princing() {
  return (
    <>
      <Content
        title="Precios"
        description="Los mejores precios del mercado para comprar gatitos"
      />
      <Cards data={dataPricing} />
    </>
  );
}

export default Princing;
