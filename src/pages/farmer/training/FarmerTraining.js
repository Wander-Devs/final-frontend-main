import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FarmerTraining({ training }) {
  return (
    <Card sx={{ maxWidth: 'md' }}>
      <CardMedia component="iframe" height="250" src={training.url} title={training.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {training.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
