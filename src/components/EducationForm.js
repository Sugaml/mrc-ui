import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { studentEducationInfoAction } from '../action/studenteducation';
import * as Yup from 'yup';

export const EducationForm = (
    {
        activeStep,
        setActiveStep,
        handleBack,
        handleNext,
        steps }
) => {
    const handleNextDocument = () => {
        setActiveStep(activeStep + 1);
    };
    const studentInfo = useSelector((state) => state.StudentInfo.studentInfo);

    console.log("state education loading ", studentInfo)
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            iname: "",
            iaddress: "",
            gpa: "",
            grade: "",
            passedYear: "",
            remarks: "",

            cname: "",
            caddress: "",
            cgpa: "",
            cgrade: "",
            cpassedYear: "",
            cremarks: "",
        },

        validationSchema: Yup.object({
            iname: Yup.string().required("required institude name"),
            iaddress: Yup.string().required("required institude address"),
            gpa: Yup.string().required("required SEE gpa"),
            grade: Yup.string().required("required SEE grade"),
            passedYear: Yup.string().required("required SEE passed year"),
            cname: Yup.string().required("required college name"),
            caddress: Yup.string().required("required college address"),
            cgpa: Yup.string().required("required Certificate gpa"),
            cgrade: Yup.string().required("required Certificate grade"),
            cpassedYear: Yup.string().required("required Certificate passed year"),
        }),

        onSubmit: (handleNext) => {
            console.log('Inside address onsubmit.....')
            const studetEducationInfoData = [
                {

                    "institute_name": formik.values.iname,
                    "institute_address": formik.values.iaddress,
                    "course_name": "Science",
                    "level": "Certificate",
                    "grade": formik.values.grade,
                    "gpa": formik.values.gpa,
                    "completed_year": formik.values.passedYear,
                    "remarks": formik.values.remarks,
                    "student_id": studentInfo.ID,
                },
                {
                    "institute_name": formik.values.cname,
                    "institute_address": formik.values.caddress,
                    "course_name": "Science",
                    "level": "Certificate",
                    "grade": formik.values.cgrade,
                    "gpa": formik.values.cgpa,
                    "completed_year": formik.values.cpassedYear,
                    "remarks": formik.values.cremarks,
                    "student_id": studentInfo.ID,
                },
            ]
            console.log(studetEducationInfoData)
            handleNextDocument();
            dispatch(studentEducationInfoAction(studetEducationInfoData))
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
            <Typography variant="h6" gutterBottom>
                SLC/SEE Information
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Insitution Name
                    </Typography>
                    <TextField
                        required
                        id="iname"
                        name="iname"
                        label="Insitution Name"
                        value={formik.values.iname}
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                        error={formik.touched.iname && formik.errors.iname ? true : false}
                        helperText={formik.errors.iname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Address of Insitution
                    </Typography>
                    <TextField
                        required
                        id="iaddress"
                        name="iaddress"
                        label="Address of Insitution"
                        value={formik.values.iaddress}
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                        error={formik.touched.iaddress && formik.errors.iaddress ? true : false}
                        helperText={formik.errors.iaddress}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Percentage/GPA
                    </Typography>
                    <TextField
                        required
                        id="gpa"
                        name="gpa"
                        label="Percentage/GPA"
                        value={formik.values.gpa}
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                        error={formik.touched.gpa && formik.errors.gpa ? true : false}
                        helperText={formik.errors.gpa}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Divison/Grade
                    </Typography>
                    <TextField
                        required
                        id="grade"
                        name="grade"
                        label="Grade"
                        value={formik.values.grade}
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                        error={formik.touched.grade && formik.errors.grade ? true : false}
                        helperText={formik.errors.grade}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Passed Year
                    </Typography>
                    <TextField
                        required
                        id="passedYear"
                        name="passedYear"
                        label="Passed Year"
                        value={formik.values.passedYear}
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                        error={formik.touched.passedYear && formik.errors.passedYear ? true : false}
                        helperText={formik.errors.passedYear}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Remarks
                    </Typography>
                    <TextField
                        required
                        id="remarks"
                        name="remarks"
                        label="Remarks"
                        value={formik.values.remarks}
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                        error={formik.touched.remarks && formik.errors.remarks ? true : false}
                        helperText={formik.errors.remarks}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom sx={{ pt: 2, mb: 3 }}>
                Certifiacte level Information
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Insitution Name
                    </Typography>
                    <TextField
                        required
                        id="cname"
                        name="cname"
                        label="Insitution Name"
                        value={formik.values.cname}
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                        error={formik.touched.cname && formik.errors.cname ? true : false}
                        helperText={formik.errors.cname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Address of Insitution
                    </Typography>
                    <TextField
                        required
                        id="caddress"
                        name="caddress"
                        label="Address of Insitution"
                        value={formik.values.caddress}
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                        error={formik.touched.caddress && formik.errors.caddress ? true : false}
                        helperText={formik.errors.caddress}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Percentage/GPA
                    </Typography>
                    <TextField
                        required
                        id="cgpa"
                        name="cgpa"
                        label=" Percentage/GPA"
                        value={formik.values.cgpa}
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                        error={formik.touched.cgpa && formik.errors.cgpa ? true : false}
                        helperText={formik.errors.cgpa}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Divison/Grade
                    </Typography>
                    <TextField
                        required
                        id="cgrade"
                        name="cgrade"
                        label="Division/Grade"
                        value={formik.values.cgrade}
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                        error={formik.touched.cgrade && formik.errors.cgrade ? true : false}
                        helperText={formik.errors.cgrade}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Passed Year
                    </Typography>
                    <TextField
                        required
                        id="cpassedYear"
                        name="cpassedYear"
                        label="Passed Year"
                        value={formik.values.cpassedYear}
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                        error={formik.touched.cpassedYear && formik.errors.cpassedYear ? true : false}
                        helperText={formik.errors.cpassedYear}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Remarks
                    </Typography>
                    <TextField
                        required
                        id="cremarks"
                        name="cremarks"
                        label="Remarks"
                        value={formik.values.cremarks}
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                        error={formik.touched.cremarks && formik.errors.cremarks ? true : false}
                        helperText={formik.errors.cremarks}
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
                        sx={{ mt: 3, ml: 1 }}
                    >
                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                </Grid>
            </Grid>
            </div>
        </form>
    );
}
