// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (voucherActions.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing components
import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import {Link, useHistory} from "react-router-dom";
import auth from "../helpers/authHelper";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../actions/authActions";
import {selectDrawerClose, selectDrawerOpen} from "../actions/drawerActions";

// Create local style
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
      width: "40px",
      height: "40px"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginLeft: "10px",
        textDecoration: "none",
        color: "inherit"
    },
}));

// Create theme
const rguTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#660066",
        },
    },
});

const Header = () => {
  // Access styles
  const classes = useStyles();
  // Create history
  const history = useHistory();
  // Get user data from redux store
  const userLogIn = useSelector(state => state.authLogIn);
  // Get drawer state from redux store
  const drawerOpen = useSelector(state => state.drawerOpen);
  // Get user data
  const {userInfo} = userLogIn;
  // Get drawer current state
  let open = drawerOpen.drawerOpen;
  // Create dispatcher
  const dispatch = useDispatch();

  /**
   * On log out button
   */
  const onLogOutButton = () => {
    dispatch(logOut());
    console.log("Log out");
  }

  /**
   * Initial render operations
   */
  useEffect(() => {
    if(!userInfo){
      // if the user is not logged in, send the user to login page
      history.push("/login")
    }
  }, [history, userInfo])

  /**
   * Open Drawer operation
   */
  const handleDrawerOpen = () => {
    dispatch(selectDrawerOpen(true));
    open = true;
  }

  /**
   * Close drawer operation
   */
  const handleDrawerClose = () => {
    dispatch(selectDrawerClose(false))
    open = false;
  }

  /**
   * Toggle drawer
   */
  const toggleDrawer = () => {
    if(!open){
      handleDrawerOpen();
    } else {
      handleDrawerClose();
    }
  }

  return (
        <div>
            {/* Theme container */}
            <ThemeProvider theme={rguTheme}>
              {/* Create app bar */}
                <AppBar position="fixed" className={classes.appBar}>
                  {/* Create tool bar */}
                    <Toolbar>
                      {/* if user is logged in, show drawer button */}
                      {userInfo &&
                          <IconButton edge="start" onClick={toggleDrawer} className={classes.menuButton}
                                      color="inherit" aria-label="menu">
                            <MenuIcon />
                          </IconButton>
                      }
                        {/* Create link towards home path for the logo */}
                        <Link to={"/"}>
                            <img src={"/images/logo.png"} alt={"logo"} className={classes.logo}/>
                        </Link>
                        {/* Create app name */}
                        <Typography variant="h6" className={classes.title}>
                            RGU eShop
                        </Typography>
                        {/* Create cart button */}
                        <Button startIcon={<ShoppingCartIcon/>} component={Link} to={"/cart"}
                                color="inherit">Cart</Button>
                        {/* If user is not logged in show log in button, else show log out */}
                        {!userInfo ? (
                            <Button startIcon={<PersonIcon/>} component={Link} to={"/login"}
                                    color="inherit">Login</Button>
                        ) :
                            <Button startIcon={<PersonIcon/>} onClick={onLogOutButton}
                                    color="inherit">Log out</Button>
                        }
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    );
};

export default Header;