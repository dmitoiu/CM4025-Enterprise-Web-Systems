// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (LogInView.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing components
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import auth from "../helpers/authHelper";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {logIn} from "../actions/authActions";
import Alert from '@material-ui/lab/Alert';
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import products from "../constants/products";
import CommerceCarousel from "../components/CommerceCarousel";

// Create rgu theme
const rguTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#660066",
    },
  },
});

// Create local styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%"
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "40px",
    maxHeight: "507px",
    width: "100%"
  },
  carousel: {
    width: "100%",
    height: "100%"
  },
  carouselPaper: {
    width: "100%",
    height: "507px",
    paddingTop: "0px",
    paddingBottom: "0px"
  },
  media: {
    height: 0,
    paddingTop: '52.25%', // 16:9
    backgroundSize: "100%"
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: rguTheme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

/**
 * Create Log in Carousel
 * @param props
 * @returns {*}
 * @constructor
 */
function WelcomeCarousel(props)
{
  // Access styles
  const classes = useStyles();
  var items = products;

  return (
      <Carousel className={classes.carousel} interval={5000}>
        {
          items.map( (item, i) => <Item key={i} item={item} /> )
        }
      </Carousel>
  )
}

/**
 * Carousel Item
 * @param props
 * @returns {*}
 * @constructor
 */
function Item(props)
{
  const classes = useStyles();
  return (
      <Paper className={classes.carouselPaper}>
        <CardMedia
            className={classes.media}
            image={props.item.image}
            title={props.item.name}
        />
      </Paper>
  )
}

const LogInView = () => {
  // Access styles
  const classes = useStyles();
  // Create history
  const history = useHistory();
  // Create initial state
  const initialState = {username: "", password: ""};
  // Create form data state
  const [formData, setFormData] = useState(initialState);
  // Create dispatcher
  const dispatch = useDispatch();
  // Get log in state
  const userLogIn = useSelector(state => state.authLogIn);
  // Get log in state data
  const {error, userInfo} = userLogIn;

  /**
   * Update form data state on form change
   * @param e
   */
  const handleOnChange = (e) => {
    setFormData({ ... formData, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    if(userInfo){
      // Send user to initial page if is logged in
      history.push("/")
    }
  }, [history, userInfo])

  /**
   * Log in the user
   * @param event
   * @returns {Promise<void>}
   */
  const onLogInButton = async (event) => {
    // Stop page refresh
    event.preventDefault();
    // Log in the user
    await dispatch(logIn(formData.username, formData.password))
  }

  return (
      <ThemeProvider theme={rguTheme}>
        {/* Create root container */}
        <div className={classes.root}>
          <CssBaseline />
          {/* Create welcome carousel */}
          <CommerceCarousel className={classes.carousel}/>
          {/* Create material-ui card */}
          <Card className={classes.paper}>
            {/* Create invalid user alert container */}
            <div style={{width: "100%"}}>
              {error ?
                  <div>
                    <Alert variant="filled" severity="error">
                      Username or Password is incorrect.
                    </Alert>
                  </div>
                  :
                  <Typography variant={"h5"}>
                  </Typography>
              }
            </div>
            {/* Create log in form image */}
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            {/* Create form title */}
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            {/* Create log in form */}
            <form className={classes.form} noValidate onSubmit={onLogInButton}>
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  size={"small"}
                  id="username"
                  label="Username"
                  name="username"
                  onChange={handleOnChange}
                  autoComplete="username"
                  autoFocus
              />
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  size={"small"}
                  name="password"
                  label="Password"
                  type="password"
                  onChange={handleOnChange}
                  id="password"
                  autoComplete="current-password"
              />
              <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
              />
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Link className={classes.link} to={"/register"}>
                    {"Don't have an account? Register"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Card>
        </div>
      </ThemeProvider>
  );
};

export default LogInView;