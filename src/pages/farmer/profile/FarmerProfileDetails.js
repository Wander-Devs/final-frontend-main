import { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material';
import * as userService from '../../../services/users';
import * as authService from '../../../services/auth';

const FarmerProfileDetails = ({ user, onEditProfile }) => {
  const [profileForm, setProfileForm] = useState({ ...user });
  // const userId = authService.getCurrentUser().data.user_id;
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   userService.getUserById(userId).then((res) => {
  //     setUser(res.data.data);
  //   });
  // }, [userId]);

  // if (!user) {
  //   return <></>;
  // }

  const handleChange = (event) => {
    event.preventDefault();
    setProfileForm({ ...profileForm, [event.currenTarget.name]: event.currenTarget.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEditProfile(user.id, profileForm);
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
                required
                value={user.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                required
                value={user.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth label="Email Address" name="email" required value={user.email} variant="outlined" />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobileNo"
                type="number"
                value={user.mobileNo}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth label="Address" name="address" required value={user.address} variant="outlined" />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth label="Birthdate" name="dob" required value={user.dob} variant="outlined" />
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
          <Button type="submit" color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default FarmerProfileDetails;
