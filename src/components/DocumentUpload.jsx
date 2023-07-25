import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Paper, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from "react-redux";
import FileRow from './FileRow';
import { studentFileInfoAction, uploadFile } from '../action/studentfile';

const DocumentUpload = ({
    activeStep,
    setActiveStep,
    handleBack,
    handleNext,
    steps
}) => {
    const handleNextEducation = () => {
        setActiveStep(activeStep + 1);
    };
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const studentInfo = useSelector((state) => state.StudentInfo.studentInfo);
    console.log("state loading file",isAuthenticated, studentInfo)
    const dispatch = useDispatch();
    
    const [photo, setPhoto] = useState(null);
    const [certificate, setCertificate] = useState(null);
    const [signature, setSignature] = useState(null);
    const [gradesheet, setGradesheet] = useState(null);
    const [transcript, setTranscript] = useState(null);
    const [character, setCharacter] = useState(null);

    const [photoURL, setPhotoURL] = useState(null);
    const [certificateURL, setCertificateURL] = useState(null);
    const [signatureURL, setSignatureURL] = useState(null);
    const [gradesheetURL, setGradesheetURL] = useState(null);
    const [transcriptURL, setTranscriptURL] = useState(null);
    const [characterURL, setCharacterURL] = useState(null);

    // State variables to track completion of required fields
    const [isPhotoCompleted, setIsPhotoCompleted] = useState(false);
    const [isCertificateCompleted, setIsCertificateCompleted] = useState(false);
    const [isSignatureCompleted, setIsSignatureCompleted] = useState(false);
    const [isGradesheetCompleted, setIsGradesheetCompleted] = useState(false);
    const [isTanscriptCompleted, setIsTranscriptCompleted] = useState(false);
    const [isCharacterCompleted, setIsCharacterCompleted] = useState(false);

    // Function to handle file upload
    const handleUpload = (file, fileType) => {
        // Update the state with the file data and set completion status
        switch (fileType) {
            case 'photo':
                setPhoto(file);
                setIsPhotoCompleted(true);
                break;
            case 'certificate':
                setCertificate(file);
                setIsCertificateCompleted(true);
                break;
            case 'signature':
                setSignature(file);
                setIsSignatureCompleted(true);
                break;
            case 'gradesheet':
                setGradesheet(file);
                setIsGradesheetCompleted(true);
                break;
            case 'transcript':
                setTranscript(file);
                setIsTranscriptCompleted(true);
                break;
            case 'character':
                setCharacter(file);
                setIsCharacterCompleted(true);
                break;
            default:
                break;
        }

    };

    // Function to handle the overall submission
    const handleSubmit = async () => {
        console.log("Clicked Submit button");
        try {
            if (isAuthenticated){
                if (photo) {
                    const url = await uploadFile(isAuthenticated,photo, 'photo');
                    console.log("Return Photo URL :: ", url)
                    setPhotoURL(url);
                }
    
                if (certificate) {
                    const url = await uploadFile(isAuthenticated,certificate, 'certificate');
                    console.log("Return Cert URL :: ", url)
                    setCertificateURL(url);
                }
    
                if (signature) {
                    const url = await uploadFile(isAuthenticated,signature, 'signature');
                    setSignatureURL(url);
                }
    
                if (gradesheet) {
                    const url = await uploadFile(isAuthenticated,signature, 'gardesheet');
                    setGradesheetURL(url);
                }
    
                if (transcript) {
                    const url = await uploadFile(isAuthenticated,transcript, 'transcript');
                    setTranscriptURL(url);
                }
    
                if (gradesheet) {
                    const url = await uploadFile(isAuthenticated,character, 'character');
                    setCharacterURL(url);
                }
            }
        } catch (error) {
            console.error('Form submission failed:', error);
        }
        resetForm();
    };

    // Function to reset the form after submission
    const resetForm = () => {
        setPhoto(null);
        setCertificate(null);
        setSignature(null);
        setGradesheet(null)
        setTranscript(null);
        setCharacter(null);

        setIsPhotoCompleted(false);
        setIsCertificateCompleted(false);
        setIsSignatureCompleted(false);
        setIsGradesheetCompleted(false);
        setIsTranscriptCompleted(false);
        setIsCharacterCompleted(false);
    };

    // Check if all required fields are completed
    const isFormCompleted = isPhotoCompleted && isCertificateCompleted && isSignatureCompleted && isGradesheetCompleted  && isTanscriptCompleted && isCharacterCompleted;
    // Add additional checks for other required fields
    useEffect(() => {
        if (photoURL && certificateURL && gradesheetURL && signatureURL && transcriptURL && characterURL) {
            // Call the second API with the file URLs
            const data = {
                photo: photoURL,
                see_transcript: gradesheetURL,
                see_character: certificateURL,
                certificate_transcript: transcriptURL,
                certificate_character: characterURL,
                certificate_migration: "",
                citizenship_front: "",
                citizenship_back: "",
                signature: signatureURL,
                student_id: studentInfo.ID,
            };
            dispatch(studentFileInfoAction(data))
        }
    }, [photoURL, certificateURL, signatureURL, gradesheetURL, transcriptURL, characterURL]);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Required/Optional</TableCell>
                        <TableCell>Supported Format</TableCell>
                        <TableCell>Upload</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <FileRow
                        name="Photo"
                        required={true}
                        supportedFormats=".jpg, .png"
                        onUpload={(file) => handleUpload(file, 'photo')}
                        uploadSizeRange={{ min: 0, max: 10 }} // Provide the desired size range in MB
                        onCompletionChange={setIsPhotoCompleted}
                    />

                    <FileRow
                        name="SEE Marksheet/Gradesheet"
                        required={true}
                        supportedFormats=".jpg, .png"
                        onUpload={(file) => handleUpload(file, 'gradesheet')}
                        uploadSizeRange={{ min: 0, max: 10 }} // Provide the desired size range in MB
                        onCompletionChange={setIsGradesheetCompleted}
                    />

                    <FileRow
                        name="SEE Character"
                        required={true}
                        supportedFormats=".jpg, .png"
                        onUpload={(file) => handleUpload(file, 'certificate')}
                        uploadSizeRange={{ min: 0, max: 10 }} // Provide the desired size range in MB
                        onCompletionChange={setIsCertificateCompleted}
                    />

                    <FileRow
                        name="Certificate Transcript/Gradesheet"
                        required={true}
                        supportedFormats=".jpg, .png"
                        onUpload={(file) => handleUpload(file, 'transcript')}
                        uploadSizeRange={{ min: 0, max: 10 }} // Provide the desired size range in MB
                        onCompletionChange={setIsTranscriptCompleted}
                    />

                    <FileRow
                        name="Certificate Character"
                        required={true}
                        supportedFormats=".jpg, .png"
                        onUpload={(file) => handleUpload(file, 'character')}
                        uploadSizeRange={{ min: 0, max: 10 }} // Provide the desired size range in MB
                        onCompletionChange={setIsCharacterCompleted}
                    />

                    <FileRow
                        name="Signature"
                        required={true}
                        supportedFormats=".jpg, .png"
                        onUpload={(file) => handleUpload(file, 'signature')}
                        uploadSizeRange={{ min: 0, max: 10 }} // Provide the desired size range in MB
                        onCompletionChange={setIsSignatureCompleted}
                    />

                </TableBody>
            </Table>
            <Grid item sx={{ m: 2, display: 'flex', justifyContent: 'flex-end' }} xs={12}>
                {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                    </Button>
                )}
                <Button
                    type='submit'
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={!isFormCompleted}
                    sx={{ mt: 3, ml: 1 }}
                >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
            </Grid>
        </TableContainer>
    );
};

export default DocumentUpload;
