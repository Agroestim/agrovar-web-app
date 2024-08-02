import React from "react";
import ReactDOM from "react-dom/client";
import { Router, Route, Switch } from "wouter";

import "./index.scss";

import { DashboardPage } from "modules/agrovar/views/Dashboard";
import { HomePage } from "modules/homepage/pages/Homepage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/app" component={DashboardPage} />
      </Switch>
    </Router>
  </React.StrictMode>
);
