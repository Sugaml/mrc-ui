import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormButton } from './FormButton';


export const FileInfo = ({
    activeStep,
    setActiveStep,
    handleBack,
    handleNext,
    steps }) => {
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
