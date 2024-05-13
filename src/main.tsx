import React from "react";
import ReactDOM from "react-dom/client";
import { Router, Route, Switch } from "wouter";

import App from "@components/app/App";
import HomePageComponent from "@components/homepage/Homepage";
import DashboardComponent from "@components/agrovar/Dashboard";
import DefaultErrorComponent from "@components/error/Defaults";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App>
      <Router base="">
        <Switch>
          <Route path="/">
            <HomePageComponent />
          </Route>
          <Route path="/app">
            <DashboardComponent />
          </Route>
          <Route path="*">
            <DefaultErrorComponent />
          </Route>
        </Switch>
      </Router>
    </App>
  </React.StrictMode>
);
