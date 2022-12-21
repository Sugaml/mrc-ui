import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../action/auth";
import { Navigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export const SignIn=() =>{
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const formik = useFormik({
    initialValues: {
      email:"",
      password:"",
    },
    validationSchema: Yup.object({
      email: Yup.string().email('invalid email address').required("required email address"),
      password: Yup.string().max(20, "must be 20 character or less").required("required password"),
    }),

    onSubmit: () => {
      const dataLoginRequest = {
        "username":formik.values.email,
        "password":formik.values.password,
      }
      console.log(dataLoginRequest)
      dispatch(auth( dataLoginRequest));
    }
  });

if (isAuthenticated) return <Navigate to="/home" />;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Email
                </Typography>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  fullWidth
                  error={formik.touched.email && formik.errors.email ? true : false}
                  autoComplete="given-name"
                  variant="outlined"
                  helperText={formik.errors.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Password
                </Typography>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="password"
                  value={formik.values.password}
                  fullWidth
                  error={formik.touched.password && formik.errors.password ? true : false}
                  autoComplete="given-name"
                  variant="outlined"
                  helperText={formik.errors.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={6}>
              <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            </Grid>
            <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot_password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
              </Grid>
          </form>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}