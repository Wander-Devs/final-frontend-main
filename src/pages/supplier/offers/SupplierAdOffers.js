import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid, Container, Box, Typography, Button } from '@mui/material';
import * as offerService from '../../../services/offer';
import OfferItem from '../../../components/post-offer/OfferItemCard';

const SupplierAdOffers = () => {
  const params = useParams();
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    offerService.getAdsOffers(params.id).then((res) => {
      console.log(params.id);
      setOffers(res.data);
    });
  }, [params.id]);

  console.log(offers);

  if (offers.length > 0) {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          {offers.map((offer) => {
            return (
              <Grid item lg={4} md={6} xs={12} key={offer.id}>
                <OfferItem offer={offer} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '75vh',
      }}
    >
      <Container maxWidth="xs" sx={{ textAlign: 'center' }}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h3">No offers yet</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>
              No offers found for this advertisement.
            </Typography>
            <Button variant="contained" LinkComponent={Link} to="/supplier/ads">
              Back to Ads
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SupplierAdOffers;
