import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getUserAction } from '../action/user';
import { logout } from '../action/auth';


const mdTheme = createTheme();


const settings = ['Profile', 'Logout'];
const programs = [
  {
    name: 'BICT',
    path: '/menu'
  },
  {
    name: 'BIM',
    path: '/menu'
  }
  , {
    name: 'BSc.CSIT',
    path: '/menu'
  },
];

export const ResponsiveAppBar = ({ children }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElPrograms, setAnchorElPrograms] = React.useState(null);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.UserInfo.user);
 
  React.useEffect(() => {
    dispatch(getUserAction(token))
  }, [dispatch, token])

  const navigate = useNavigate();
  const handleStepContent = (step) => () => {
    console.log(step)
    switch (step) {
      case 0:
        return navigate("/profile");
      case 1:  
        return navigate("/account");
      // case 2: 
      //   return navigate("/home")
      // case 3:
      //   return navigate("/courses")
      default:
        return navigate("/menu")
    }
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSettingMenu = (handleKeys) => (event) => {
    setAnchorElUser(null);
    if (!handleKeys) return
    if (handleKeys.toLowerCase()==="logout"){
      dispatch(logout())
    }
    navigate("/" + handleKeys.toLowerCase())
  };

  const handleOpenProgramsMenu = (event) => {
    setAnchorElPrograms(event.currentTarget);
  }
  const pages = [
    {
      page:user.username,
      indexs: 0
    },
    {
      page: 'Account',
      indexs: 1
    }
    // , {
    //   page: 'Notice',
    //   indexs: 2
    // },
    // {
    //   page: 'Courses',
    //   indexs: 3
    // }
  ];

  const handleCloseProgramsMenu = () => {
    setAnchorElPrograms(null);
  }

  return (
    <div>
      <ThemeProvider theme={mdTheme}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h4"
                noWrap
                component="a"
                href="/online"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                MRC
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((data) => (
                  <Button
                    key={data.page}
                    onClick={handleStepContent(data.indexs)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {data.page}
                  </Button>
                ))}
                <Menu
                  sx={{ mt: '45px'}}
                  id="menu-appbar"
                  anchorEl={anchorElPrograms}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElPrograms)}
                  onClose={handleCloseProgramsMenu}
                >
                  {programs.map((program) => (
                    <MenuItem key={program} onClick={handleCloseProgramsMenu}
                      onMouseEnter={(e) => e.target.style.color = 'blue' } >
                      <Link to={program.path} style={{  color: '#000', textDecoration: 'none' }} >{program.name}</Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Typography variant="contained" sx={{ pr: 2, color: 'red' }}>
                  <Link to="/online" style={{ color: '#FFF', textDecoration: 'none' }} >Enroll Now</Link>
                </Typography>
                {/* <Typography variant="contained" sx={{ pr: 3, color: 'red' }}>
                  <Link to="/billing" style={{ color: '#FFF', textDecoration: 'none' }} >Account</Link>
                </Typography> */}
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.email} src={user.image} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleSettingMenu(setting)} >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }} >
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            {children}
          </Box>
        </Box>
      </ThemeProvider>
    </div >
  );
};
export default ResponsiveAppBar;
