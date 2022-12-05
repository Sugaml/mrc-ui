import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { studentAddressInfoAction } from '../action/studentaddress';
import * as Yup from 'yup';

export const AddressForm = (
    {
        activeStep,
        setActiveStep,
        handleBack,
        handleNext,
        steps
    }) => {
    const handleNextEducation = () => {
        setActiveStep(activeStep + 1);
    };
    const studentAddressInfo = useSelector((state) => state.StudentAddressInfo.studentAddressInfo);
    console.log("state address loading ",studentAddressInfo)
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            provience: "",
            district: "",
            municipality:"",
            street:"",
            wardNum:"",
            houseNumber:"",

            tprovience:"",
            tdistrict: "",
            tmunicipality:"",
            tstreet:"",
            twardNum:"",
            thouseNumber:"",
        },

        validationSchema: Yup.object({
            provience: Yup.string().required("please select provience"),
            district: Yup.string().required("please select district"),
            municipality:Yup.string().required("please select municipality"),
            street:Yup.string().required("required street"),
            wardNum:Yup.string().required("required ward number"),
            tprovience: Yup.string().required("please select county"),
            tdistrict: Yup.string().required("please select state"),
            tmunicipality:Yup.string().required("please select municipality"),
            tstreet:Yup.string().required("required street"),
            twardNum:Yup.string().required("required ward number"),
        }),

        onSubmit: (handleNext) => {
            console.log('Inside address onsubmit.....')
            const studetAddressInfoData={
                "provience":formik.values.provience,
                "district":formik.values.district,
                "municipality":formik.values.municipality,
                "street":formik.values.street,
                "ward_number":formik.values.wardNum,
                "house_number":formik.values.house_number,
                "tprovience":formik.values.tprovience,
                "tdistrict":formik.values.tdistrict,
                "tmunicipality":formik.values.tmunicipality,
                "tstreet":formik.values.tstreet,
                "tward_number":formik.values.twardNum,
                "thouse_number":formik.values.thouse_number,
                "student_id":"1"
            }
            console.log("student address info:",studetAddressInfoData)
            handleNextEducation();
            dispatch(studentAddressInfoAction(studetAddressInfoData))
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
                           Provience
                        </Typography>
                        <TextField
                            required
                            id="provience"
                            name="provience"
                            label="provience"
                            value={formik.values.provience}
                            fullWidth
                            error={formik.touched.provience && formik.errors.provience ? true : false}
                            autoComplete="given-name"
                            variant="outlined"
                            helperText={formik.errors.provience}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            District
                        </Typography>
                        <TextField
                            required
                            id="district"
                            name="district"
                            label="District"
                            value={formik.values.district}
                            fullWidth
                            error={formik.touched.district && formik.errors.district ? true : false}
                            autoComplete="given-name"
                            variant="outlined"
                            helperText={formik.errors.district}
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
                            value={formik.values.municipality}
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
                            value={formik.values.street}
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
                            value={formik.values.wardNum}
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
                            value={formik.values.houseNumber}
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
                            Provience
                        </Typography>
                        <TextField
                            required
                            id="tprovience"
                            name="tprovience"
                            label="Provience"
                            value={formik.values.tprovience}
                            fullWidth
                            error={formik.touched.tprovience && formik.errors.tcountry ? true : false}
                            autoComplete="given-name"
                            variant="outlined"
                            helperText={formik.errors.tcountry}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                          District
                        </Typography>
                        <TextField
                            required
                            id="tdistrict"
                            name="tdistrict"
                            label="District"
                            value={formik.values.tdistrict}
                            fullWidth
                            error={formik.touched.tdistrict && formik.errors.tdistrict ? true : false}
                            autoComplete="given-name"
                            variant="outlined"
                            helperText={formik.errors.tdistrict}
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
                            id="tmunicipality"
                            name="tmunicipality"
                            label="Rural/Municipality"
                            value={formik.values.tmunicipality}
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
                            value={formik.values.tstreet}
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
                            value={formik.values.twardNum}
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
                            id="thouseNum"
                            name="thouseNum"
                            label="House Number"
                            value={formik.values.thouseNumber}
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
                            disabled={!formik.values.provience || !formik.values.district 
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
