import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import * as Yup from 'yup';


export const StudentLogin = ({
    activeStep,
    setActiveStep,
    handleBack,
    handleNext,
    steps }) => {
    const handleNext2 = () => {
        setActiveStep(activeStep + 1);
    };
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid Email').required(),
            password: Yup.string().max(15, "Must be 15 character or less").required("Required"),
        }),
        onSubmit: (handleNext) => {
            console.log('Inside onsubmit.....')
            console.log(formik.values.firstName)
            handleNext2();
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <Typography variant="h6" gutterBottom>
                    Student Login
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Email
                        </Typography>
                        <TextField
                            //  required
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
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Password
                        </Typography>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            value={formik.values.parentName}
                            fullWidth
                            autoComplete="family-name"
                            variant="outlined"
                            onChange={formik.handleChange}
                            error={formik.touched.password && formik.errors.password ? true : false}
                            helperText={formik.errors.password}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                </Grid>
                <div>
                    {activeStep !== 0 && (
                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                            Back
                        </Button>
                    )}
                    <Button
                        type='submit'
                        variant="contained"
                        //onClick={handleNext}
                        sx={{ mt: 3, ml: 1 }}
                        disabled={!formik.values.email || !formik.values.password
                        }
                    >
                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                </div>
            </div>
        </form>
    );
}
