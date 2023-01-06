/* eslint-disable react/prop-types */
import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';

export default function User({ user, onActivate }) {
  const handleActivate = (type) => {
    console.log(user);
    onActivate(user, type);
  };
  return (
    <>
      <TableCell component="th" scope="row">
        {user.id}
      </TableCell>
      <TableCell>{user.firstName}</TableCell>
      <TableCell>{user.lastName}</TableCell>
      <TableCell>{user.type}</TableCell>

      <TableCell align="center">
        {user.active && (
          <Button variant="contained" color="error" onClick={() => handleActivate('deactivate')}>
            Deactivate
          </Button>
        )}
        {!user.active && (
          <Button variant="contained" color="secondary" onClick={() => handleActivate('activate')}>
            Activate
          </Button>
        )}
      </TableCell>
    </>
  );
}
