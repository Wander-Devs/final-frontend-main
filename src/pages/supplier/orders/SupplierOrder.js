import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import { ButtonGroup, Button } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function CropOrder({ order }) {
  return (
    <>
      <TableCell component="th" scope="row">
        {order.cropName}
      </TableCell>
      <TableCell>{order.modeOfPayment}</TableCell>
      <TableCell align="center">{order.orderDate}</TableCell>
      <TableCell align="center">{order.deliveryDate}</TableCell>
      <TableCell align="center">{order.status}</TableCell>
    </>
  );
}
