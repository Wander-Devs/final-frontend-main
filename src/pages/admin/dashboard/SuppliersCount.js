/* eslint-disable react/prop-types */
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export const SuppliersCount = ({ suppliers }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            SUPPLIERS
          </Typography>
          <Typography color="textPrimary" variant="h4">
            {suppliers.length}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56,
            }}
          >
            <ShoppingBasketIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
