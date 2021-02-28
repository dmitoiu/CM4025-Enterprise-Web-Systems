import React from 'react';
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
import { Link } from "react-router-dom";

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
    return (
        <div>
            <ThemeProvider theme={rguTheme}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Link to={"/"}>
                            <img src={"/images/logo.png"} alt={"logo"} className={classes.logo}/>
                        </Link>
                        <Typography variant="h6" component={Link} to={"/"} className={classes.title}>
                            RGU-Shop
                        </Typography>
                        <Button startIcon={<PersonIcon/>} component={Link} to={"/login"} color="inherit">Login</Button>
                        <Button startIcon={<ShoppingCartIcon/>} component={Link} to={"/cart"} color="inherit">Cart</Button>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    );
};

export default Header;