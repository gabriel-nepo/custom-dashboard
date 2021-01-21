import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import RoomAdminIcon from '@material-ui/icons/Dashboard'
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
    <Link style={{ textDecoration: "none", color: "inherit" }} to="/RoomAdmins">
      <ListItem button onClick={() => console.log('click')}>
        <ListItemIcon>
          <RoomAdminIcon />
        </ListItemIcon>
        <ListItemText color={"black"} primary="Salas" />
      </ListItem>
    </Link>

  

  </div>
);

export const secondaryListItems = (
  <div>

  </div>
);