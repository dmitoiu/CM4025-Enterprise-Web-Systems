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
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";

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
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      autoComplete="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
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
              <Grid container justify="flex-end">
                <Grid item>
                  <Link className={classes.link} to="/login">
                    Already have an account? Log in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Container>
      </ThemeProvider>
  );
};

export default RegisterView;