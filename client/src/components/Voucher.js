// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (Voucher.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing components
import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import DialogContent from "@material-ui/core/DialogContent";

// Create local style
const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
    height: "25%"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: "100%"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  actions: {
    justifyContent: "center",
    alignItems: "center",
    width: "150px"
  }
});

// Create theme
const rguTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#660066",
    },
  },
});

// Create slide transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Voucher = (props) => {
  // Access styles
  const classes = useStyles();
  // Create open dialog state
  const [open, setOpen] = React.useState(false);

  /**
   * Open voucher dialog
   */
  const handleClickOpen = () => {
    setOpen(true);
  };

  /**
   * Close voucher dialog
   */
  const handleClose = () => {
    setOpen(false);
  };

  /**
   * Increase voucher containing the percent indicator
   */
  const updateVoucherPercent = () => {
    props.onPercentVoucher();
    handleClickOpen();
  }

  /**
   * Increase voucher containing the currency indicator
   */
  const updateVoucherCurrency = () => {
    props.onCurrencyVoucher();
    handleClickOpen();
  }

  return (
      <div>
        {/* Create theme container */}
        <ThemeProvider theme={rguTheme}>
          {/* Create material-ui card */}
          <Card className={classes.root} variant="outlined">
            {/* Create voucher details container */}
            <div className={classes.details}>
              {/* Create card content */}
              <CardContent>
                {/* Create sale text */}
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  SALE
                </Typography>
                {/* Create discount text */}
                <Typography variant="h5" component="h2">
                  {props.discount}
                </Typography>
              </CardContent>
            </div>
            {/* Create card actions */}
            <CardActions className={classes.actions}>
              {/* Create the right button based on the voucher name */}
              {props.discount.match("20%") ?
              <Button variant={"contained"} onClick={updateVoucherPercent} color={"primary"} size="small">Get Deal</Button>
                  :
              <Button variant={"contained"} onClick={updateVoucherCurrency} color={"primary"} size="small">Get Deal</Button>
              }
            </CardActions>
          </Card>
          {/* Create dialog */}
          <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              fullWidth
              maxWidth={"md"}
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
          >
            {/* Create dialog title */}
            <DialogTitle id="alert-dialog-slide-title">{"Voucher"}</DialogTitle>
            {/* Create dialog content */}
            <DialogContent>
              {/* Create dialog text */}
              <DialogContentText id="alert-dialog-slide-description">
                Code: {props.code}
              </DialogContentText>
            </DialogContent>
            {/* Create dialog actions */}
            <DialogActions>
              {/* Create button to close dialog */}
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </ThemeProvider>
      </div>
  );
};

export default Voucher;