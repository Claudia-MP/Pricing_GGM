import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1> GGM </h1>
      <p> Bienvenido a la mejor tienda del mundo !!! </p>

      <button className="btn btn-ligth">
        <Link to="/pricing"> Entrar </Link>
      </button>
    </div>
  );
}

export default Home;
