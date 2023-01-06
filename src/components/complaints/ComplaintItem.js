import * as React from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button, TableCell } from '@mui/material';
import * as authService from '../../services/auth';

const ComplaintItem = ({ complaint, onDeleteComplaint }) => {
  const userType = authService.getCurrentUser().data.type;

  return (
    <>
      <TableCell component="th" scope="row">
        {complaint.title}
      </TableCell>
      <TableCell>{complaint.summary}</TableCell>
      <TableCell align="center">{complaint.createdDate}</TableCell>
      <TableCell align="center">{complaint.isSolved ? 'Closed' : 'Open'}</TableCell>
      <TableCell align="center">
        <ButtonGroup>
          <Button
            variant="contained"
            color="primary"
            size="small"
            LinkComponent={Link}
            to={`/${userType}/complaints/edit/${complaint.id}`}
          >
            Update
          </Button>
          <Button variant="contained" color="error" size="small" onClick={() => onDeleteComplaint(complaint.id)}>
            Delete
          </Button>
        </ButtonGroup>
      </TableCell>
    </>
  );
};

export default ComplaintItem;
