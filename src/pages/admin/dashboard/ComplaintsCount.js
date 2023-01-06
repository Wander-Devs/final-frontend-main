/* eslint-disable react/prop-types */
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';

export const ComplaintsCount = ({ complaints }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            COMPLAINTS
          </Typography>
          <Typography color="textPrimary" variant="h4">
            {complaints.length}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56,
            }}
          >
            <FeedbackIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
