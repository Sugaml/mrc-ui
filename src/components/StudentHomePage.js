import * as React from 'react';
import { Box, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { getStudentGeneralAction } from '../action/user';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { CourseChoice } from './CourseChoice';
import { StudentCard } from './StudentCard';

export const StudentHomePage = () => {
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
            {student ? (
                <div>
                    {
                        !student.is_approved?(
                            <div>
                            <Box sx={{ flexGrow: 1, p: 3 }}>
                                <Typography variant="h5" gutterBottom>
                                    Hello , {student.firstname + student.lastname}
                                </Typography>
                                <CourseChoice />
                            </Box>
                        </div>
                        ):(
                            <div>
                            <StudentCard/>
                            <Box sx={{ flexGrow: 1, p: 3 }}>
                            <Typography variant="h5" gutterBottom>
                                  Recent Activities
                                </Typography>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Course</TableCell>
                                                <TableCell align="right">Enrollment Date</TableCell>
                                                <TableCell align="right">Payment Date</TableCell>
                                                <TableCell align="right">Amount Paid</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Mathematics</TableCell>
                                                <TableCell align="right">Jan 01, 2022</TableCell>
                                                <TableCell align="right">Jan 10, 2022</TableCell>
                                                <TableCell align="right">$100</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>English</TableCell>
                                                <TableCell align="right">Feb 01, 2022</TableCell>
                                                <TableCell align="right">Feb 10, 2022</TableCell>
                                                <TableCell align="right">$90</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </div>
                        )
                    }
                </div>
            )
                : (
                    <div>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={loading}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </div>
                )
            }
        </div>
    );
}
