import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormButton } from './FormButton';

export const EducationForm = (
    {
        activeStep,
        setActiveStep,
        handleBack,
        handleNext,
        steps }
) => {
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
                        id="cPassedYear"
                        name="cPassedYear"
                        label="Passed Year"
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
