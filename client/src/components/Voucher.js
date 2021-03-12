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

const rguTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#660066",
    },
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Voucher = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateVoucherPercent = () => {
    props.onPercentVoucher();
    handleClickOpen();
  }

  const updateVoucherCurrency = () => {
    props.onCurrencyVoucher();
    handleClickOpen();
  }

  return (
      <div>
        <ThemeProvider theme={rguTheme}>
          <Card className={classes.root} variant="outlined">
            <div className={classes.details}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  SALE
                </Typography>
                <Typography variant="h5" component="h2">
                  {props.discount}
                </Typography>
              </CardContent>
            </div>
            <CardActions className={classes.actions}>
              {props.discount.match("20%") ?
              <Button variant={"contained"} onClick={updateVoucherPercent} color={"primary"} size="small">Get Deal</Button>
                  :
              <Button variant={"contained"} onClick={updateVoucherCurrency} color={"primary"} size="small">Get Deal</Button>
              }
            </CardActions>
          </Card>
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
            <DialogTitle id="alert-dialog-slide-title">{"Voucher"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Code: {props.code}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
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