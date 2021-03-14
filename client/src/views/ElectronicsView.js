import React, {useEffect, useState} from 'react';
import {commerce} from "../lib/commerce";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import products from "../constants/products";
import Product from "../components/Product";

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

const ElectronicsView = () => {
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
          Electronics
        </Typography>
        {products.length >= 1 ? <>
          <Grid className={classes.product} container spacing={3}>
            {products.map((product) => {
              if(product.categories["0"].name.match("Electronics")) {
                return (
                    <Grid item xs={12} sm={8} md={6} lg={3}>
                          <Product product={product}/>
                    </Grid>
                )
              }
            })}
          </Grid>
          </>
          :
          <Typography variant={"h6"}>
            Connecting to Commerce.js API...
          </Typography>
        }
      </div>
  );
};

export default ElectronicsView;