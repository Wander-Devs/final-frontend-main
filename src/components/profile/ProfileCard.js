import React, { useState, useEffect } from 'react';
import { Avatar, Box, Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import * as authService from '../../services/auth';
import * as userService from '../../services/users';

const ProfileCard = () => {
  const [account, setAccount] = useState(null);
  const userId = authService.getCurrentUser().data.id;

  useEffect(() => {
    userService.getUserById(userId).then((res) => {
      setAccount(res.data.data);
    });
  }, [userId]);

  if (account) {
    return (
      <Card>
        <CardContent>
          <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <Avatar
              src="https://th.bing.com/th/id/OIP.B_atDrr4RpLoeIJmNsOCxgHaHa?pid=ImgDet&rs=1"
              sx={{
                height: 150,
                mb: 2,
                width: 150,
              }}
            />
            <Typography variant="h5">
              {account.firstName.toUpperCase()} {account.lastName.toUpperCase()}
            </Typography>
            <Typography variant="body2">@{account.userName}</Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" fullWidth variant="text">
            Upload Picture
          </Button>
        </CardActions>
      </Card>
    );
  }

  return <></>;
};

export default ProfileCard;
