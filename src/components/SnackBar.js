import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomizedSnackbars=({openState,cb})=> {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
React.useEffect(()=>{
    setOpen(openState)
},[])
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    // setOpen(false);
    cb()
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:'top',horizontal: 'right' }}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
