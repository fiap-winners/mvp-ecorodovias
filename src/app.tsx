import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppMenu from "./app-menu";
import HomePage from "./home-page";
import BasesPage from "./bases-page";
import OccurrencesPage from "./occurrences-page";

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
              <HomePage />
            </Route>
            <Route path="/bases-de-atendimento/:baseId">
              <BasesPage />
            </Route>
            <Route path="/ocorrencias">
              <OccurrencesPage />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
