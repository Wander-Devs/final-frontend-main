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
import FarmerOffer from './FarmerOffer';
import * as offerService from '../../../services/offer';

const FarmerOffers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    offerService.getAllOffers().then((res) => {
      setOffers(res.data);
    });
  }, []);

  console.log(offers);

  if (offers) {
    return (
      <Container maxWidth="xl">
        <Box sx={{ width: '100%', boxShadow: 3 }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flex: '1 1 100%' }}>
                Offers
              </Typography>
            </Toolbar>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>CROP NAME</TableCell>
                    <TableCell>PRICE</TableCell>
                    <TableCell>FARMER ID</TableCell>
                    <TableCell align="center">ACTIONS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {offers.map((offer) => (
                    <TableRow key={offer.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <FarmerOffer offer={offer} />
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

export default FarmerOffers;
