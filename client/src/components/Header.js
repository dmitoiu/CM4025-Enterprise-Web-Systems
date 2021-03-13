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

const rguTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#660066",
        },
    },
});

const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const userLogIn = useSelector(state => state.authLogIn);
    const drawerOpen = useSelector(state => state.drawerOpen);
    const {userInfo} = userLogIn;
    let open = drawerOpen.drawerOpen;
    const dispatch = useDispatch();

  const onLogOutButton = () => {
    dispatch(logOut());
    console.log("Log out");
  }

  useEffect(() => {
    if(!userInfo){
      history.push("/login")
    }
  }, [history, userInfo])

  const handleDrawerOpen = () => {
    dispatch(selectDrawerOpen(true));
    open = true;
  }

  const handleDrawerClose = () => {
    dispatch(selectDrawerClose(false))
    open = false;
  }

  const toggleDrawer = () => {
    if(!open){
      handleDrawerOpen();
    } else {
      handleDrawerClose();
    }
  }

  return (
        <div>
            <ThemeProvider theme={rguTheme}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                      {userInfo &&
                          <IconButton edge="start" onClick={toggleDrawer} className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                          </IconButton>
                      }
                        <Link to={"/"}>
                            <img src={"/images/logo.png"} alt={"logo"} className={classes.logo}/>
                        </Link>
                        <Typography variant="h6" className={classes.title}>
                            RGU eShop
                        </Typography>
                        <Button startIcon={<ShoppingCartIcon/>} component={Link} to={"/cart"} color="inherit">Cart</Button>
                        {!userInfo ? (
                            <Button startIcon={<PersonIcon/>} component={Link} to={"/login"} color="inherit">Login</Button>
                        ) :
                            <Button startIcon={<PersonIcon/>} onClick={onLogOutButton} color="inherit">Log out</Button>
                        }
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    );
};

export default Header;