import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from "@material-ui/core/Box";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentFileInfoAction } from '../action/studentfile';
import { Divider } from '@mui/material';


export const DocumentForm = ({
    activeStep,
    setActiveStep,
    handleBack,
    handleNext,
    steps }) => {
    const handleSuccess = () => {
        setActiveStep(activeStep + 1);
    };
    const studentInfo = useSelector((state) => state.StudentInfo.studentInfo);
    console.log("state loading file",studentInfo)
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [seeTranscript, setSEETranscript] = useState(null);
    const [seeTranscriptUrl, setSEETranscriptUrl] = useState(null);
    const [seeCharacter, setSEECharacter] = useState(null);
    const [seeCharacterUrl, setSEECharacterUrl] = useState(null);
    const [marksheet, setMarksheet] = useState(null);
    const [marksheetUrl, setMarksheetUrl] = useState(null);
    const [character, setCharacter] = useState(null);
    const [characterUrl, setCharacterUrl] = useState(null);
    const [migration, setMigration] = useState(null);
    const [migrationUrl, setMigrationUrl] = useState(null);
    const [signature, setSignature] = useState(null);
    const [signatureUrl, setSignatureUrl] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            console.log(selectedImage)
            setImageUrl(URL.createObjectURL(selectedImage));
        }
        if (seeTranscript){
            setSEETranscriptUrl(URL.createObjectURL(seeTranscript));
        }
        if (seeCharacter){
            setSEECharacterUrl(URL.createObjectURL(seeCharacter));
        }
        if (marksheet){
            setMarksheetUrl(URL.createObjectURL(marksheet));
        }
        if (character){
            setCharacterUrl(URL.createObjectURL(character));
        }
        if (migration){
            setMigrationUrl(URL.createObjectURL(migration));
        }
        if (signature){
            setSignatureUrl(URL.createObjectURL(signature));
        }
    }, [selectedImage,seeTranscript,seeCharacter,marksheet,character,migration,signature]);
    console.log("Image Url :: ",seeTranscriptUrl,imageUrl)

    const handleDocumentAction = (e)=> (id) => {
            console.log('Inside address onsubmit.....')
            if (studentInfo) {
                const studentDocumentData = {
                    "photo": imageUrl,
                    "see_transcript":seeTranscriptUrl ,
                    "see_character": seeCharacterUrl,
                    "certificate_transcript":marksheetUrl,
                    "certificate_character": characterUrl,
                    "certificate_migration": migrationUrl,
                    "citizenship_front": "",
                    "citizenship_back": "",
                    "signatue":signatureUrl,
                    "student_id": studentInfo.ID,
                }
                console.log("Document Data ::",studentDocumentData)
                handleSuccess();
                dispatch(studentFileInfoAction(studentDocumentData))
            }
        }

    return (
        <form >
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={6}  >
                        <div style={{ paddingTop: '30px', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6" gutterBottom>
                               Student Photo
                            </Typography>
                            <input
                                accept="image/*"
                                type="file"
                                id="select-image"
                                style={{ display: "none", height: "150px" }}
                                onChange={(e) => setSelectedImage(e.target.files[0])}
                            />
                            <label htmlFor="select-image">
                                <Button style={{ height: '50px' }} variant="contained" color="primary" component="span">
                                    Upload Photo
                                </Button>
                            </label>
                        </div>
                    </Grid>
                    <div style={{ paddingTop: '30px', height: '100px', justifyContent: 'center' }}>
                        <Grid item xs={6} md={9} >
                            {imageUrl && selectedImage && (
                                <Box mt={2} textAlign="center">
                                    <Typography variant="h6" gutterBottom>
                                        Preview
                                    </Typography>
                                    <img src={imageUrl} alt={selectedImage.name} height="150px" />
                                </Box>
                            )}
                        </Grid>
                    </div>

                    <Grid item xs={6} >
                        <div style={{ paddingTop: '30px', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6" gutterBottom>
                                SEE GradeSheet
                            </Typography>
                            <input
                                accept="image/*"
                                type="file"
                                id="select-sgradesheet"
                                style={{ display: "none", height: "150px" }}
                                onChange={(e) => setSEETranscript(e.target.files[0])}
                            />
                            <label htmlFor="select-sgradesheet">
                                <Button style={{ height: '50px' }} variant="contained" color="primary" component="span">
                                    Upload SEE Marksheet
                                </Button>
                            </label>
                        </div>
                    </Grid>
                    <div style={{ paddingTop: '30px', height: '100px', justifyContent: 'center' }}>
                        <Grid item xs={6}  >
                            {seeTranscriptUrl && seeTranscript && (
                                <Box mt={2} textAlign="center">
                                    <Typography variant="h6" gutterBottom>
                                        Preview
                                    </Typography>
                                    <img src={seeTranscriptUrl} alt={seeTranscript.name} height="150px" />
                                </Box>
                            )}
                        </Grid>
                    </div>

                    <Grid item xs={6} >
                        <div style={{ paddingTop: '30px', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6" gutterBottom>
                                SEE Character
                            </Typography>
                            <input
                                accept="image/*"
                                type="file"
                                id="select-character"
                                style={{ display: "none", height: "150px" }}
                                onChange={(e) => setSEECharacter(e.target.files[0])}
                            />
                            <label htmlFor="select-character">
                                <Button style={{ height: '50px' }} variant="contained" color="primary" component="span">
                                    Upload SEE Character
                                </Button>
                            </label>
                        </div>
                    </Grid>
                   
                    <div style={{ paddingTop: '30px', height: '100px', justifyContent: 'center' }}>
                        <Grid item xs={6}>
                        {seeCharacterUrl && seeCharacter && (
                                <Box mt={2} textAlign="center">
                                     <Typography variant="h6" gutterBottom>
                                        Preview
                                    </Typography>
                                    <img src={seeCharacterUrl} alt={seeCharacter.name} height="150px" />
                                </Box>
                            )}
                        </Grid>
                    </div>
                   

                    <Grid item xs={6} >
                        <div style={{ paddingTop: '30px', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6" gutterBottom>
                                Certificate GradeSheet
                            </Typography>
                            <input
                                accept="image/*"
                                type="file"
                                id="select-cgradesheet"
                                style={{ display: "none", height: "150px" }}
                                onChange={(e) => setMarksheet(e.target.files[0])}
                            />
                            <label htmlFor="select-cgradesheet">
                                <Button style={{ height: '50px' }} variant="contained" color="primary" component="span">
                                    Upload Certificate GradeSheet
                                </Button>
                            </label>
                        </div>
                    </Grid>
                    <div style={{ paddingTop: '30px', height: '100px', justifyContent: 'center' }}>
                        <Grid item xs={6}  >
                            {marksheetUrl && marksheet && (
                                <Box mt={2} textAlign="center">
                                    <Typography variant="h6" gutterBottom>
                                        Preview
                                    </Typography>
                                    <img src={marksheetUrl} alt={marksheet.name} height="150px" />
                                </Box>
                            )}
                        </Grid>
                    </div>

                    <Grid item xs={6} >
                        <div style={{ paddingTop: '30px', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6" gutterBottom>
                                Certificate Character
                            </Typography>
                            <input
                                accept="image/*"
                                type="file"
                                id="select-ccharacter"
                                style={{ display: "none", height: "150px" }}
                                onChange={(e) => setCharacter(e.target.files[0])}
                            />
                            <label htmlFor="select-ccharacter">
                                <Button style={{ height: '50px' }} variant="contained" color="primary" component="span">
                                    Upload Certificate Character
                                </Button>
                            </label>
                        </div>
                    </Grid>
                    <div style={{ paddingTop: '30px', height: '100px', justifyContent: 'center' }}>
                        <Grid item xs={6}  >
                            {characterUrl && character && (
                                <Box mt={2} textAlign="center">
                                    <Typography variant="h6" gutterBottom>
                                        Preview
                                    </Typography>
                                    <img src={characterUrl} alt={character.name} height="150px" />
                                </Box>
                            )}
                        </Grid>
                        <Divider/>
                    </div>

                    <Grid item xs={6} >
                        <div style={{ paddingTop: '30px', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6" gutterBottom>
                                Certificate Migration
                            </Typography>
                            <input
                                accept="image/*"
                                type="file"
                                id="select-migration"
                                style={{ display: "none", height: "150px" }}
                                onChange={(e) => setMigration(e.target.files[0])}
                            />
                            <label htmlFor="select-migration">
                                <Button style={{ height: '50px' }} variant="contained" color="primary" component="span">
                                    Upload Certificate Migration
                                </Button>
                            </label>
                        </div>
                    </Grid>
                    <div style={{ paddingTop: '30px', height: '100px', justifyContent: 'center' }}>
                        <Grid item xs={6}  >
                            {migrationUrl && migration && (
                                <Box mt={2} textAlign="center">
                                    <Typography variant="h6" gutterBottom>
                                        Preview
                                    </Typography>
                                    <img src={migrationUrl} alt={migration.name} height="150px" />
                                </Box>
                            )}
                        </Grid>
                    </div>
                    
                    <Grid item xs={6} >
                        <div style={{ paddingTop: '30px', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h6" gutterBottom>
                                Student Signature
                            </Typography>
                            <input
                                accept="image/*"
                                type="file"
                                id="select-signature"
                                style={{ display: "none", height: "150px" }}
                                onChange={(e) => setSignature(e.target.files[0])}
                            />
                            <label htmlFor="select-signature">
                                <Button style={{ height: '50px' }} variant="contained" color="primary" component="span">
                                    Upload Student Signature
                                </Button>
                            </label>
                        </div>
                    </Grid>
                    <div style={{ paddingTop: '30px', height: '100px', justifyContent: 'center' }}>
                        <Grid item xs={6}  >
                            {signatureUrl && signature && (
                                <Box mt={2} textAlign="center">
                                    <Typography variant="h6" gutterBottom>
                                        Preview
                                    </Typography>
                                    <img src={signatureUrl} alt={signature.name} height="150px" />
                                </Box>
                            )}
                        </Grid>
                    </div> 
                   
                    <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }} xs={12}>
                        {activeStep !== 0 && (
                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                              Back
                            </Button>
                        )}
                        <Button
                            type='submit'
                            variant="contained"
                            onClick={handleDocumentAction()}
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
