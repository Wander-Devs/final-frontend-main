import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardActions, CardContent, Typography, Button } from '@mui/material';
import { acceptOffer, getAdsOffers } from '../../../services/offer';

const Offers = () => {
  const param = useParams();
  const [offers, setOffers] = useState(null);
  useEffect(() => {
    getAllAdsOffers();
  }, []);

  const getAllAdsOffers = () => {
    getAdsOffers(+param.id).then((res) => {
      if (res.data) {
        console.log(res);
        setOffers(res.data);
      }
    });
  };

  const handleAccept = (id, status) => {
    acceptOffer(id, status).then((res) => {
      if (res.data && res.data.status === 1) {
        getAllAdsOffers();
      }
    });
  };

  if (offers && offers.length > 0) {
    return (
      <Grid container spacing={2}>
        {offers.map((offer, idx) => (
          <Grid item xs={6} key={idx}>
            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {offer.cropName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {offer.price}
                </Typography>
                <Typography variant="body2">{offer.quantity}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleAccept(offer.id, 'accepted')}>
                  Accept
                </Button>
                <Button size="small" onClick={() => handleAccept(offer.id, 'declined')}>
                  Decline
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
  return <div>Not data found</div>;
};

export default Offers;
