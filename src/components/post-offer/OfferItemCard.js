import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const OfferItemCard = ({ offer }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://www.liveabout.com/thmb/APMQQFMHcHHnJyXnZntsFDu0RLo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/peter_2008_v2F_hires1-56a00f083df78cafda9fdcb6.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {offer.cropName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Php {offer.price * offer.quantity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Farmer ID : {offer.farmerId}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Accept Offer</Button>
      </CardActions>
    </Card>
  );
};

export default OfferItemCard;
