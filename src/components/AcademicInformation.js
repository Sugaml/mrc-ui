import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { getStudentGeneralAction } from '../action/user';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ListItem } from '@mui/material';

const theme = createTheme();


export const AcademicInformation = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.isAuthenticated);
    const student = useSelector((state) => state.StudentGeneral.currentStudent);
    React.useEffect(() => {
        dispatch(getStudentGeneralAction(token))
    }, [dispatch, token])
    return (
        student && !!student.ID && <div>
            {/* <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    > */}
                        <Link sx={{ width: 400 }}>
                            <ListItem
                                innerDivStyle={{ paddingLeft: 80 }}
                                leftAvatar={
                                    <img style={{ height: '100%', margin: -16 }} src="https://zartnerds.files.wordpress.com/2015/10/thumbnail.png" />
                                }
                                primaryText="Some Title"
                                secondaryText="That's a good looking thumbnail"
                            >
                        </ListItem>
                        </Link>
                        {/* <Avatar sizes='150' alt={student.first_name} src="https://www.w3schools.com/howto/img_avatar.png" />
                        <Typography component="h1" variant="h5">
                            {student.first_name} {student.last_name}
                        </Typography>
                        <Typography component="h1" variant="h5">
                            {student.gender}
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            <Grid container>
                                <Grid item xs>
                                    <Typography component="h1" variant="h5">
                                        {student.first_name} {student.last_name}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider> */}
        </div>
    );
}