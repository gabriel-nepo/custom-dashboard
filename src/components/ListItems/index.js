import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ExampleIcon from '@material-ui/icons/Dashboard'
import MapIcon from '@material-ui/icons/Map';
import StudentsIcon from '@material-ui/icons/School'
import SchoolIcon from '@material-ui/icons/AccountBalance';
import ContractIcon from '@material-ui/icons/Description';
import UsersIcon from '@material-ui/icons/Group';
import ParametersIcon from '@material-ui/icons/Settings';
import DecisionMakingIcon from '@material-ui/icons/DesktopWindows';
import SrmIcon from '@material-ui/icons/Room';
import LogoutIcon from '@material-ui/icons/ExitToApp';

import {
  Link
} from "react-router-dom";

export const mainListItems = (
  <div>
    <Link style={{ textDecoration: "none", color: "inherit" }} to="/examples">
      <ListItem button onClick={() => console.log('click')}>
        <ListItemIcon>
          <ExampleIcon />
        </ListItemIcon>
        <ListItemText color={"black"} primary="Example" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: "none", color: "inherit" }} to="/simulations">
      <ListItem button onClick={() => console.log('click')}>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText color={"black"} primary="Simulations" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: "none", color: "inherit" }} to="/students">
      <ListItem button>
        <ListItemIcon>
          <StudentsIcon />
        </ListItemIcon>
        <ListItemText primary="Students" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: "none", color: "inherit" }} to="/schools">
      <ListItem button>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Schools" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: "none", color: "inherit" }} to="/contracts">
      <ListItem button>
        <ListItemIcon>
          <ContractIcon />
        </ListItemIcon>
        <ListItemText primary="Contracts" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: "none", color: "inherit" }} to="/users">
      <ListItem button>
        <ListItemIcon>
          <UsersIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: "none", color: "inherit" }} to="/parameter">
      <ListItem button>
        <ListItemIcon>
          <ParametersIcon />
        </ListItemIcon>
        <ListItemText primary="Parameters" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: "none", color: "inherit" }} to="/decision-making">
      <ListItem button>
        <ListItemIcon>
          <DecisionMakingIcon />
        </ListItemIcon>
        <ListItemText primary="Decision Making" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: "none", color: "inherit" }} to="/srm">
      <ListItem button>
        <ListItemIcon>
          <SrmIcon />
        </ListItemIcon>
        <ListItemText primary="SRM" />
      </ListItem>
    </Link>

    <Link style={{ textDecoration: "none", color: "inherit" }} to="/logout">
      <ListItem button>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Log out" />
      </ListItem>
    </Link>

  </div>
);

export const secondaryListItems = (
  <div>

  </div>
);