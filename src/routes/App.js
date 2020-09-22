import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Pricing from "../Pages/Pricing";
import { NotFound } from "../Pages/NotFound";
import Layout from "../Components/Layout";

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Pricing" component={Pricing} />
        <Route component={NotFound} />
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
