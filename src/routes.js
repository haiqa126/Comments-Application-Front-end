import React from "react";
import App from "./App";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";

const Routes = () => (
  <Routes>
    <Route exact path="/add" component={App} />
    <Route exact path="/create" component={App} />
    <Route exact path="/checkuser" component={App} />
    <Route exact path="/Homepage" component={Homepage} />
  </Routes>
);

export default Routes;
