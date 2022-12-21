import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import khalti from '../../src/static/images/buttons/khalti.png'

const emails = ['username@gmail.com', 'user02@gmail.com'];

const images = [
  {
    url: khalti,
    title: 'Khalti',
    width: '50%',
  },
  {
    url: '/static/images/buttons/khalti.jpg',
    title: 'ESewa',
    width: '50%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [openDialog,setOpenDialog]=React.useState(false)

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handleClickOpenDialog = () => {
    setOpenDialog(true)
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select Payment Gateway</DialogTitle>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
            onClick={handleClickOpenDialog}
          >
            <ImageSrc style={{ backgroundImage: `url(${khalti})` }} />
            {/* <img src={khalti} alt="khalti"></img> */}
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
              </Typography>
            </Image>
          </ImageButton>
          
        ))}
      </Box>
      <KhaltiLogin
      openDialog={openDialog}
      setOpenDialog={setOpenDialog}
      />
    </Dialog>
  );
}



SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export const PaymentPopup = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Card sx={{ minWidth: 100 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} variant="h6" >
            Payment Details
          </Typography>
          <Typography variant="h6" gutterBottom>
            Enrollment Fee := NRs.30000
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" onClick={handleClickOpen}>
            Make Payment
          </Button>
          <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </CardActions>
      </Card>
    </div>
  );
}

function KhaltiLogin(props) {
  const { onClose, selectedValue, openDialog, setOpenDialog } = props;

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handleClickOpen = () => {

  };

  return (
    <div>
      <Dialog onClose={handleClose} open={openDialog}>
      <DialogTitle>NWE</DialogTitle>
      {/* <Card sx={{ minWidth: 100 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} variant="h6" >
            Payment Details
          </Typography>
          <Typography variant="h6" gutterBottom>
            Enrollment Fee := NRs.30000
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" onClick={handleClickOpen}>
            Make Payment
          </Button>
          <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </CardActions> */}
      {/* </Card> */}
      </Dialog>
    </div>
  );
}

