import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Exchange from './Exchange';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/exchange" component={ Exchange } />
      </Switch>
    </div>
  );
}

export default App;
