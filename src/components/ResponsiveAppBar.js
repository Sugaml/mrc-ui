import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudentGeneralAction, getUserAction } from '../action/user';
import { logout } from '../action/auth';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import PaymentIcon from '@mui/icons-material/Payment';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Drawer,Divider, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export const ResponsiveAppBar = ({ children }) => {
  const drawerWidth = 240;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.UserInfo.user);
  const student = useSelector((state) => state.StudentGeneral.currentStudent);
  const loading = useSelector((state) => state.StudentGeneral.isStudentGeneral);

const getUser = React.useCallback(() => dispatch(getUserAction(token)), [dispatch, token]);
const getStudentGeneral = React.useCallback(() => dispatch(getStudentGeneralAction(token)), [dispatch, token]);

React.useEffect(() => {
    getUser();
    getStudentGeneral();
}, [getUser, getStudentGeneral]);


  return (
    <div>
        {
          user && student ? (
            <div>
            <Box sx={{ display: 'flex' }}>
             <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
               <Toolbar>
                 <IconButton
                   size="large"
                   edge="start"
                   color="inherit"
                   aria-label="menu"
                   sx={{ mr: 2 }}
                 >
                   <MenuIcon />
                 </IconButton>
                 <Avatar sx={{ bgcolor: '#f50057', mr: 2 }}> {student.firstname}</Avatar>
                 <Typography variant="h6" noWrap>
                 {student.firstname + " "+ student.lastname}
                 </Typography>
               </Toolbar>
             </AppBar>
             <Drawer
               sx={{
                 width: drawerWidth,
                 flexShrink: 0,
                 '& .MuiDrawer-paper': {
                   width: drawerWidth,
                   boxSizing: 'border-box',
                 },
               }}
               variant="permanent"
               anchor="left"
             >
               <Toolbar>
                 <Avatar sx={{ bgcolor: '#f50057', mr: 2 }}>{student.firtname}</Avatar>
                 <Typography variant="h6" noWrap>
                   {student.firtname}
                 </Typography>
               </Toolbar>
               <Divider />
               <List>
                 <ListItem button onClick={() => navigate('/profile')}>
                   <ListItemIcon>
                     <DashboardIcon />
                   </ListItemIcon>
                   <ListItemText primary=  {student.firstname + " "+ student.lastname} />
                 </ListItem>
                 <ListItem button onClick={() => navigate('/course')}>
                   <ListItemIcon>
                     <SchoolIcon />
                   </ListItemIcon>
                   <ListItemText primary="Courses" />
                 </ListItem>
                 <ListItem button onClick={() => navigate('/payment')}>
                   <ListItemIcon>
                     <PaymentIcon />
                   </ListItemIcon>
                   <ListItemText primary="Payments" />
                 </ListItem>
                 <ListItem button onClick={() => navigate('/payment-history')}>
                   <ListItemIcon>
                     <HistoryIcon />
                   </ListItemIcon>
                   <ListItemText primary="Payment History" />
                 </ListItem>
               </List>
               <Divider />
               <List>
                 <ListItem button>
                   <ListItemIcon>
                     <SettingsIcon />
                   </ListItemIcon>
                   <ListItemText primary="Settings" />
                 </ListItem>
                 <ListItem button onClick={() => navigate('/logout')}>
                   <ListItemIcon>
                     <LogoutIcon />
                   </ListItemIcon>
                   <ListItemText primary="Logout" />
                 </ListItem>
               </List>
             </Drawer>
             <Box component="main" 
             sx={{ flexGrow: 1, p: 3,mt:7 }}>
             {children}
             </Box>
             </Box>
           </div >
            )
            :(
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
export default ResponsiveAppBar;
