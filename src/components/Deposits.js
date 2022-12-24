import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Box, Button } from '@mui/material';

function preventDefault(event) {
  event.preventDefault();
}

export const  Deposits=()=> {
  return (
    <React.Fragment>
      <Title  component="p" >Current Amount</Title>
      <Typography sx={{ pl:'10px' }} component="p" variant="h4">
        Rs. 10
      </Typography>
      <div>
      <Box  sx={{ '& button': { m: 1 } }}>
      <div>
        <Button  size="large" variant="contained">Make Payment</Button>
      </div>
      </Box>
      </div>
    </React.Fragment>
  );
}
