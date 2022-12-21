import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../action/signup";
import { useFormik } from "formik";

import * as Yup from 'yup';


const theme = createTheme();

export const SignUp = () => {
  const dispatch = useDispatch();
  const isSignup = useSelector((state) => state.signup.isSignup);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email:"",
      password:"",
      gender:"",
      role:"",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().max(20, "must be 20 character or less").required("required first name"),
      lastname: Yup.string().max(20, "must be 20 character or less").required("required last name"),
      email: Yup.string().email('invalid email address').required("required  email address"),
      password: Yup.string().max(20, "must be 20 character or less").required("required password"),
      gender: Yup.string().required("please select gender"),
      role: Yup.string().required("please select gender"),
    }),

    onSubmit: () => {
      const signupRequestData = {
        "firstname": formik.values.firstname,
        "lastname": formik.values.lastname,
        "email":formik.values.email,
        "password":formik.values.password,
        "username":formik.values.email,
        "gender":formik.values.gender,
        "role":formik.values.role,
      }
      console.log(signupRequestData)
      dispatch(signUp(signupRequestData));
    }
  });
  if (isSignup) return <Navigate to="/" />;
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box sx={{ mt: 1 }}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  First Name
                </Typography>
                <TextField
                  required
                  id="firstname"
                  name="firstname"
                  label="First Name"
                  value={formik.values.firstname}
                  fullWidth
                  error={formik.touched.firstname && formik.errors.firstname ? true : false}
                  autoComplete="given-name"
                  variant="outlined"
                  helperText={formik.errors.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  Last Name
                </Typography>
                <TextField
                  required
                  id="lastname"
                  name="lastname"
                  label="Last Name"
                  value={formik.values.lastname}
                  fullWidth
                  error={formik.touched.lastname && formik.errors.lastname ? true : false}
                  autoComplete="given-name"
                  variant="outlined"
                  helperText={formik.errors.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Grid>
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
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" gutterBottom>
                  Gender
                </Typography>
                <FormControl fullWidth sx={{ m: 0 }} size="large">
                  <InputLabel id="demo-select-small">Gender</InputLabel>
                  <Select
                    labelId="gender"
                    id="gender"
                    name="gender"
                    value={formik.values.gender}
                    label="Select Gender"
                    onChange={formik.handleChange}
                    error={formik.touched.gender && formik.errors.gender ? true : false}
                    onBlur={formik.handleBlur}
                  >
                    <MenuItem value="select">
                      <em>Select Gender</em>
                    </MenuItem>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Others"}>Others</MenuItem>
                  </Select>
                  {formik.touched.gender && formik.errors.gender ? <p style={{ color: '#d32f2f', fontWeight: '400', fontSize: '0.75rem' }}>{formik.errors.gender}</p> : null}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" gutterBottom>
                  Role
                </Typography>
                <FormControl fullWidth sx={{ m: 0 }} size="large">
                  <InputLabel id="demo-select-small">Role</InputLabel>
                  <Select
                    labelId="role"
                    id="role"
                    name="role"
                    value={formik.values.role}
                    label="Select role"
                    onChange={formik.handleChange}
                    error={formik.touched.role && formik.errors.role ? true : false}
                    onBlur={formik.handleBlur}
                  >
                    <MenuItem value="select">
                      <em>Select Role</em>
                    </MenuItem>
                    <MenuItem value={"Guest"}>Guest</MenuItem>
                    <MenuItem value={"Student"}>Student</MenuItem>
                    <MenuItem value={"Teacher"}>Teacher</MenuItem>
                  </Select>
                  {formik.touched.gender && formik.errors.gender ? <p style={{ color: '#d32f2f', fontWeight: '400', fontSize: '0.75rem' }}>{formik.errors.gender}</p> : null}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I accept the terms of use."
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </form>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
