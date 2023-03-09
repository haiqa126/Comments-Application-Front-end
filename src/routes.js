import React from "react";
import App from "./App";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/add" component={App} />
    <Route exact path="/create" component={App} />
    <Route exact path="/checkuser" component={App} />
  </BrowserRouter>
);

export default Routes;
