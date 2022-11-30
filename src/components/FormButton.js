import React from 'react'
import Button from '@mui/material/Button';

export const FormButton = ({ activeStep, handleBack, handleNext, steps }) => {
  return (
    <div>
      {activeStep !== 0 && (
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1}}>
          Back
        </Button>
      )}
      <Button
        variant="contained"
        onClick={handleNext}
        sx={{ mt: 3, ml: 1 }}
      >
        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
      </Button>
    </div>
  )
}
