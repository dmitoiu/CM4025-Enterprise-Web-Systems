// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (Product.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing components
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";

// Create local style
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: "400px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundSize: "100%"
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
});

// Create theme
const rguTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#660066",
    },
  },
});

/**
 * Product Card
 * @param product
 * @returns {*}
 * @constructor
 * Reference: https://github.com/bradtraversy/proshop_mern/blob/master/frontend/src/components/Product.js
 * Inspired from the reference above, yet different in approach (material-ui vs bootstrap)
 */
const Product = ({product}) => {
  const classes = useStyles();
  return (
      <div>
        {/* Create theme container */}
        <ThemeProvider theme={rguTheme}>
          {/* If there is a product, continue... */}
          {product && <>
            {/* Create card */}
            <Card className={classes.root}>
              {/* Create link for the image towards the product id */}
              <Link to={`/product/${product.id}`}>
                <CardMedia
                    className={classes.media}
                    image={product.media.source}
                    title={product.name}
                />
              </Link>
              {/* Create card content */}
              <CardContent>
                {/* Create link from the product name towards the product id */}
                <Link to={`/product/${product.id}`}>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {product.name}
                  </Typography>
                </Link>
                {/* Create product price */}
                <Typography variant="h5" component="h2">
                  £{product.price.raw}
                </Typography>
                {/* Create product stock */}
                <Typography className={classes.pos} color="textSecondary">
                  Stock: {product.inventory.available}
                </Typography>
              </CardContent>
              {/* Create card actions section */}
              <CardActions>
                {/* Create learn more button */}
                <Button variant={"contained"} color={"primary"} component={Link}
                        to={`/product/${product.id}`} size="small">Learn More</Button>
              </CardActions>
            </Card>
          </>
          }
        </ThemeProvider>
      </div>
  );
};

export default Product;