import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import * as Yup from 'yup';

export const AddressForm = (
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
            country: "",
            state: "",
            municipality:"",
            street:"",
            wardNum:"",
            tcountry: "",
            tstate: "",
            tmunicipality:"",
            tstreet:"",
            twardNum:"",
        },

        validationSchema: Yup.object({
            country: Yup.string().required("please select county"),
            state: Yup.string().required("please select state"),
            municipality:Yup.string().required("please select municipality"),
            street:Yup.string().required("required street"),
            wardNum:Yup.string().required("required ward number"),
            tcountry: Yup.string().required("please select county"),
            tstate: Yup.string().required("please select state"),
            tmunicipality:Yup.string().required("please select municipality"),
            tstreet:Yup.string().required("required street"),
            twardNum:Yup.string().required("required ward number"),
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
                    Permanent Address
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Country
                        </Typography>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            error={formik.touched.country && formik.errors.country ? true : false}
                            autoComplete="given-name"
                            variant="outlined"
                            helperText={formik.errors.country}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            State
                        </Typography>
                        <TextField
                            required
                            id="state"
                            name="state"
                            label="State"
                            fullWidth
                            error={formik.touched.state && formik.errors.state ? true : false}
                            autoComplete="given-name"
                            variant="outlined"
                            helperText={formik.errors.state}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Rural/Municipality
                        </Typography>
                        <TextField
                            required
                            id="municipality"
                            name="municipality"
                            label="Rural/Municipality"
                            fullWidth
                            error={formik.touched.municipality && formik.errors.municipality ? true : false}
                            autoComplete="family-name"
                            variant="outlined"
                            helperText={formik.errors.municipality}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Street
                        </Typography>
                        <TextField
                            required
                            id="street"
                            name="street"
                            label="Street"
                            fullWidth
                            error={formik.touched.street && formik.errors.street ? true : false}
                            autoComplete="family-name"
                            variant="outlined"
                            helperText={formik.errors.street}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Ward Number
                        </Typography>
                        <TextField
                            required
                            id="wardNum"
                            name="wardNum"
                            label="Ward Number"
                            fullWidth
                            error={formik.touched.wardNum && formik.errors.wardNum ? true : false}
                            autoComplete="family-name"
                            variant="outlined"
                            helperText={formik.errors.wardNum}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            House Number
                        </Typography>
                        <TextField
                            id="houseNum"
                            name="houseNum"
                            label="House Number"
                            fullWidth
                            autoComplete="family-name"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>

                <Typography variant="h6" gutterBottom sx={{ pt: 2, mb: 3 }}>
                    Temporary Address
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Country
                        </Typography>
                        <TextField
                            required
                            id="tcountry"
                            name="tcountry"
                            label="Country"
                            fullWidth
                            error={formik.touched.tcountry && formik.errors.tcountry ? true : false}
                            autoComplete="given-name"
                            variant="outlined"
                            helperText={formik.errors.tcountry}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            State
                        </Typography>
                        <TextField
                            required
                            id="tstate"
                            name="tstate"
                            label="State"
                            fullWidth
                            error={formik.touched.tstate && formik.errors.tstate ? true : false}
                            autoComplete="given-name"
                            variant="outlined"
                            helperText={formik.errors.tstate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Rural/Municipality
                        </Typography>
                        <TextField
                            required
                            id="municipality"
                            name="municipality"
                            label="Rural/Municipality"
                            fullWidth
                            error={formik.touched.tmunicipality && formik.errors.tmunicipality ? true : false}
                            autoComplete="family-name"
                            variant="outlined"
                            helperText={formik.errors.tmunicipality}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Street
                        </Typography>
                        <TextField
                            required
                            id="tstreet"
                            name="tstreet"
                            label="Street"
                            fullWidth
                            error={formik.touched.tstreet && formik.errors.tstreet ? true : false}
                            autoComplete="family-name"
                            variant="outlined"
                            helperText={formik.errors.tstreet}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Ward Number
                        </Typography>
                        <TextField
                            required
                            id="twardNum"
                            name="twardNum"
                            label="Ward Number"
                            fullWidth
                            error={formik.touched.twardNum && formik.errors.twardNum ? true : false}
                            autoComplete="family-name"
                            variant="outlined"
                            helperText={formik.errors.twardNum}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            House Number
                        </Typography>
                        <TextField
                            required
                            id="houseNum"
                            name="houseNum"
                            label="House Number"
                            fullWidth
                            autoComplete="family-name"
                            variant="outlined"
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
                            disabled={!formik.values.country || !formik.values.state 
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
