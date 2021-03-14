// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (ClippedDrawer.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing components
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HomeIcon from "@material-ui/icons/Home";
import ListItemText from "@material-ui/core/ListItemText";
import NewReleases from "@material-ui/icons/NewReleases";
import Divider from "@material-ui/core/Divider";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import MovieIcon from "@material-ui/icons/Movie";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import MoneyIcon from '@material-ui/icons/Money';
import {useDispatch, useSelector} from "react-redux";
import {selectDrawerClose, selectDrawerOpen} from "../actions/drawerActions";
import DashboardIcon from '@material-ui/icons/Dashboard';

const drawerWidth = 240;

// Create local styles
const useStyles = makeStyles((theme) => ({
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    height: 'calc(100% - 64px)',
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

const ClippedDrawer = () => {
  // Create styles
  const classes = useStyles();
  // Get user log in state
  const userLogIn = useSelector(state => state.authLogIn);
  // Create drawer
  let drawerOpen = useSelector(state => state.drawerOpen);
  // Get user data from redux state
  const {userInfo} = userLogIn;

  return (
      <div>
        {/* Create drawer */}
        <Drawer
            className={classes.drawer}
            variant="persistent"
            open={drawerOpen.drawerOpen}
            anchor={"left"}
            classes={{
              paper: classes.drawerPaper,
            }}
        >
          {/* Create toolbar */}
          <Toolbar />
          {/* Create drawer list container */}
          <div className={classes.drawerContainer}>
            {/* If the user is an admin, show dashboard */}
            {userInfo.isAdmin === true && <>
              {/* Create material-ui list */}
              <List>
                {/* Create material-ui list item which links to "/dashboard" path */}
                <ListItem button key={"Dashboard"} component={Link} to={"/dashboard"}>
                  {/* Create dashboard icon */}
                  <ListItemIcon><DashboardIcon/></ListItemIcon>
                  {/* Create item text */}
                  <ListItemText primary={"Dashboard"}/>
                </ListItem>
              </List>
              <Divider/>
            </>
            }
            {/* Create material-ui list */}
            <List>
              {/* Create material-ui list item which links to "/electronics" path */}
              <ListItem button key={"Electronics"} component={Link} to={"/"}>
                {/* Create electronic devices icon */}
                <ListItemIcon><ImportantDevicesIcon/></ListItemIcon>
                {/* Create item text */}
                <ListItemText primary={"Electronics"}/>
              </ListItem>
            </List>
            {/* Create divider for drawer items container */}
            <Divider />
            {/* If user is logged in show vouchers list item */}
            {userInfo && <>
              {/* Create material-ui list */}
              <List>
                {/* Create material-ui list item */}
                <ListItem button key={"Discount"} component={Link} to={"/vouchers"}>
                  {/* Create voucher icon */}
                  <ListItemIcon><MoneyIcon/></ListItemIcon>
                  {/* Create item text */}
                  <ListItemText primary={"Vouchers"}/>
                  </ListItem>
              </List>
              {/* Create divider */}
              <Divider/>
              </>
            }
          </div>
        </Drawer>
      </div>
  );
};

export default ClippedDrawer;