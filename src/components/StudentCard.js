import { Avatar, Card, CardContent } from '@mui/material';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import MenuList from '@mui/material/MenuList';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { getStudentGeneralAction } from '../action/user';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { CourseChoice } from './CourseChoice';



export const StudentCard = () => {
    const dispatch = useDispatch();

    const token = useSelector((state) => state.auth.isAuthenticated);
    const student = useSelector((state) => state.StudentGeneral.currentStudent);
    const loading = useSelector((state) => state.StudentGeneral.isStudentGeneral);

    const getStudentGeneral = React.useCallback(() => dispatch(getStudentGeneralAction(token)), [dispatch, token]);

    React.useEffect(() => {
        getStudentGeneral();
    }, [getStudentGeneral]);
    return (
        <div>
            {
                student ? (
                    <div>
                        <Card sx={{ maxWidth: 345 }}>
                            <Typography variant="h5" component="div">
                                General Information
                            </Typography>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Avatar src={student.firstname} sx={{ mr: 2 }} />
                                    <Typography variant="h5" component="div">
                                        {student.firstname}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="body2" sx={{ mb: 1 }}>
                                        Email: {student.email}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mb: 1 }}>
                                        Gender: {student.gender}
                                    </Typography>
                                    {/* <Typography variant="body2" sx={{ mb: 1 }}>
                                        Course Name: {courseName}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mb: 1 }}>
                                        Level: {level}
                                    </Typography> */}
                                    {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {address}
                                </Typography> */}
                                    <Typography variant="body2">
                                        {student.is_approved ? 'Approved' : 'Not Approved'}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </div>
                ) : (
                    <div>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={loading}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </div>
                )}
        </div>
    );
};
