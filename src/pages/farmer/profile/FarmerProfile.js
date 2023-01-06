import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import FarmerProfileCard from './FarmerProfileCard';
import FarmerProfileDetails from './FarmerProfileDetails';
import * as userService from '../../../services/users';
import * as authService from '../../../services/auth';

const FarmerProfile = () => {
  const userId = authService.getCurrentUser().data.id;
  const [user, setUser] = useState(null);

  useEffect(() => {
    userService.getUserById(userId).then((res) => {
      setUser(res.data.data);
    });
  }, [userId]);

  const handleEditProfile = async (profileForm) => {
    try {
      await userService.updateUserById(userId, profileForm);
    } catch (error) {
      alert(error);
    }
  };

  if (!user) {
    return <h2>Account details not found</h2>;
  }

  return (
    <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography sx={{ mb: 3 }} variant="h4">
          Account
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <FarmerProfileCard />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <FarmerProfileDetails user={user} onEditProfile={handleEditProfile} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FarmerProfile;
