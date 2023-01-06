/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Divider, Typography, Stack, MenuItem, Popover, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import * as authService from '../../../services/auth';
import * as userService from '../../../services/users';

export default function AccountPopover({ onLogout }) {
  const [open, setOpen] = useState(null);
  const [account, setAccount] = useState(null);
  const userId = authService.getCurrentUser().data.id;

  useEffect(() => {
    userService.getUserById(userId).then((res) => {
      setAccount(res.data.data);
    });
  }, [userId]);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  if (account) {
    return (
      <>
        <Button
          onClick={handleOpen}
          size="large"
          variant="outlined"
          color="inherit"
          startIcon={<PersonIcon />}
          endIcon={<ArrowDropDownIcon />}
        >
          {account.firstName} {account.lastName}
        </Button>

        <Popover
          open={Boolean(open)}
          anchorEl={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          PaperProps={{
            sx: {
              p: 0,
              mt: 1.5,
              ml: 0.75,
              width: 180,
              '& .MuiMenuItem-root': {
                typography: 'body2',
                borderRadius: 0.75,
              },
            },
          }}
        >
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography variant="subtitle2" noWrap>
              {/* {account.displayName} */}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
              {/* {account.email} */}
            </Typography>
          </Box>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <Stack sx={{ p: 1 }}>
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <MenuItem onClick={handleClose} LinkComponent={Link} to="/home">
                Home
              </MenuItem>
            </Link>
          </Stack>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <MenuItem onClick={onLogout} sx={{ m: 1 }}>
            Logout
          </MenuItem>
        </Popover>
      </>
    );
  }
  return <></>;
}
