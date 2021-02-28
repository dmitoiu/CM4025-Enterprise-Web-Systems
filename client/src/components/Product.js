import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

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

const Product = ({product}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
      <div>
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
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
  );
};

export default Product;