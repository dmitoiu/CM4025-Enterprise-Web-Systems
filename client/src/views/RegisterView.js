import React, {useEffect, useState} from 'react';
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
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../actions/authActions";
import validator from "validator";

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

const RegisterView = () => {
  const classes = useStyles();
  const history = useHistory();

  // Declare and assign values for initial state
  const initialState = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  // Declare and assign values for error state
  const errorState = {
    nameError: false,
    usernameError: false,
    emailError: false,
    passwordError: false,
    confirmPasswordError: false
  };

  // Declare and assign values for error state message values
  const errorStateValues = {
    nameError: "",
    usernameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: ""
  }

  // Create state modifiers
  const [formData, setFormData] = useState(initialState);
  const [errorData, setErrorData] = useState(errorState);
  const [errorDataValues, setErrorDataValues] = useState(errorStateValues);

  // Create Redux dispatch
  const dispatch = useDispatch();
  // Get register state reducer using the redux selector
  const userRegister = useSelector(state => state.authRegister);
  const {loading, error, userInfo} = userRegister;

  const handleOnChange = (e) => {
    setFormData({ ... formData, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    if(userInfo){
      history.push("/")
    }
  }, [history, userInfo])

  /**
   * Field Error
   * @param fieldName
   * @param message
   * Reference: https://github.com/CM2104-DynamicWebDevelopment/
   *            cm2104-group-web-app-unt/blob/master/final/public
   *            /js/main.js
   * Adapted from previous work to fit React
   */
  const errorField = (fieldName, message) => {
    setErrorData({[fieldName]: true});
    setErrorDataValues({[fieldName]: message})
  }

  /**
   * Field Success
   * @param fieldName
   * Reference: https://github.com/CM2104-DynamicWebDevelopment/
   *            cm2104-group-web-app-unt/blob/master/final/public
   *            /js/main.js
   * Adapted from previous work to fit React
   */
  const successField = (fieldName) => {
    setErrorData({[fieldName]: false});
    setErrorDataValues({[fieldName]: ""})
  }

  const onRegisterButton = async (event) => {
    event.preventDefault();
    if(!formData.name) {
      errorField("nameError", "Please enter your full name.");
    } else {
      successField("nameError");
      if(!validator.isAlpha(formData.name)) {
        errorField("nameError", "Please enter alphabetical characters only.");
      }
    }
    console.log(errorData["nameError"])
    //await dispatch(register(formData.name, formData.username, formData.email, formData.password))
  }

  return (
      <ThemeProvider theme={rguTheme}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Card className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <form className={classes.form} noValidate onSubmit={onRegisterButton}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                      autoComplete="fname"
                      name="name"
                      error={errorData.nameError}
                      helperText={errorDataValues.nameError}
                      variant="outlined"
                      required
                      fullWidth
                      size={"small"}
                      id="name"
                      label="Full Name"
                      onChange={handleOnChange}
                      autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      size={"small"}
                      id="username"
                      label="Username"
                      name="username"
                      autoComplete="username"
                      onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      size={"small"}
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      size={"small"}
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      size={"small"}
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      autoComplete="current-password"
                      onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12}>
                </Grid>
              </Grid>
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
              >
                Register
              </Button>
            </form>
          </Card>
        </Container>
      </ThemeProvider>
  );
};

export default RegisterView;