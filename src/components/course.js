import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import MenuList from '@mui/material/MenuList';
import Divider from '@mui/material/Divider';
import { Footer } from './Footer';
import { useNavigate } from "react-router-dom";


const tiers = [
    {
        title: 'BICTE',
        price: '25000',
        description: [
            {
                title: 'Total Duration',
                titleValue: '4 years'
            },
            {
                title: 'Total Semester',
                titleValue: '8'
            },
            {
                title: 'Credit Hours',
                titleValue: '138'
            },
            {
                title: 'Subjects',
                titleValue: '45'
            },
            {
                title: 'Seat',
                titleValue: '40'
            },
            {
                title: 'Faculty',
                titleValue: 'Education'
            },
            {
                title: 'Affilated By',
                titleValue: 'TU'
            },
        ],
        buttonText: 'Enroll Now',
        buttonVariant: 'contained',
    },
    {
        title: 'BCA',
        subheader: 'Most popular',
        price: '25000',
        description: [
            {
                title: 'Total Duration',
                titleValue: '4 years'
            },
            {
                title: 'Total Semester',
                titleValue: '8'
            },
            {
                title: 'Credit Hours',
                titleValue: '138'
            },
            {
                title: 'Subjects',
                titleValue: '45'
            },
            {
                title: 'Seat',
                titleValue: '40'
            },
            {
                title: 'Faculty',
                titleValue: 'Education'
            },
            {
                title: 'Affilated By',
                titleValue: 'TU'
            },
        ],
        buttonText: 'Enroll Now',
        buttonVariant: 'contained',
    },
    {
        title: 'BIM',
        price: '30000',
        description: [
            {
                title: 'Total Duration',
                titleValue: '4 years'
            },
            {
                title: 'Total Semester',
                titleValue: '8'
            },
            {
                title: 'Credit Hours',
                titleValue: '138'
            },
            {
                title: 'Subjects',
                titleValue: '45'
            },
            {
                title: 'Seat',
                titleValue: '40'
            },
            {
                title: 'Faculty',
                titleValue: 'Education'
            },
            {
                title: 'Affilated By',
                titleValue: 'TU'
            },
        ],
        buttonText: 'Enroll Now',
        buttonVariant: 'contained',
    },
];


export const Course = () => {
    const navigate =useNavigate();
    
    const handleEnroll=()=>{
        return navigate("/online");
    }

    return (
        <div>
            <Container disableGutters maxWidth="xl" component="main" sx={{ pt: 2, pb: 6 }}>
                <Typography
                    component="h2"
                    variant="h3"
                    color="text.primary"
                    gutterBottom
                >
                    Our Courses
                </Typography>
                {/* <Typography variant="h4"  color="text.secondary" component="p">
                Bachelor of Education in Information Communication Technology (BEd ICT) is an undergraduate program
                    offered by Tribhuvan University, under the Faculty of Education. It is a 4-year semester-based program
                    spreading over 8 semesters covering a total of 138 credit hours, that includes 12 credit hours for
                    communication skills courses, 24 credit hours for educational core courses, 60 credit hours for specialization
                    major subjects, 30 credit hours for minor subjects and 9 credit hours for teaching internship/practicum.
                </Typography> */}
            </Container>
            {/* End hero unit */}
            <Container maxWidth="lg" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    titleTypographyProps={{ align: 'center' }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography component="h3" variant="h4" color="text.primary">
                                            Rs.{tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /semester
                                        </Typography>
                                    </Box>
                                    <Divider />
                                    <MenuList>
                                        {tier.description.map((line) => (
                                            <MenuItem>
                                                <ListItemText>{line.title}</ListItemText>
                                                <Typography variant="body2">
                                                    {line.titleValue}
                                                </Typography>
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth onClick={handleEnroll} variant={tier.buttonVariant}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer/>
        </div>
    )
}