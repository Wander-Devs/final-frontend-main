/* eslint-disable react/prop-types */
import * as React from 'react';
import TableCell from '@mui/material/TableCell';

export default function FarmingTip({ tip }) {
  return (
    <>
      <TableCell component="th" scope="row">
        {tip.title}
      </TableCell>
      <TableCell>{tip.tips}</TableCell>
    </>
  );
}
