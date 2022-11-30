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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Footer } from './Footer';


const mdTheme = createTheme();
const pages = [
  {
    page: 'Home',
    indexs: 0
  },
  // {
  //   page: 'About',
  //   indexs: 1
  // }
  // , {
  //   page: 'Notice',
  //   indexs: 2
  // },
  {
    page: 'Courses',
    indexs: 3
  }
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const programs = [
  {
    name: 'Bachelor of Inforamtion and Communication Technology',
    path: '/menu'
  },
  // {
  //   name: 'Bachelor of Inforamtion Management',
  //   path: '/menu'
  // }
  // , {
  //   name: 'Bachelor of Computer Application (BCA)',
  //   path: '/menu'
  // },
];

export const ResponsiveAppBar = ({ children }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElPrograms, setAnchorElPrograms] = React.useState(null);

  const navigate =useNavigate();

  const handleStepContent = (step) => () => {
    console.log(step)
    switch (step) {
      case 0: 
        return navigate("/home");
      // case 1:  
      //   return navigate("/home");
      // case 2: 
      //   return navigate("/home")
      case 3: 
        return navigate("/courses")
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

  const handleOpenProgramsMenu=(event)=>{
    setAnchorElPrograms(event.currentTarget);
  }

  const handleCloseProgramsMenu=()=>{
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
                href="/home"
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
                 <Button
                    onClick={handleOpenProgramsMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                   Programs
                  </Button>
                  <Menu
                  sx={{ mt: '45px' }}
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
                    onMouseEnter={(e) => e.target.style.color = 'blue'} >
                      <NavLink to={program.path} >{program.name} </NavLink>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Typography variant="contained" sx={{ pr: 5, color: 'red' }}>
                  <Link to="/online" style={{ color: '#FFF', textDecoration: 'none' }} >Online Form</Link>
                </Typography>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                    <MenuItem key={setting} onClick={handleCloseUserMenu} >
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
        <Footer />
      </ThemeProvider>
    </div >
  );
};
export default ResponsiveAppBar;
