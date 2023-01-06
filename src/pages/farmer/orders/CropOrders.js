import React, { useState, useEffect } from 'react';
import {
  Container,
  Toolbar,
  Typography,
  Box,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
} from '@mui/material';
import CropOrder from './CropOrder';
import * as orderService from '../../../services/order';

const CropOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderService.getAllOrders().then((res) => {
      setOrders(res.data);
    });
  }, []);

  console.log(orders);

  if (orders) {
    return (
      <Container maxWidth="xl">
        <Box sx={{ width: '100%', boxShadow: 3 }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flex: '1 1 100%' }}>
                Orders
              </Typography>
            </Toolbar>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>CROP NAME</TableCell>
                    <TableCell>MODE OF PAYMENT</TableCell>
                    <TableCell>ORDER DATE</TableCell>
                    <TableCell>DELIVERY DATE</TableCell>
                    <TableCell>STATUS</TableCell>
                    <TableCell>SUPPLIER ID</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <CropOrder order={order} />
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </Container>
    );
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
};

export default CropOrders;
