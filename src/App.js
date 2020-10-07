import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { Switch, Route } from "react-router-dom";


import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route path="/examples">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </Router>

    </React.StrictMode>
  );
}


export default App;
