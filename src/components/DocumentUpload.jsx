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
    const studentInfo = useSelector((state) => state.StudentInfo.studentInfo);
    console.log("state loading file", studentInfo)
    const dispatch = useDispatch();
    const [photo, setPhoto] = useState(null);
    const [certificate, setCertificate] = useState(null);
    const [signature, setSignature] = useState(null);
    const [photoURL, setPhotoURL] = useState(null);
    const [certificateURL, setCertificateURL] = useState(null);

    // State variables to track completion of required fields
    const [isPhotoCompleted, setIsPhotoCompleted] = useState(false);
    const [isCertificateCompleted, setIsCertificateCompleted] = useState(false);
    const [isSignatureCompleted, setIsSignatureCompleted] = useState(false);

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
            // Handle other file types here
            default:
                break;
        }

    };

    // Function to handle the overall submission
    const handleSubmit = async () => {
        console.log("Clicked Submit button");
        try {
            // Upload each file to the server and get the file URLs
            if (photo) {
                const url = await uploadFile(photo, 'photo');
                console.log("Return Photo URL :: ", url)
                setPhotoURL(url);
            }

            if (certificate) {
                const url = await uploadFile(certificate, 'certificate');
                console.log("Return Cert URL :: ", url)
                setCertificateURL(url);
            }
            console.log("File URL :: ", photoURL, certificateURL)
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
        setIsPhotoCompleted(false);
        setIsCertificateCompleted(false);
        setIsSignatureCompleted(false);
    };

    // Check if all required fields are completed
    const isFormCompleted = isPhotoCompleted && isCertificateCompleted&&isSignatureCompleted;
    // Add additional checks for other required fields
    useEffect(() => {
        if (photoURL && certificateURL) {
            // Call the second API with the file URLs
            const data = {
                see_transcript: photoURL,
                see_character: certificateURL,
                certificate_transcript: "",
                certificate_character: "",
                certificate_migration: "",
                citizenship_front: "",
                citizenship_back: "",
                student_id: studentInfo.ID,
            };
            dispatch(studentFileInfoAction(data))
        }
    }, [photoURL, certificateURL]);

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
                        name="Certificate"
                        required={true}
                        supportedFormats=".jpg, .png"
                        onUpload={(file) => handleUpload(file, 'certificate')}
                        uploadSizeRange={{ min: 0, max: 10 }} // Provide the desired size range in MB
                        onCompletionChange={setIsCertificateCompleted}
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
