/* eslint-disable react/prop-types */
import * as React from 'react';
import { ButtonGroup, Button, TableCell, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ComplaintItem({ complaint, complainants, onDeleteComplaint }) {
  const navigate = useNavigate();
  const updateComplaint = () => {
    navigate(`/edit/complaint/${complaint.id}`);
  };

  const getComplainantNameById = (id) => {
    const complainant = complainants.find((x) => x.id === id);
    return `${complainant.firstName} ${complainant.lastName}`;
  };

  return (
    <>
      <TableCell component="th" scope="row">
        {getComplainantNameById(complaint.complainantId)}
      </TableCell>
      <TableCell>{complaint.title}</TableCell>
      <TableCell>{complaint.summary}</TableCell>
      <TableCell align="center">{complaint.createdDate}</TableCell>
      <TableCell align="center">
        <Chip
          label={complaint.isSolved ? 'Closed' : 'Open'}
          color={complaint.isSolved ? 'success' : 'error'}
          size="small"
          variant="outlined"
        />
      </TableCell>
      <TableCell align="center">
        <ButtonGroup size="small">
          <Button variant="contained" color="secondary" onClick={updateComplaint}>
            Update
          </Button>
          <Button variant="contained" color="error" onClick={() => onDeleteComplaint(complaint.id)}>
            Delete
          </Button>
        </ButtonGroup>
      </TableCell>
    </>
  );
}
