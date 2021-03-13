// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (voucherActions.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing components
import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        alignItems: "center"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const style = {
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    paddingBottom: 0,
    width: "100%",
    height: "64px"
}

const rguTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#660066",
        },
    },
});

const Footer = () => {
    const classes = useStyles();
    return (
        <div style={style}>
            <ThemeProvider theme={rguTheme}>
                <AppBar position={"bottom"} className={classes.appBar}>
                    <Toolbar>
                        <Typography>
                            Copyright &copy; 2021 RGU eShop. All rights reserved.
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    );
};

export default Footer;