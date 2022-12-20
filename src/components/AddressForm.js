import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux";
import { studentAddressInfoAction } from '../action/studentaddress';
import * as Yup from 'yup';
import Proviences from '../json/Proviences';
import Districts from '../json/Districts';
import Municipalities from '../json/Municipalities';

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
    const [proviences] = React.useState(Proviences)
    const [districts] = React.useState(Districts)
    const [municipalities]=React.useState(Municipalities)

    const studentAddressInfo = useSelector((state) => state.StudentAddressInfo.studentAddressInfo);
    const studentInfo = useSelector((state) => state.StudentInfo.studentInfo);
    console.log("student log in address ::", studentInfo)
    console.log("state address loading ", studentAddressInfo)
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            provience: "",
            district: "",
            municipality: "",
            street: "",
            wardNum: "",
            houseNumber: "",

            tprovience: "",
            tdistrict: "",
            tmunicipality: "",
            tstreet: "",
            twardNum: 0,
            thouseNumber: "",
        },

        validationSchema: Yup.object({
            provience: Yup.string().required("please select provience"),
            district: Yup.string().required("please select district"),
            municipality: Yup.string().required("please select municipality"),
            street: Yup.string().required("required street"),
            wardNum: Yup.number().required("required ward number"),
            tprovience: Yup.string().required("please select county"),
            tdistrict: Yup.string().required("please select state"),
            tmunicipality: Yup.string().required("please select municipality"),
            tstreet: Yup.string().required("required street"),
            twardNum: Yup.number().required("required ward number"),
        }),

        onSubmit: (handleNext) => {
            console.log('Inside address onsubmit.....')
            const studetAddressInfoData = {
                "provience": formik.values.provience,
                "district": formik.values.district,
                "municipality": formik.values.municipality,
                "street": formik.values.street,
                "ward_number": parseInt(formik.values.wardNum),
                "house_number": formik.values.house_number,
                "tprovience": formik.values.tprovience,
                "tdistrict": formik.values.tdistrict,
                "tmunicipality": formik.values.tmunicipality,
                "tstreet": formik.values.tstreet,
                "tward_number": parseInt(formik.values.twardNum.number),
                "thouse_number": formik.values.thouse_number,
                "student_id": studentInfo.ID,
            }
            console.log("student address info:", studetAddressInfoData)
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
                        <FormControl fullWidth sx={{ m: 0 }} size="large">
                            <InputLabel id="demo-select-small">Provience</InputLabel>
                            <Select
                                labelId="provience"
                                id="provience"
                                name="provience"
                                value={formik.values.provience}
                                label="Select Provience"
                                onChange={formik.handleChange}
                                error={formik.touched.provience && formik.errors.provience ? true : false}
                                onBlur={formik.handleBlur}
                                helperText={formik.errors.provience}
                            >
                                <MenuItem value="select">
                                    <em>Select Provience</em>
                                </MenuItem>
                                {proviences.proviences.map((item) => (
                                    <MenuItem value={item.Provinces} > {item.Provinces}</MenuItem>
                                ))}
                            </Select>
                            {formik.touched.gender && formik.errors.gender ? <p style={{ color: '#d32f2f', fontWeight: '400', fontSize: '0.75rem' }}>{formik.errors.gender}</p> : null}
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            District
                        </Typography>
                        <FormControl fullWidth sx={{ m: 0 }} size="large">
                            <InputLabel id="demo-select-small">District</InputLabel>
                            <Select
                                labelId="district"
                                id="district"
                                name="district"
                                value={formik.values.district}
                                label="Select District"
                                onChange={formik.handleChange}
                                error={formik.touched.district && formik.errors.district ? true : false}
                                onBlur={formik.handleBlur}
                                helperText={formik.errors.district}
                            >
                                <MenuItem value="select">
                                    <em>Select District</em>
                                </MenuItem>
                                {districts.data.filter(district => district.Province === formik.values.provience).map(filteredData => (
                                    <MenuItem value={filteredData.Name} > {filteredData.Name}</MenuItem>
                                ))}
                            </Select>
                            {formik.touched.gender && formik.errors.gender ? <p style={{ color: '#d32f2f', fontWeight: '400', fontSize: '0.75rem' }}>{formik.errors.gender}</p> : null}
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Rural/Municipality
                        </Typography>
                        <FormControl fullWidth sx={{ m: 0 }} size="large">
                            <InputLabel id="demo-select-small">Rural/Municipality</InputLabel>
                            <Select
                                labelId="municipality"
                                id="municipality"
                                name="municipality"
                                value={formik.values.municipality}
                                label="Select Rural/Municipality"
                                fullWidth
                                onChange={formik.handleChange}
                                error={formik.touched.municipality && formik.errors.municipality ? true : false}
                                onBlur={formik.handleBlur}
                                helperText={formik.errors.municipality}
                            >
                                <MenuItem value="select">
                                    <em>Select  Rural/Municipality</em>
                                </MenuItem>
                                {municipalities.data.filter(municipalitie => municipalitie.District === formik.values.district).map(filterData => (
                                    <MenuItem value={filterData.Name} > {filterData.Name}</MenuItem>
                                ))}
                            </Select>
                            {formik.touched.gender && formik.errors.gender ? <p style={{ color: '#d32f2f', fontWeight: '400', fontSize: '0.75rem' }}>{formik.errors.gender}</p> : null}
                        </FormControl>
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
                        <FormControl fullWidth sx={{ m: 0 }} size="large">
                            <InputLabel id="demo-select-small">Provience</InputLabel>
                            <Select
                                required
                                labelId="tprovience"
                                id="tprovience"
                                name="tprovience"
                                value={formik.values.tprovience}
                                label="Select tprovience"
                                onChange={formik.handleChange}
                                error={formik.touched.tprovience && formik.errors.tprovience ? true : false}
                                onBlur={formik.handleBlur}
                                helperText={formik.errors.tprovience}
                            >
                                <MenuItem value="select">
                                    <em>Select Provience</em>
                                </MenuItem>
                                {proviences.proviences.map((item) => (
                                    <MenuItem value={item.Provinces} > {item.Provinces}</MenuItem>
                                ))}
                            </Select>
                            {formik.touched.gender && formik.errors.gender ? <p style={{ color: '#d32f2f', fontWeight: '400', fontSize: '0.75rem' }}>{formik.errors.gender}</p> : null}
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            District
                        </Typography>
                        <FormControl fullWidth sx={{ m: 0 }} size="large">
                            <InputLabel id="demo-select-small">District</InputLabel>
                            <Select
                                required
                                labelId="tdistrict"
                                id="tdistrict"
                                name="tdistrict"
                                value={formik.values.tdistrict}
                                label="Select tdistrict"
                                onChange={formik.handleChange}
                                error={formik.touched.tdistrict && formik.errors.tdistrict ? true : false}
                                onBlur={formik.handleBlur}
                                helperText={formik.errors.tdistrict}
                            >
                                <MenuItem value="select">
                                    <em>Select District</em>
                                </MenuItem>
                                {districts.data.filter(district => district.Province === formik.values.tprovience).map(filteredData => (
                                    <MenuItem value={filteredData.Name} > {filteredData.Name}</MenuItem>
                                ))}
                            </Select>
                            {formik.touched.gender && formik.errors.gender ? <p style={{ color: '#d32f2f', fontWeight: '400', fontSize: '0.75rem' }}>{formik.errors.gender}</p> : null}
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Rural/Municipality
                        </Typography>
                        <FormControl fullWidth sx={{ m: 0 }} size="large">
                            <InputLabel id="demo-select-small">Rural/Municipality</InputLabel>
                            <Select
                                required
                                labelId="tmunicipality"
                                id="tmunicipality"
                                name="tmunicipality"
                                value={formik.values.tmunicipality}
                                label="Select Rural/tmunicipality"
                                fullWidth
                                onChange={formik.handleChange}
                                error={formik.touched.tmunicipality && formik.errors.tmunicipality ? true : false}
                                onBlur={formik.handleBlur}
                                helperText={formik.errors.tmunicipality}
                            >
                                <MenuItem value="select">
                                    <em>Select  Rural/Municipality</em>
                                </MenuItem>
                                {municipalities.data.filter(municipalitie => municipalitie.District === formik.values.tdistrict).map(filterData => (
                                    <MenuItem value={filterData.Name} > {filterData.Name}</MenuItem>
                                ))}
                            </Select>
                            {formik.touched.gender && formik.errors.gender ? <p style={{ color: '#d32f2f', fontWeight: '400', fontSize: '0.75rem' }}>{formik.errors.gender}</p> : null}
                        </FormControl>
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
                            sx={{ mt: 3, ml: 1 }}
                            disabled={!formik.values.provience || !formik.values.district
                            }
                        >
                            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </form >
    );
}
