import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";

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

const Voucher = (props) => {
  const classes = useStyles();

  const updateVoucherPercent = () => {
    props.onPercentVoucher();
  }

  const updateVoucherCurrency = () => {
    props.onCurrencyVoucher();
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
        </ThemeProvider>
      </div>
  );
};

export default Voucher;