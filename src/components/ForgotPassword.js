import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { fotgotPasswordAction } from '../action/forgot_password';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import * as Yup from 'yup';


const theme = createTheme();


export const ForgotPassword = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid Email').required(),
        }),

        onSubmit: (handleNext) => {
            const forgotData = {
                "email": formik.values.email,
            }
            console.log(forgotData)
            dispatch(fotgotPasswordAction(forgotData))
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position:'absolute',
                        width:'100%',
                        transform:'translateY(50%)',
                        //marginTop:15
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                        <Typography component="h5" variant="h7">
                                    Please enter your email address to get password reset link
                                </Typography>
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Email"
                                    value={formik.values.email}
                                    fullWidth
                                    autoComplete="family-name"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && formik.errors.email ? true : false}
                                    helperText={formik.errors.email}
                                    onBlur={formik.handleBlur}
                                />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Send Request
                        </Button>
                        </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
