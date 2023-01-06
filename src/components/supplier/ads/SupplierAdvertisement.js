import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonGroup, Button, TableCell, Badge } from '@mui/material';

export default function SupplierAdvertisement({ ad, offers, onDeleteAd }) {
  const navigate = useNavigate();
  const handleNavigateToOffers = () => {
    navigate(`/supplier/ad-offers/${ad.id}`);
  };

  const getOffersCount = (id) => {
    const offersCount = offers.filter((offer) => offer.postId === id);
    return offersCount.length > 0 ? offersCount.length : '0';
  };

  return (
    <>
      <TableCell component="th" scope="row">
        {ad.title}
      </TableCell>
      <TableCell>{ad.quantity}</TableCell>
      <TableCell align="center">{ad.createdDate}</TableCell>
      <TableCell align="center">
        <ButtonGroup size="small">
          <Button variant="contained" color="secondary" LinkComponent={Link} to={`/supplier/ads/edit/${ad.id}`}>
            Update Ad
          </Button>
          <Button variant="contained" color="error" onClick={() => onDeleteAd(ad.id)}>
            Delete Ad
          </Button>
          <Badge badgeContent={getOffersCount(ad.id)} color={getOffersCount(ad.id) > 0 ? 'info' : 'error'}>
            <Button variant="contained" color="success" onClick={handleNavigateToOffers}>
              View Offers
            </Button>
          </Badge>
        </ButtonGroup>
      </TableCell>
    </>
  );
}
