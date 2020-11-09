import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import api from './services/api';
import { Switch, Route, useHistory } from "react-router-dom";


import Dashboard from './pages/Dashboard';
import Login from './pages/Login';


function App() {
  const [allow, setAllow] = React.useState(false);
  const history = useHistory();


  React.useEffect(() => {
    api.post('/verify', {},
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('@engmat/token')
        }
      }
    ).then(res => {
      setAllow(true)
      history.push('/examples')
    }).catch(err => {
      console.log(err);
    });
  })

  console.log('oi')
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
