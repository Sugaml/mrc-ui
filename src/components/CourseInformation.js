import * as React from 'react';
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
import { Box } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { getStudentGeneralAction } from '../action/user';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { CourseChoice } from './CourseChoice';

export const CourseInformation = () => {
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
             student.cid && student.course ? (
              <div>
                <Grid
                  item
                  key={student.course.name}
                  xs={12}
                  sm={student.course.name === 'Enterprise' ? 12 : 6}
                  md={6}
                >
                  <Card>
                    <CardHeader
                      title={student.course.name}
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
                          Rs.{student.course.fee}
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
                            {student.course.duration}/month
                          </Typography>
                        </MenuItem>
                        <MenuItem>
                          <ListItemText>Years</ListItemText>
                          <Typography variant="body2">
                            {student.course.year}/yrs
                          </Typography>
                        </MenuItem>
                        <MenuItem>
                          <ListItemText>Credit Hours</ListItemText>
                          <Typography variant="body2">
                            {student.course.credit_hours}
                          </Typography>
                        </MenuItem>
                        <MenuItem>
                          <ListItemText>Subject</ListItemText>
                          <Typography variant="body2">
                            {student.course.subject}
                          </Typography>
                        </MenuItem>
                        <MenuItem>
                          <ListItemText>Seat</ListItemText>
                          <Typography variant="body2">
                            {student.course.quota}
                          </Typography>
                        </MenuItem>
                        <MenuItem>
                          <ListItemText>Faculty</ListItemText>
                          <Typography variant="body2">
                            {student.course.faculty}
                          </Typography>
                        </MenuItem>
                        <MenuItem>
                          <ListItemText>Affilated By</ListItemText>
                          <Typography variant="body2">
                            {student.course.affiliated_by}
                          </Typography>
                        </MenuItem>
                      </MenuList>
                    </CardContent>
                  </Card>
                </Grid>
              </div>

            ) : (
              <div>
                <Box sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" gutterBottom>
                    Hello , {student.firstname + student.lastname}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    You are not Enroll in Our course.
                  </Typography>
                  <div>
                    <p>Click <a href="https://mrc.babulal.com.np/profile">click here</a></p>
                  </div>
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