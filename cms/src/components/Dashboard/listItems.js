import React from 'react';
import {ListItem,ListItemIcon,ListItemText,ListSubheader} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import BallotSharpIcon from '@material-ui/icons/BallotSharp';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
// import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link} from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/create">
      <ListItemIcon>
        <CreateSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Create Invoice" />
    </ListItem>
    <ListItem button component={Link} to="/allInvoices">
      <ListItemIcon>
        <BallotSharpIcon />
      </ListItemIcon >
      <ListItemText primary="All Invoices" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    {/* <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);