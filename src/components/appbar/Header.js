import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import StarIcon from '@mui/icons-material/Star';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import * as authService from '../../services/auth';

const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const user = authService.getCurrentUser();
  console.log(user);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        GROW-IT-GREEN
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding sx={{ mx: 2 }}>
          <ListItemButton LinkComponent={Link} to="/home">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ mx: 2 }}>
          <ListItemButton LinkComponent={Link} to="/about">
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ mx: 2 }}>
          <ListItemButton LinkComponent={Link} to="/farmingtips">
            <ListItemText primary="Farming Tips" />
          </ListItemButton>
        </ListItem>
        {!user ? (
          <>
            <ListItem disablePadding sx={{ mx: 2 }}>
              <ListItemButton LinkComponent={Link} to="/login">
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ mx: 2 }}>
              <ListItemButton LinkComponent={Link} to="/register">
                <ListItemText primary="Register" />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <Button variant="contained" color="success" LinkComponent={Link} to={`/${user.data.type}/dashboard`}>
            GO TO DASHBOARD
          </Button>
        )}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ bgcolor: '#212121' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="img"
              src="../../favicon/logo9.png"
              alt="Grow-It-Green"
              sx={{ maxWidth: 175, flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button LinkComponent={Link} to="/home" sx={{ color: '#fff', mx: 0.5 }} startIcon={<HomeIcon />}>
                Home
              </Button>
              <Button LinkComponent={Link} to="/about" sx={{ color: '#fff', mx: 0.5 }} startIcon={<LanguageIcon />}>
                About Us
              </Button>
              <Button LinkComponent={Link} to="/farmingtips" sx={{ color: '#fff', mx: 0.5 }} startIcon={<StarIcon />}>
                Farming Tips
              </Button>
              {!user ? (
                <>
                  <Button LinkComponent={Link} to="/login" sx={{ color: '#fff', mx: 0.5 }} startIcon={<KeyIcon />}>
                    Login
                  </Button>
                  <Button
                    LinkComponent={Link}
                    to="/register"
                    sx={{ color: '#fff', mx: 0.5 }}
                    startIcon={<AccountCircleIcon />}
                  >
                    Register
                  </Button>
                </>
              ) : (
                <Button
                  variant="container"
                  color="success"
                  LinkComponent={Link}
                  to={`/${user.data.type}/dashboard`}
                  startIcon={<DashboardIcon />}
                >
                  Go to Dashboard
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
