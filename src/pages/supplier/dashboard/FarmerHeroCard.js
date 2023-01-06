import React from 'react';
import { Card, CardHeader, Box } from '@mui/material';
import * as authService from '../../../services/auth';

const AdminHeroCard = () => {
  const user = authService.getCurrentUser().data;
  const text = 'Welcome';

  return (
    <Card>
      <CardHeader title={text.concat(' ', user.firstName, ' ', user.lastName, '!')} />
      <Box component="img" src="../assets/images/covers/farm8.jpg" width="100%" />
    </Card>
  );
};

export default AdminHeroCard;
