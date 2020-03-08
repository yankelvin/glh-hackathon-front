import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import { Home } from "./pages/Home/Home";
import { Chat } from "./pages/Chat/Chat";

export function Routes() {
  return (
    <Route>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </Route>
  );
}
