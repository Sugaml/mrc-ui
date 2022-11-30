import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const footers = [
    {
        title: 'Contact',
        description: ['Address: Tahachal, Kathmandu', 'PO Box: 20828, Nepal', 'Phone :  01-537 1728', 'Email : mahendraratnacampus@gmail.com'],
    },
    {
        title: 'Quick Links',
        description: [
            'Home',
            'Programs',
            'Notices',
            'Addmission',
            'Downloads',
        ],
    },
    {
        title: 'Useful Links',
        description: ['National Examinations Board (NEB)', 'Tribhuvan University (TU) ', 'Faculty of Education', 'Ministry of Education'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];

function Copyright(props) {
    return (
        <Typography variant="body2" color="white" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Mahendra Ratna Campus
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const Footer = () => {
    return (
        <div>
        <div style={{backgroundColor:'white',padding:'15px',}}>
                {/* <Typography variant="h3" color="blue" gutterBottom>
                   Mahendra Ratna Campus
                </Typography> */}
                <Grid container spacing={4} justifyContent="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="text.primary"  gutterBottom  sx={{ pl: 2.5, pr:2.5}}>
                                {footer.title}
                            </Typography>
                            <ul >
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="text.secondary">
                                            {item}
                                        </Link>
                                     </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                </div>
                <div  style={{backgroundColor:'blue',padding:'15px',}}>
                    <Copyright sx={{mt: 3 }} />
                </div>
        </div>
    )
}

