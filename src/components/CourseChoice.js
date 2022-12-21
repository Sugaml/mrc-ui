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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses, getCurrentCourse } from '../action/courses';


export const CourseChoice = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const token = useSelector((state) => state.auth.isAuthenticated);
    const courses = useSelector((state) => state.Courses.courses);

    React.useEffect(() => {
        dispatch(getAllCourses())
    }, [dispatch])
    console.log(courses)
    const handleEnroll = (id) => () => {
        console.log("course id :: ", id)
        dispatch(getCurrentCourse(token, id))
        return navigate("/enroll");
    }

    return (
        <div>
            <Container disableGutters maxWidth="xl" component="main" sx={{ pt: 2, pb: 6 }}>

                <Typography
                    component="h6"
                    variant="h6"
                    color="text.primary"
                    gutterBottom
                >
                    We offers
                </Typography>
            </Container>
            <Container maxWidth="lg" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {courses.map((course) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={course.name}
                            xs={12}
                            sm={course.name === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={course.name}
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
                                            Rs.{course.fee}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /semester
                                        </Typography>
                                    </Box>
                                    <Divider />
                                    <MenuList>
                                        <MenuItem>
                                            <ListItemText>Duration</ListItemText>
                                            <Typography variant="body2">
                                                {course.duration}/month
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <ListItemText>Years</ListItemText>
                                            <Typography variant="body2">
                                                {course.year}/yrs
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <ListItemText>Credit Hours</ListItemText>
                                            <Typography variant="body2">
                                                {course.credit_hours}
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <ListItemText>Subject</ListItemText>
                                            <Typography variant="body2">
                                                {course.subject}
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <ListItemText>Seat</ListItemText>
                                            <Typography variant="body2">
                                                {course.quota}
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <ListItemText>Faculty</ListItemText>
                                            <Typography variant="body2">
                                                {course.faculty}
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <ListItemText>Affilated By</ListItemText>
                                            <Typography variant="body2">
                                                {course.affiliated_by}
                                            </Typography>
                                        </MenuItem>
                                    </MenuList>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth onClick={handleEnroll(course.ID)} variant="contained">
                                        Enroll Now
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}