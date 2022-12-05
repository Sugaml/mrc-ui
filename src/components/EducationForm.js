import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import { FormButton } from './FormButton';
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
    const handleNext3 = () => {
        setActiveStep(activeStep + 1);
    };
    const studentEducationInfo = useSelector((state) => state.StudentEducationInfo.student);
    console.log("state education loading ",studentEducationInfo)
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            iname: "",
            iaddress: "",
            gpa:"",
            grade:"",
            passedYear:"",
            remarks:"",

            cname:"",
            caddress: "",
            cgpa:"",
            cgrade:"",
            cpassedYear:"",
            cremarks:"",
        },

        validationSchema: Yup.object({
            iname: Yup.string().required("required institude name"),
            iaddress: Yup.string().required("required institude address"),
            gpa:Yup.string().required("required SEE gpa"),
            grade:Yup.string().required("required SEE grade"),
            passedYear:Yup.string().required("required SEE passed year"),
            cname: Yup.string().required("required college name"),
            caddress: Yup.string().required("required college address"),
            cgpa:Yup.string().required("required Certificate gpa"),
            cgrade:Yup.string().required("required Certificate grade"),
            cpassedYear:Yup.string().required("required Certificate passed year"),
        }),

        onSubmit: (handleNext) => {
            console.log('Inside address onsubmit.....')
            const studetEducationInfoData=[
                {

                    "institute_name":formik.values.iname,
                    "institute_address":formik.values.iaddress,
                    "course_name":"Science",
                    "level":"Certificate",
                    "grade":formik.values.grade,
                    "gpa":formik.values.gpa,
                    "completed_year":formik.values.passedYear,
                    "remarks":formik.values.remarks,
                    "student_id":"1"
                },
                {
                    "institute_name":formik.values.cname,
                    "institute_address":formik.values.caddress,
                    "course_name":"Science",
                    "level":"Certificate",
                    "grade":formik.values.cgrade,
                    "gpa":formik.values.cgpa,
                    "completed_year":formik.values.cpassedYear,
                    "remarks":formik.values.cremarks,
                    "student_id":"1"
                },
            ]
            console.log(studetEducationInfoData)
            handleNext3();
            dispatch(studentEducationInfoAction(studetEducationInfoData))
        }
    });
    return (
        <React.Fragment>
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
                    />
                </Grid>
                <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }} xs={12}>
                    <FormButton
                        activeStep={activeStep}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        steps={steps} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
