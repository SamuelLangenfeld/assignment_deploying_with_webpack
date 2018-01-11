import React from "react";
import AnimeListContainer from "../containers/AnimeListContainer";
import AnimeContainer from "../containers/AnimeContainer";
import dual from "../dual_monitors.jpg";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <img src={dual} />
        <Switch>
          <Route exact path="/" component={AnimeListContainer} />
          <Route path="/anime/:id" component={AnimeContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
