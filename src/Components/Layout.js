import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
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
        buttonName="Inicia Sesión"
      />

      {props.children}

      <Footer />
    </>
  );
}

export default Layout;
