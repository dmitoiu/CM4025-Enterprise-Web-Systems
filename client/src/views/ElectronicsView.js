import React, {useEffect, useState} from 'react';
import {commerce} from "../lib/commerce";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Product from "../components/Product";

// Create local styles
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
  // Access styles
  const classes = useStyles();
  // Create products state
  const [products, setProducts] = useState([]);

  /**
   * Fetch products from API
   * @returns {Promise<void>}
   */
  const fetchProducts = async () => {
    // Get products
    const {data} = await commerce.products.list();
    // Update products state
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
      <div className={classes.root}>
        {/* Create page title */}
        <Typography variant={"h4"}>
          Electronics
        </Typography>
        {/* If there is data to show, continue... */}
        {products.length >= 1 ? <>
          {/* Create product item if the product it is in the electronics category */}
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