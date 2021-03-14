// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (ProductView.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing components
import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {commerce} from "../lib/commerce";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  card: {
    width: "100%",
    height: "100%"
  },
  button: {
    marginTop: "20px",
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

const ProductView = ({match}) => {
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

  const product = products.find((p) => p.id === match.params.id);
  return (
      <div>
        <ThemeProvider theme={rguTheme}>
          {product ? <>
            <Button startIcon={<ArrowBackIcon/>} variant="contained" component={Link} to={"/"} color="primary">
              Go Back
            </Button>
            <Grid container className={classes.root} spacing={5}>
              <Grid item md={5} xs={12}>
                <br/>
                <CardMedia image={product.media.source} alt={product.name} className={classes.media}/>
              </Grid>
              <Grid item md={4}>
                <br/>
                <Typography variant={"h5"}>
                  {product.name}
                </Typography>
                <Typography variant={"h7"}>
                  {product.description.replace("<p>", "").replace("</p>", "")}
                </Typography>
                <br/>
              </Grid>
              <Grid direction={"column"} align={"center"} justify={"center"} item md={3}>
                <br/>
                <Card className={classes.card}>
                  <Typography variant={"h5"}>
                    Price: £{product.price.raw}
                  </Typography>
                  <Divider/>
                  <Typography variant={"h5"}>
                    Status: {product.inventory.available > 0 ? "In Stock" : "Out of Stock"}
                  </Typography>
                  <Divider/>
                  <Button variant="contained" color="primary" className={classes.button}
                          disabled={product.inventory.available === 0}>
                    Add to Cart
                  </Button>
                </Card>
              </Grid>
            </Grid>
          </>
          :
          <Typography variant={"h5"}>
            Connecting to Commerce.js API...
          </Typography>
          }
        </ThemeProvider>
      </div>
  );
};

export default ProductView;