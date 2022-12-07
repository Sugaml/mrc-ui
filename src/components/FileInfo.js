import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { studentFileInfoAction } from '../action/studentfile';
import * as Yup from 'yup';


export const FileInfo = ({
    activeStep,
    setActiveStep,
    handleBack,
    handleNext,
    steps }) => {
        const handleSuccess = () => {
            setActiveStep(activeStep + 1);
        };
        // const studentFileInfo = useSelector((state) => state.StudenFileInfo.studentFileInfo);
        const studentInfo = useSelector((state) => state.StudentInfo.studentInfo);
        // console.log("state loading file",studentFileInfo)
        const dispatch = useDispatch();
    
        const formik = useFormik({
            initialValues: {
                seeTranscript: "",
                seeCharacter: "",
                marksheet:"",
                character:"",
                migration:"",
                photo:"",
                signature:"",
            },
    
            validationSchema: Yup.object({
                seeTranscript: Yup.string().required("required SEE marksheet"),
                seeCharacter: Yup.string().required("required SEE character certificate"),
                marksheet:Yup.string().required("required Certificate marksheet"),
                character:Yup.string().required("required Certificate character"),
                migration:Yup.string().required("required Certificate migration"),
                photo: Yup.string().required("required student photo"),
                signature: Yup.string().required("required student signature"),
            }),
    
            onSubmit: (handleNext) => {
                console.log('Inside address onsubmit.....')
                const studentFileInfoData= {
                    "see_transcript":formik.values.seeTranscript,
                    "see_character":formik.values.seeCharacter,
                    "certificate_transcript":formik.values.marksheet,
                    "certificate_character":formik.values.character,
                    "certificate_migration":formik.values.migration,
                    "citizenship_front":"",
                    "citizenship_back":"",
                    "photo":"",
                    "signatue":"",
                    "student_id":studentInfo.data.ID,
                    }
                console.log(studentFileInfoData)
                handleSuccess();
                dispatch(studentFileInfoAction(studentFileInfoData))
            }
        });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom>
                        SEE Marksheet/GradeSheet
                    </Typography>
                    <TextField
                        required
                        id="seeTranscript"
                        name="seeTranscript"
                        fullWidth
                        autoComplete="given-name"
                        accept="image/*"
                        multiple type="file"
                        variant="outlined"
                        value={formik.values.seeTranscript}
                        error={formik.touched.seeTranscript && formik.errors.seeTranscript ? true : false}
                        helperText={formik.errors.seeTranscript}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom>
                        SEE Character Certificate
                    </Typography>
                    <TextField
                        required
                        id="seeCharacter"
                        name="seeCharacter"
                        fullWidth
                        autoComplete="given-name"
                        accept="image/*"
                        multiple type="file"
                        variant="outlined"
                        value={formik.values.seeCharacter}
                        error={formik.touched.seeCharacter && formik.errors.seeCharacter ? true : false}
                        helperText={formik.errors.seeCharacter}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom>
                        +2 Marksheet/GradeSheet
                    </Typography>
                    <TextField
                        required
                        id="marksheet"
                        name="marksheet"
                        fullWidth
                        autoComplete="given-name"
                        accept="image/*"
                        multiple type="file"
                        variant="outlined"
                        value={formik.values.marksheet}
                        error={formik.touched.marksheet && formik.errors.marksheet ? true : false}
                        helperText={formik.errors.marksheet}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom>
                        +2 Character Certificate
                    </Typography>
                    <TextField
                        required
                        id="character"
                        name="character"
                        fullWidth
                        autoComplete="given-name"
                        accept="image/*"
                        multiple type="file"
                        variant="outlined"
                        value={formik.values.character}
                        error={formik.touched.character && formik.errors.character ? true : false}
                        helperText={formik.errors.character}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom>
                        +2 Migration Certificate
                    </Typography>
                    <TextField
                        required
                        id="migration"
                        name="migration"
                        fullWidth
                        autoComplete="given-name"
                        accept="image/*"
                        multiple type="file"
                        variant="outlined"
                        value={formik.values.migration}
                        error={formik.touched.migration && formik.errors.migration ? true : false}
                        helperText={formik.errors.migration}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom>
                        PP Size Photo
                    </Typography>
                    <TextField
                        required
                        id="photo"
                        name="photo"
                        fullWidth
                        autoComplete="given-name"
                        accept="image/*"
                        multiple type="file"
                        variant="outlined"
                        value={formik.values.photo}
                        error={formik.touched.photo && formik.errors.photo ? true : false}
                        helperText={formik.errors.photo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom>
                        Student Signature
                    </Typography>
                    <TextField
                        required
                        id="signature"
                        name="signature"
                        fullWidth
                        autoComplete="given-name"
                        accept="image/*"
                        multiple type="file"
                        variant="outlined"
                        value={formik.values.signature}
                        error={formik.touched.signature && formik.errors.signature ? true : false}
                        helperText={formik.errors.signature}
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
