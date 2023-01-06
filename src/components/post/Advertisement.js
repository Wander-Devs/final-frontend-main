/* eslint-disable react/prop-types */
import * as React from 'react';
import { TableCell, Button, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Advertisement = ({ post, suppliers }) => {
  const navigate = useNavigate();
  const updatePost = () => {
    navigate(`edit/${post.id}`);
  };

  const getSupplierDetails = (id) => {
    const supplierDetails = suppliers.find((x) => x.id === id);
    return (
      <List>
        <ListItem>
          <ListItemText
            primary={`${supplierDetails.firstName} ${supplierDetails.lastName}`}
            secondary={supplierDetails.mobileNo}
          />
        </ListItem>
      </List>
    );
  };

  return (
    <>
      <TableCell component="th" scope="row">
        {getSupplierDetails(post.supplierId)}
      </TableCell>
      <TableCell>{post.title}</TableCell>
      <TableCell>{post.quantity} kg</TableCell>
      <TableCell align="center">{post.createdDate}</TableCell>
      <TableCell align="center">
        <Button variant="contained" size="small" color="success" onClick={updatePost}>
          MAKE AN OFFER
        </Button>
      </TableCell>
    </>
  );
};

export default Advertisement;
