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
import {getVouchers} from "../actions/voucherActions";
import {useDispatch, useSelector} from "react-redux";

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

  return (
      <div>
        {/* If there is data to show, continue... */}
        {vouchersInfo &&
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
        }
      </div>
  );
};

export default DashboardView;