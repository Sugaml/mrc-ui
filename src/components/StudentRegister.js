import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import * as Yup from 'yup';


export const StudentRegister = ({
    activeStep,
    setActiveStep,
    handleBack,
    handleNext,
    steps }) => {
    const handleNext1 = () => {
        setActiveStep(activeStep + 1);
    };
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            mobileNum: "",
            password: "",
            cpwd: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, "must be 15 character or less").required("required firstname"),
            lastName: Yup.string().max(15, "must be 15 character or less").required("required lastname"),
            email: Yup.string().email('invalid email').required(),
            mobileNum: Yup.number().required(),
            password: Yup.string().max(8, "must be 8 character or less").required("required password"),
            cpwd: Yup.string().max(8, "must be 8 character or less").required("required conformation password"),
        }),
        onSubmit: (handleNext) => {
            console.log(formik.values.firstName)
            handleNext1();
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <Typography variant="h6" gutterBottom>
                    Student Register
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            First Name
                        </Typography>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            value={formik.values.firstName}
                            fullWidth
                            error={formik.touched.firstName && formik.errors.firstName ? true : false}
                            autoComplete="given-name"
                            variant="outlined"
                            helperText={formik.errors.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Last Name
                        </Typography>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            value={formik.values.lastName}
                            fullWidth
                            autoComplete="given-name"
                            variant="outlined"
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && formik.errors.lastName ? true : false}
                            helperText={formik.errors.lastName}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>

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
                            Mobile Number
                        </Typography>
                        <TextField
                            required
                            id="mobileNum"
                            name="mobileNum"
                            label="Mobile Number"
                            value={formik.values.mobileNum}
                            fullWidth
                            autoComplete="family-name"
                            variant="outlined"
                            onChange={formik.handleChange}
                            error={formik.touched.mobileNum && formik.errors.mobileNum ? true : false}
                            helperText={formik.errors.mobileNum}
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
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Confirm Password
                        </Typography>
                        <TextField
                            required
                            id="cpwd"
                            name="cpwd"
                            label="Password"
                            value={formik.values.parentName}
                            fullWidth
                            autoComplete="family-name"
                            variant="outlined"
                            onChange={formik.handleChange}
                            error={formik.touched.cpwd && formik.errors.cpwd ? true : false}
                            helperText={formik.errors.cpwd}
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
                        sx={{ mt: 3, ml: 1 }}
                        disabled={!formik.values.firstName || !formik.values.lastName ||
                            !formik.values.email || !formik.values.mobileNum ||
                            formik.errors.password || formik.errors.cpwd
                        }
                    >
                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                </div>
            </div>
        </form>
    );
}
