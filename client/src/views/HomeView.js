// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (HomeView.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing components
import React, {useEffect, useState} from 'react';
import Product from "../components/Product";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {commerce} from "../lib/commerce";

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
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  console.log(products);

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