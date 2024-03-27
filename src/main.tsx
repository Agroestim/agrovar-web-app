import React from "react";
import ReactDOM from "react-dom/client";
import { Router, Route, Switch } from "wouter";

import AppComponent from "./components/app/App";
import DefaultErrorComponent from "./components/error/Defaults";
import WrapperComponent from "@components/common/Wrapper";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WrapperComponent>
      <Router>
        <Switch>
          <Route path="/" component={AppComponent}></Route>
          <Route path="*" component={DefaultErrorComponent}></Route>
        </Switch>
      </Router>
    </WrapperComponent>
  </React.StrictMode>
);
