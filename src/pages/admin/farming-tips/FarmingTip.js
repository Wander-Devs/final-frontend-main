/* eslint-disable react/prop-types */
import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import { ButtonGroup, Button, Box } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';

export default function FarmingTip({ tip, onDeleteTip }) {
  const navigate = useNavigate();
  const updateTip = () => {
    navigate(`/edit/tip/${tip.id}`);
  };
  return (
    <>
      <TableCell component="th" scope="row">
        {tip.title}
      </TableCell>
      <TableCell>{tip.tips}</TableCell>

      <TableCell align="center">
        <ButtonGroup>
          <Button variant="contained" color="secondary" startIcon={<AutoFixHighIcon />} onClick={updateTip}>
            UPDATE
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteForeverIcon />}
            onClick={() => onDeleteTip(tip.id)}
          >
            DELETE
          </Button>
        </ButtonGroup>
      </TableCell>
    </>
  );
}
