import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import ListItemText from "@material-ui/core/ListItemText";
import NewReleases from "@material-ui/icons/NewReleases";
import Divider from "@material-ui/core/Divider";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import MovieIcon from "@material-ui/icons/Movie";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

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
  return (
      <div>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <ListItem button key={"Home"} component={Link} to={"/"}>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary={"Home"}/>
              </ListItem>
              <ListItem button key={"New Releases"}>
                <ListItemIcon><NewReleases/></ListItemIcon>
                <ListItemText primary={"New Releases"}/>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button key={"Electronics"}>
                <ListItemIcon><ImportantDevicesIcon/></ListItemIcon>
                <ListItemText primary={"Electronics"}/>
              </ListItem>
              <ListItem button key={"Books"}>
                <ListItemIcon><LibraryBooksIcon/></ListItemIcon>
                <ListItemText primary={"Books"}/>
              </ListItem>
              <ListItem button key={"Films, TV & Music"}>
                <ListItemIcon><MovieIcon/></ListItemIcon>
                <ListItemText primary={"Films, TV & Music"}/>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
  );
};

export default ClippedDrawer;