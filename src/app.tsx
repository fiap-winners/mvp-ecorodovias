import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppMenu from "./app-menu";
import BasePage from "./base/base-page";
import DashboardPage from "./dasboard/dashboard-page";
import OccurrencePage from "./occurrence/occurrence-page";

export default function App() {
  return (
    <div className="app">
      <Router>
        <header className="app__header">
          <AppMenu />
        </header>
        <main className="app__body">
          <Switch>
            <Route exact path="/">
              <DashboardPage />
            </Route>
            <Route path="/bases-de-atendimento/:baseId">
              <BasePage />
            </Route>
            <Route path="/ocorrencias">
              <OccurrencePage />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
