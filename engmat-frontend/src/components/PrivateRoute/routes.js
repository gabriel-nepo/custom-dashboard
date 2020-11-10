import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../services/isAuthenticated";
import Dashboard from "../../pages/Dashboard"
import Login from "../../pages/Login"
import RequestItem from "../Request";
import Catalogue from "../Catalogue";
import Backlog from "../Backlog";
import Track from "../Track";
import Test from '../Test';



const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/examples" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;