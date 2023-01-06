import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Drawer } from '@mui/material';
import { getCurrentUser } from '../../../services/auth';
import useResponsive from '../../../hooks/useResponsive';
import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
import NavSection from '../../../components/nav-section';
import { adminRoutes, farmerRoutes, supplierRoutes } from './navigation';

const NAV_WIDTH = 280;

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const [routing, setRouting] = useState([]);

  // navigation based on user type
  useEffect(() => {
    if (getCurrentUser().data.type === 'admin') {
      setRouting(adminRoutes);
    } else if (getCurrentUser().data.type === 'supplier') {
      setRouting(supplierRoutes);
    } else if (getCurrentUser().data.type === 'farmer') {
      setRouting(farmerRoutes);
    }
  }, [getCurrentUser().data.type]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo />
      </Box>

      <NavSection data={routing} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'solid',
              backgroundImage:
                'url(https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              '&:before': {
                position: 'absolute',
                width: '100%',
                height: '100%',
                content: '""',
                display: 'block',
                opacity: '0.5',
              },
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              backgroundImage:
                'url(https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              '&:before': {
                position: 'absolute',
                width: '100%',
                height: '100%',
                content: '""',
                display: 'block',
                opacity: '0.5',
              },
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
