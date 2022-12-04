import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AddressForm } from './AddressForm';
import { StudentInfo } from './StudentInfo';
import { FileInfo } from './FileInfo';
import { EducationForm } from './EducationForm';
import { StudentRegister } from './StudentRegister'
import { StudentLogin } from './StudentLogin'
import { CourseChoice } from './CourseChoice'
import { PaymentLogin } from './PaymentLogin';
import { PaymentGateway } from './PaymentGateway';
import { PaymentToken } from './PaymentToken';

const steps = [ 'Select Gateway', 'Payment Credential', 'Payment Token'];

function getStepContent(activeStep,setActiveStep, steps, handleBack, handleNext) {
  switch (activeStep) {
    case 0:
      return <PaymentGateway
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      handleBack={handleBack}
      handleNext={handleNext}
      steps={steps}
      />;
    case 1:
      return <PaymentLogin
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      handleBack={handleBack}
      handleNext={handleNext}
      steps={steps}
      />;
    case 2:
      return <PaymentToken
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      handleBack={handleBack}
      handleNext={handleNext}
      steps={steps}
      />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export const Billing = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="100%" sx={{ pt: 3, mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { pt: 10, xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
           Billing Section
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Your payment is saved successfully.
                </Typography>
                <Typography variant="subtitle1">
                  Thank you.
                  {/* Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped. */}
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep,setActiveStep, steps, handleBack, handleNext)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}