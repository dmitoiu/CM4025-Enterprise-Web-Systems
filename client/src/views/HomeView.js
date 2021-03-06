import React from 'react';
import products from "../constants/products";
import Product from "../components/Product";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  product: {
    height: "100%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const HomeView = () => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Typography variant={"h4"}>
          Best Sellers
        </Typography>
        <Grid className={classes.product} container spacing={3}>
          {products.map((product) => (
            <Grid item md={3} xs={12}>
              <Product product={product}/>
            </Grid>
          ))}
        </Grid>
      </div>
  );
};

export default HomeView;