import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { studentInfoAction } from '../action/studentinfo';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const StudentInfo = ({
    activeStep,
    setActiveStep,
    handleBack,
    handleNext,
    steps }) => {
    const handleNextAddress = () => {
        setActiveStep(activeStep + 1);
    };
    const dispatch = useDispatch();

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const studentInfo = useSelector((state) => state.StudentInfo.student);
    const course = useSelector((state) => state.CurrentCourse.course);
    
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            gender: "",
            email: "",
            mobileNum: "",
            parentName: "",
            parentRelation: "",
            parentNumber: "",
            dob: "",
            religion: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, "Must be 15 character or less").required("Required"),
            lastName: Yup.string().max(15, "Must be 15 character or less").required("Required"),
            gender: Yup.string().required("Required"),
            email: Yup.string().email('Invalid Email').required(),
            mobileNum: Yup.number().required("required mobile number").test('len', 'Must be 10 digit', val => val && val.toString().length === 10 ),
            parentName: Yup.string().max(15, "Must be 15 character or less").required("Required"),
            parentRelation: Yup.string().max(15, "Must be 15 character or less").required("Required"),
            parentNumber:Yup.number().required("required mobile number").test('len', 'Must be 10 digit', val => val && val.toString().length === 10 ),
            dob: Yup.string().required(),
            religion: Yup.string().max(15, "Must be 15 character or less").required()
        }),

        onSubmit: (handleNext) => {
            const studetInfoData={
                "first_name":formik.values.firstName,
                "last_name":formik.values.lastName,
                "gender":formik.values.gender,
                "dob":formik.values.dob,
                "mobile_num":formik.values.mobileNum,
                "email":formik.values.email,
                "parent_name":formik.values.parentName,
                "parent_mobile":formik.values.parentNumber,
                "parent_relation":formik.values.parentRelation,
                "cid":course.ID,
            }
            console.log(studetInfoData)
            handleNextAddress();
            dispatch(studentInfoAction(isAuthenticated,studetInfoData))
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <Typography variant="h6" gutterBottom>
                    Personal Information
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
                                <MenuItem value={"male"}>Male</MenuItem>
                                <MenuItem value={"female"}>Female</MenuItem>
                                <MenuItem value={"others"}>Others</MenuItem>
                            </Select>
                            {formik.touched.gender && formik.errors.gender ? <p style={{ color: '#d32f2f', fontWeight: '400', fontSize: '0.75rem' }}>{formik.errors.gender}</p> : null}
                        </FormControl>
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
                            Parent Name
                        </Typography>
                        <TextField
                            required
                            id="parentName"
                            name="parentName"
                            label="Parent Name"
                            value={formik.values.parentName}
                            fullWidth
                            autoComplete="family-name"
                            variant="outlined"
                            onChange={formik.handleChange}
                            error={formik.touched.parentName && formik.errors.parentName ? true : false}
                            helperText={formik.errors.parentName}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Parent Relation
                        </Typography>
                        <TextField
                            required
                            id="parentRelation"
                            name="parentRelation"
                            label="Patent Relation"
                            value={formik.values.parentRelation}
                            fullWidth
                            autoComplete="Patent Relation"
                            variant="outlined"
                            onChange={formik.handleChange}
                            error={formik.touched.parentRelation && formik.errors.parentRelation ? true : false}
                            helperText={formik.errors.parentRelation}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Parent Mobile Number
                        </Typography>
                        <TextField
                            id="parentNumber"
                            name="parentNumber"
                            label="Parent Mobile Number"
                            value={formik.values.parentNumber}
                            fullWidth
                            variant="outlined"
                            onChange={formik.handleChange}
                            error={formik.touched.parentNumber && formik.errors.parentNumber ? true : false}
                            helperText={formik.errors.parentNumber}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Date of Birth
                        </Typography>
                        <TextField
                            required
                            id="dob"
                            name="dob"
                            label="Date of Birth"
                            value={formik.values.dob}
                            fullWidth
                            autoComplete="dob"
                            variant="outlined"
                            onChange={formik.handleChange}
                            error={formik.touched.dob && formik.errors.dob ? true : false}
                            helperText={formik.errors.dob}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Religion
                        </Typography>
                        <TextField
                            required
                            id="religion"
                            name="religion"
                            label="Religion"
                            fullWidth
                            autoComplete="religion"
                            variant="outlined"
                            value={formik.values.religion}
                            onChange={formik.handleChange}
                            error={formik.touched.religion && formik.errors.religion ? true : false}
                            helperText={formik.errors.religion}
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
                        sx={{ mt: 3, ml: 1,float:'right' }}
                        disabled={!formik.values.firstName || !formik.values.lastName || !formik.values.gender ||
                            !formik.values.email || !formik.values.mobileNum || !formik.values.parentName
                            || !formik.values.parentRelation || !formik.values.dob || !formik.values.religion ||
                            formik.errors.email || formik.errors.mobileNum
                        }
                    >
                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                </div>
            </div>
            {/* <Button
                onClick={() => dispatch(studentInfoAction("sugam lama"))}
            >click for API</Button> */}
            {
                 studentInfo&&(<Box sx={{ display: 'flex' }}>
                 <CircularProgress />
               </Box>)
            }
        </form>
    );
}
