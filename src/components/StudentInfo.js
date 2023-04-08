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
import Calendar from "@sbmdkl/nepali-datepicker-reactjs";
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import { useState} from "react";
import { studentInfoAction } from '../action/studentinfo';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getStudentGeneralAction } from '../action/user';


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
    const student = useSelector((state) => state.StudentGeneral.currentStudent);

    const [date,setDate] = useState("");
    const getStudentGeneral = React.useCallback(() => dispatch(getStudentGeneralAction(isAuthenticated)), [dispatch, isAuthenticated]);

    React.useEffect(() => {
        getStudentGeneral();
    }, [getStudentGeneral]);

    const handleDate = ({ bsDate, adDate }) => {
       setDate({ date: bsDate });
     };
    const formik = useFormik({
        initialValues: {
            firstName: student.firstname,
            lastName: student.lastname,
            gender: student.gender,
            email: student.email,
            mobileNum: student.mobile_num,
            parentName: student.parent_name,
            parentRelation:student.parent_relation,
            parentNumber:student.parent_mobile,
            dob: student.dob,
            religion: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, "Must be 15 character or less").required("required firstname"),
            lastName: Yup.string().max(15, "Must be 15 character or less").required("required lastname"),
            gender: Yup.string().required("required gender"),
            email: Yup.string().email('invalid emal').required(),
            mobileNum: Yup.number().required("required mobile number").test('len', 'Must be 10 digit', val => val && val.toString().length === 10 ),
            parentName: Yup.string().required("required parent name"),
            parentRelation: Yup.string().required("required parent relation"),
            parentNumber:Yup.number().required("required mobile number").test('len', 'must be 10 digit', val => val && val.toString().length === 10 ),
        }),

        onSubmit: (handleNext) => {
            const studetInfoData={
                "firstname":formik.values.firstName,
                "lastname":formik.values.lastName,
                "gender":formik.values.gender,
                "dob":date.date,
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
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="Student Name"
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
                    </Grid>

                    <Grid item xs={12} sm={6}>
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
                        <TextField
                            required
                            id="parentRelation"
                            name="parentRelation"
                            label="Parent Relation"
                            value={formik.values.parentRelation}
                            fullWidth
                            autoComplete="Parent Relation"
                            variant="outlined"
                            onChange={formik.handleChange}
                            error={formik.touched.parentRelation && formik.errors.parentRelation ? true : false}
                            helperText={formik.errors.parentRelation}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
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
                    <Grid item xs={12} md={6} sm={12}>
                        <Calendar style={{margin:"0",display:"block",width:"100%",padding: "14px 1px", borderRadius:2}} onChange={handleDate} language="en" theme="deepdark" size="large"/>
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
                        sx={{ mt: 5, ml: 1,float:'right' }}
                        disabled={!formik.values.firstName || !formik.values.lastName || !formik.values.gender ||
                            !formik.values.email || !formik.values.mobileNum || !formik.values.parentName
                            || !formik.values.parentRelation || !formik.values.religion ||
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
