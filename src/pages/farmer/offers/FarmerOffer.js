import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import { ButtonGroup, Button } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function FarmerOffer({ offer }) {
  return (
    <>
      <TableCell component="th" scope="row">
        {offer.cropName}
      </TableCell>
      <TableCell>{offer.price}</TableCell>
      <TableCell align="center">{offer.farmerId}</TableCell>
      <TableCell align="center">
        <ButtonGroup>
          <Button variant="contained" color="secondary" startIcon={<AutoFixHighIcon />}>
            UPDATE
          </Button>
          <Button variant="contained" color="error" startIcon={<DeleteForeverIcon />}>
            DELETE
          </Button>
        </ButtonGroup>
      </TableCell>
    </>
  );
}
