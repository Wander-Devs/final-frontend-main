import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material';
import * as userService from '../../services/users';
import * as authService from '../../services/auth';

const ProfileDetails = ({ user }) => {
  const userType = authService.getCurrentUser().data.type;

  return (
    <form autoComplete="off" noValidate>
      <Card>
        <CardHeader title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="First name"
                name="firstName"
                defaultValue={user.firstName}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                defaultValue={user.lastName}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                defaultValue={user.email}
                variant="filled"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobileNo"
                type="number"
                defaultValue={user.mobileNo}
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                defaultValue={user.address}
                variant="filled"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Birthdate"
                name="dob"
                defaultValue={user.dob}
                variant="filled"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2,
          }}
        >
          <Button LinkComponent={Link} to={`/${userType}/profile/edit`} color="primary" variant="contained">
            Edit Profile
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default ProfileDetails;
