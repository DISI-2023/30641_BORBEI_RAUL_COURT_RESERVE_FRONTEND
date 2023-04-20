import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { formControlLabelClasses } from '@mui/material';
import axiosInstance from "../axios";


const pages = ['Home'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigateToRegisterPage = () => {
    navigate('/register');
  };

  const navigateToLoginPage = () => {
    navigate('/login');
  };

  const navigateToUserPage = () => {
    navigate('/user');
  }

  const navigateToFieldPage = () => {
    navigate('/field');
  }

  const navigateToLocationPage = () => {
    navigate('/location');
  }

  const handleLogout = () => {
    localStorage.removeItem("id")
    localStorage.removeItem("username")
    localStorage.removeItem("email")
    localStorage.removeItem("isAdmin")
    setTimeout(() => { window.location.href = 'http://localhost:3000/'; }, 2000);
  }

  const GetFields = () => {
    axiosInstance.get("/field")
      .then(
        res => {
          localStorage.setItem("fieldList", JSON.stringify(res.data));
          localStorage.setItem("totalNoFields", JSON.stringify(res.data.length));
          window.location.reload(false);
        }
      )
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <AppBar position="static" style={{ backgroundColor: "#038cfc" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >

            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            {
              localStorage.getItem("email") !== null ? (
                <div>
                  {
                    localStorage.getItem("isAdmin") !== 'false' ? (
                      <div>
                        <Button color="inherit" onClick={navigateToLocationPage}>ADD LOCATION</Button>
                        <Button color="inherit" onClick={navigateToFieldPage}>ADD FIELD</Button>
                        <Button color="inherit" onClick={GetFields}>SHOw FIELDS</Button>
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                      </div>
                    ) : (
                      <div>
                        <AccountCircleIcon sx={{ marginRight: "0.5em", marginBottom: "-0.25em", cursor: "pointer" }}
                          onClick={navigateToUserPage} />
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                      </div>
                    )
                  }
                </div>
              ) : (
                <div>
                  <Button color="inherit" onClick={navigateToLoginPage}>Login</Button>
                  <Button color="inherit" onClick={navigateToRegisterPage}>Register</Button>
                </div>
              )
            }

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
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;