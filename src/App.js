import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Routes from './components/PrivateRoute/routes';


function App() {
  return (
    <React.StrictMode>
      <Routes></Routes>
    </React.StrictMode>
  );
}


export default App;
