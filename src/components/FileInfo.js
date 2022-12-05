import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import { FormButton } from './FormButton';
import { useDispatch, useSelector } from "react-redux";
import { studentFileInfoAction } from '../action/studentfile';
import * as Yup from 'yup';


export const FileInfo = ({
    activeStep,
    setActiveStep,
    handleBack,
    handleNext,
    steps }) => {
        const handleNext3 = () => {
            setActiveStep(activeStep + 1);
        };
        const studentFileInfo = useSelector((state) => state.StudenFileInfo.studentFileInfo);
        console.log("state loading file",studentFileInfo)
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
                    "student_id":"1"
                    }
                console.log(studentFileInfoData)
                handleNext3();
                dispatch(studentFileInfoAction(studentFileInfoData))
            }
        });
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom>
                        SEE Marksheet/GradeSheet
                    </Typography>
                    <TextField
                        required
                        id="seemarksheet"
                        name="seemarksheet"
                        fullWidth
                        autoComplete="given-name"
                        accept="image/*"
                        multiple type="file"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom>
                        SEE Character Certificate
                    </Typography>
                    <TextField
                        required
                        id="seecharacter"
                        name="seecharacter"
                        fullWidth
                        autoComplete="given-name"
                        accept="image/*"
                        multiple type="file"
                        variant="outlined"
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
                    />
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom>
                        Student Signature
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
                    />
                </Grid>
                <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }} xs={12} >
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
