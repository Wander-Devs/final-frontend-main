import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material';
import * as userService from '../../services/users';
import * as authService from '../../services/auth';

const ProfileForm = ({ userDetails, onEditProfile }) => {
  const userType = authService.getCurrentUser().data.type;
  const userId = authService.getCurrentUser().data.id;
  const [profileForm, setProfileForm] = useState(userDetails);

  const handleChange = (event) => {
    setProfileForm({ ...profileForm, [event.currentTarget.name]: event.currentTarget.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEditProfile(profileForm);
    console.log(profileForm);
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="First name"
                name="firstName"
                type="text"
                required
                value={profileForm.firstName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                type="text"
                required
                value={profileForm.lastName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobileNo"
                type="text"
                required
                value={profileForm.mobileNo}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="text"
                required
                value={profileForm.email}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            {/* <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobileNo"
                type="text"
                value={profileForm.mobileNo}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid> */}
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                type="text"
                required
                value={profileForm.address}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Birthdate"
                name="dob"
                type="text"
                required
                value={profileForm.dob}
                variant="outlined"
                onChange={handleChange}
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
          <Button type="submit" color="primary" variant="contained" sx={{ mr: 0.5 }}>
            Save
          </Button>
          <Button LinkComponent={Link} to={`/${userType}/profile`} color="error" variant="contained">
            Cancel
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default ProfileForm;
