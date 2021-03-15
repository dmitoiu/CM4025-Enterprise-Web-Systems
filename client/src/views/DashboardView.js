// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (DashboardView.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing components
import React, {useEffect} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import withStyles from "@material-ui/core/styles/withStyles";
import TableCell from "@material-ui/core/TableCell";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {getVouchers, resetVoucherInterest} from "../actions/voucherActions";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";

// Create rgu theme
const rguTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#660066",
    },
  },
});

// Create table cell style
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#660066",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

// Create table row style
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// Create table style
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  reset: {
    width: 150,
    top: "20px",
    padding: "10px",
    float: "right"
  }
});

const DashboardView = () => {
  // Access styles
  const classes = useStyles();
  // Create dispatcher
  const dispatch = useDispatch();
  // Get voucher state
  const voucherData = useSelector(state => state.voucherData);
  // Get voucher data
  const {vouchersInfo} = voucherData;

  useEffect(() => {
    // Load voucher data
    dispatch(getVouchers())
  }, [dispatch])

  /**
   * Reset vouchers interest count
   */
  const resetVouchers = async () => {
    await dispatch(resetVoucherInterest("20%"));
    await dispatch(resetVoucherInterest("£20"));
  }

  /**
   * Reset button action
   */
  const onResetButton = async () => {
    await resetVouchers();
    dispatch(getVouchers())
  }

  return (
      <div>
        <ThemeProvider theme={rguTheme}>
          {/* If there is data to show, continue... */}
          {vouchersInfo && <>
            <TableContainer component={Paper}>
              {/* Create table */}
              <Table className={classes.table} aria-label="customized table">
                {/* Create table head */}
                <TableHead>
                  {/* Create table row */}
                  <TableRow>
                    {/* Create table styled cell */}
                    <StyledTableCell>Voucher</StyledTableCell>
                    {/* Create table styled cell */}
                    <StyledTableCell align="right">Interest Count</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Iterate over the vouchers data */}
                  {vouchersInfo.map((row) => (
                      {/* Create row */} &&
                      <StyledTableRow key={row.name}>
                        {/* Create table cell for voucher name */}
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        {/* Create table cell for voucher interest */}
                        <StyledTableCell align="right">{row.interest}</StyledTableCell>
                      </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.reset}
                onClick={onResetButton}
            >
              Reset
            </Button>
          </>
          }
        </ThemeProvider>
      </div>
  );
};

export default DashboardView;