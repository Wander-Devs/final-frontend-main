import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import { ButtonGroup, Button } from '@mui/material';
import { orderBy } from 'lodash';

export default function SupplierAdvertisement({ offer, onDeleteAd }) {
  return (
    <>
      <TableCell component="th" scope="row">
        {offer.cropName}
      </TableCell>
      <TableCell>{offer.price}</TableCell>
      <TableCell align="center">{offer.price}</TableCell>
      <TableCell align="center">
        <ButtonGroup size="small">
          <Button variant="contained" color="secondary" LinkComponent={Link} to={`/supplier/ads/edit/${offer.id}`}>
            UPDATE
          </Button>
          <Button variant="contained" color="error" onClick={() => onDeleteAd(offer.id)}>
            DELETE
          </Button>
        </ButtonGroup>
      </TableCell>
    </>
  );
}
