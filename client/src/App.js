import React from "react";
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
import DiscountView from "./views/DiscountView";

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
    },
}));

const App = () => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Router>
          <CssBaseline />
          <Header/>
          <ClippedDrawer/>
          <main className={classes.content}>
            <Toolbar />
            <Route path="/" component={HomeView} exact/>
            <Route path="/login" component={LogInView} exact/>
            <Route path="/register" component={RegisterView} exact/>
            <Route path="/product/:id" component={ProductView}/>
            <Route path="/discount" component={DiscountView}/>
          </main>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
