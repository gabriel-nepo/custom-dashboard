import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../services/isAuthenticated";
import Dashboard from "../../pages/Dashboard"
import Login from "../../pages/Login"



const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.status ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);

const Routes = () => {
  const [auth, setAuth] = React.useState(true)
  React.useEffect(() => {
    console.log(`oi`)
    async function fetchData() {
      setAuth(await isAuthenticated());
    }
    fetchData();
  });
  console.log(auth)
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login auth={setAuth} />
        </Route>
        <PrivateRoute status={auth} path="/RoomAdmins" component={Dashboard} />
        <PrivateRoute status={auth} path="/users" component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;