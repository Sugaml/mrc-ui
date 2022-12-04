import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import * as Yup from 'yup';

export const PaymentToken = (
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
            ptoken: Yup.string().required("required otp token"),
        }),

        onSubmit: (handleNext) => {
            console.log('Inside onsubmit.....')
            handleNext3();
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <Typography variant="h6" gutterBottom>
                    Token Section
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Payment Token
                        </Typography>
                        <TextField
                            required
                            id="ptoken"
                            name="ptoken"
                            label="Payment Token"
                            value={formik.values.ptoken}
                            fullWidth
                            error={formik.touched.ptoken && formik.errors.ptoken ? true : false}
                            autoComplete="family-name"
                            variant="outlined"
                            helperText={formik.errors.ptoken}
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
                            disabled={!formik.values.ptoken 
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
