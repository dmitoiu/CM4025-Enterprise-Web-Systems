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
import authController from "../controllers/authController";
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

const rguTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#660066",
    },
  },
});

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
    maxHeight: "507px"
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

function WelcomeCarousel(props)
{
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
  const classes = useStyles();
  const history = useHistory();
  const initialState = {username: "", password: ""};
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const userLogIn = useSelector(state => state.authLogIn);
  const {loading, error, userInfo} = userLogIn;

  const handleOnChange = (e) => {
    setFormData({ ... formData, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    if(userInfo){
      history.push("/")
    }
  }, [history, userInfo])

  const onLogInButton = async (event) => {
    event.preventDefault();
    await dispatch(logIn(formData.username, formData.password))
  }

  return (
      <ThemeProvider theme={rguTheme}>
        <div className={classes.root}>
          <CssBaseline />
          <WelcomeCarousel className={classes.carousel}/>
          <Card className={classes.paper}>
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
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
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