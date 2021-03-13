// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (App.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

import React, {useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { makeStyles } from '@material-ui/core/styles';
import ClippedDrawer from "./components/ClippedDrawer";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from "@material-ui/icons/Home";
import NewReleases from "@material-ui/icons/NewReleases";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MovieIcon from "@material-ui/icons/Movie";
import HomeView from "./views/HomeView";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProductView from "./views/ProductView";
import LogInView from "./views/LogInView";
import RegisterView from "./views/RegisterView";
import VoucherView from "./views/VoucherView";
import PrivateRoute from "./components/PrivateRoute";
import auth from "./helpers/authHelper";
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {selectDrawerClose, selectDrawerOpen} from "./actions/drawerActions";
import DashboardView from "./views/DashboardView";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
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
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
}));

const App = () => {
  const classes = useStyles();
  const drawerOpen = useSelector(state => state.drawerOpen);
  const userLogIn = useSelector(state => state.authLogIn);
  const {loading, error, userInfo} = userLogIn;
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    dispatch(selectDrawerOpen(true));
  }

  const handleDrawerClose = () => {
    dispatch(selectDrawerClose(false))
  }

  useEffect(() => {
    if(!userInfo){
      handleDrawerOpen();
    }
  }, [userInfo])

  return (
      <div className={classes.root}>
        <Router>
          <CssBaseline />
          <Header/>
          {userInfo &&
              <ClippedDrawer/>
          }
          <main className={clsx(classes.content, {
                [classes.contentShift]: drawerOpen.drawerOpen,})}
          >
            <Toolbar />
            <Route path="/" component={HomeView} exact/>
            <Route path="/login" component={LogInView} exact/>
            <Route path="/register" component={RegisterView} exact/>
            <Route path="/product/:id" component={ProductView}/>
            <PrivateRoute path="/vouchers" component={VoucherView}/>
            <PrivateRoute path="/dashboard" component={DashboardView}/>
          </main>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
