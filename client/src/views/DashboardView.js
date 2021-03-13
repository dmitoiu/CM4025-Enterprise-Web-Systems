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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#660066",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, interest) {
  return { name, interest };
}

const rows = [
  createData('20% OFF', 359),
  createData('£20 OFF', 237),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const DashboardView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const voucherData = useSelector(state => state.voucherData);
  const {vouchersInfo} = voucherData;

  useEffect(() => {
    dispatch(getVouchers())
  }, [dispatch])

  return (
      <div>
        {vouchersInfo &&
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Voucher</StyledTableCell>
                <StyledTableCell align="right">Interest Count</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vouchersInfo.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
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