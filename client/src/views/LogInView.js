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

const rguTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#660066",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "40px"
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
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <div>
            {error ?
                <div className={classes.root}>
                  <Alert variant="filled" severity="error">
                    Username or Password is incorrect.
                  </Alert>
                </div>
                :
              <Typography variant={"h5"}>
              </Typography>
            }
          </div>
          <Card className={classes.paper}>
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
        </Container>
      </ThemeProvider>
  );
};

export default LogInView;