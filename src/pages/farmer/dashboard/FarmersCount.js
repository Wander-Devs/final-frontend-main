/* eslint-disable react/prop-types */
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';

export const FarmersCount = ({ farmers }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            ORDERS
          </Typography>
          <Typography color="textPrimary" variant="h4">
            {farmers.length}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56,
            }}
          >
            <StorefrontIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
