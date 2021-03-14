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
  const classes = useStyles();
  const userLogIn = useSelector(state => state.authLogIn);
  let drawerOpen = useSelector(state => state.drawerOpen);
  const {userInfo} = userLogIn;

  console.log(drawerOpen);
  console.log(userInfo.isAdmin);

  return (
      <div>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            open={drawerOpen.drawerOpen}
            anchor={"left"}
            classes={{
              paper: classes.drawerPaper,
            }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            {userInfo.isAdmin === true && <>
              <List>
                <ListItem button key={"Dashboard"} component={Link} to={"/dashboard"}>
                  <ListItemIcon><DashboardIcon/></ListItemIcon>
                  <ListItemText primary={"Dashboard"}/>
                </ListItem>
              </List>
              <Divider/>
            </>
            }
            <List>
              <ListItem button key={"Electronics"} component={Link} to={"/electronics"}>
                <ListItemIcon><ImportantDevicesIcon/></ListItemIcon>
                <ListItemText primary={"Electronics"}/>
              </ListItem>
            </List>
            <Divider />
            {userInfo && <>
              <List>
                <ListItem button key={"Discount"} component={Link} to={"/vouchers"}>
                  <ListItemIcon><MoneyIcon/></ListItemIcon>
                  <ListItemText primary={"Vouchers"}/>
                  </ListItem>
              </List>
              <Divider/>
              </>
            }
          </div>
        </Drawer>
      </div>
  );
};

export default ClippedDrawer;