/* eslint-disable react/prop-types */
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';

export const UsersCount = ({ users }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            ALL USERS
          </Typography>
          <Typography color="textPrimary" variant="h4">
            {users.length}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56,
            }}
          >
            <GroupIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
