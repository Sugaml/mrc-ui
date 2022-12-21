import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {  useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import * as Yup from 'yup';
import { resetPasswordAction } from '../action/reset_password';

const theme = createTheme();


export const ResetPassword = () => {
  const params = useParams();
  const dispatch = useDispatch();

  console.log(params);
  const formik = useFormik({
    initialValues: {
      npwd: "",
      cpwd: "",
    },
    validationSchema: Yup.object({
      npwd: Yup.string().max(20, "must be 20 character or less").required("required new password"),
      cpwd: Yup.string().max(20, "must be 20 character or less").required("required confirm password"),
    }),

    onSubmit: () => {
      const resetPasswordData = {
        "token":params.id,
        "new_password": formik.values.npwd,
        "retype_password": formik.values.cpwd,
      }
      console.log(resetPasswordData)
      dispatch(resetPasswordAction(resetPasswordData))
    }
  });


  return (
    <div>
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
              Reset Password
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    New Password
                  </Typography>
                  <TextField
                    required
                    id="npwd"
                    name="npwd"
                    label="New Password"
                    value={formik.values.npwd}
                    fullWidth
                    error={formik.touched.npwd && formik.errors.npwd ? true : false}
                    autoComplete="given-name"
                    variant="outlined"
                    helperText={formik.errors.npwd}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    Confirm Password
                  </Typography>
                  <TextField
                    required
                    id="cpwd"
                    name="cpwd"
                    label="Confirm Password"
                    value={formik.values.cpwd}
                    fullWidth
                    error={formik.touched.cpwd && formik.errors.cpwd ? true : false}
                    autoComplete="given-name"
                    variant="outlined"
                    helperText={formik.errors.cpwd}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Reset Password
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
