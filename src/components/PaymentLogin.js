import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import * as Yup from 'yup';

export const PaymentLogin = (
    {
        activeStep,
        setActiveStep,
        handleBack,
        handleNext,
        steps
    }) => {
    const handleNext3 = () => {
        setActiveStep(activeStep + 1);
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            pin: "",
        },

        validationSchema: Yup.object({
            email: Yup.string().required("required email/Mobile number"),
            pin: Yup.string().required("required pin number"),
        }),

        onSubmit: (handleNext) => {
            console.log('Inside onsubmit.....')
            console.log(formik.values.firstName)
            handleNext3();
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <Typography variant="h6" gutterBottom>
                    Payment Credentials
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Email/Mobile Number
                        </Typography>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email/Mobile Number"
                            fullWidth
                            error={formik.touched.email && formik.errors.email ? true : false}
                            autoComplete="family-name"
                            variant="outlined"
                            value={formik.values.email}
                            helperText={formik.errors.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            PIN
                        </Typography>
                        <TextField
                            required
                            id="pin"
                            name="pin"
                            label="PIN Number"
                            value={formik.values.pin}
                            fullWidth
                            autoComplete="family-name"
                            variant="outlined"
                            error={formik.touched.pin && formik.errors.pin ? true : false}
                            helperText={formik.errors.pin}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }} xs={12}>
                        {activeStep !== 0 && (
                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                Back
                            </Button>
                        )}
                        <Button
                            type='submit'
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 3, ml: 1 }}
                            disabled={!formik.values.email || !formik.values.pin 
                            }
                        >
                            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </form>
    );
}
