import React from 'react';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import products from "../constants/products";
import {makeStyles} from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
  const product = products.find((p) => p._id === match.params.id);
  return (
      <div>
        <ThemeProvider theme={rguTheme}>
          <Button startIcon={<ArrowBackIcon/>} variant="contained" component={Link} to={"/"} color="primary">
            Go Back
          </Button>
          <Grid container className={classes.root} spacing={5}>
            <Grid item md={5} xs={12}>
              <br/>
              <CardMedia image={product.image} alt={product.name} className={classes.media}/>
            </Grid>
            <Grid item md={4}>
              <br/>
              <Typography variant={"h5"}>
                {product.name}
              </Typography>
              <Typography variant={"paragraph"}>
                Price: £{product.price}
              </Typography>
            </Grid>
            <Grid direction={"column"} align={"center"} justify={"center"} item md={3}>
              <br/>
              <Card className={classes.card}>
                <Typography variant={"h5"}>
                  Price: £{product.price}
                </Typography>
                <Divider/>
                <Typography variant={"h5"}>
                  Status: {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </Typography>
                <Divider/>
                <Button variant="contained" color="primary" className={classes.button} disabled={product.stock === 0}>
                  Add to Cart
                </Button>
              </Card>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
  );
};

export default ProductView;