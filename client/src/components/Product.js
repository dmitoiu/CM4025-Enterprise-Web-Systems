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

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
        <ThemeProvider theme={rguTheme}>
          <Card className={classes.root}>
            <Link to={`/product/${product._id}`}>
              <CardMedia
                  className={classes.media}
                  image={product.image}
                  title={product.name}
              />
            </Link>
            <CardContent>
              <Link to={`/product/${product._id}`}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {product.name}
                </Typography>
              </Link>
              <Typography variant="h5" component="h2">
                £{product.price}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Stock: {product.stock}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant={"contained"} color={"primary"} component={Link}
                      to={`/product/${product._id}`} size="small">Learn More</Button>
            </CardActions>
          </Card>
        </ThemeProvider>
      </div>
  );
};

export default Product;