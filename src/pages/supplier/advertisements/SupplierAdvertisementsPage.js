import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  Tooltip,
  Fab,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import * as adsService from '../../../services/advertisement';
import * as offerService from '../../../services/offer';
import SupplierAdvertisement from '../../../components/supplier/ads/SupplierAdvertisement';

const SupplierAdvertisementsPage = () => {
  const [ads, setAds] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    adsService.getAllPost().then((res) => {
      setAds(res.data);
    });
    offerService.getAllOffers().then((res) => {
      setOffers(res.data);
    });
  }, []);

  console.log(ads);

  const handleDeleteAds = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      await adsService.deletePostById(id);
      setAds(ads.filter((ad) => ad.id !== id));
    }
    window.close();
  };

  if (ads && offers) {
    return (
      <Container maxWidth="xl">
        <Box sx={{ width: '100%', boxShadow: 3 }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <Toolbar sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <Typography variant="h6" component="div">
                My Advertisements
              </Typography>
              <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Tooltip title="Post an Advertisement">
                  <Fab color="primary" aria-label="add" size="small" LinkComponent={Link} to="/supplier/ads/add">
                    <AddIcon />
                  </Fab>
                </Tooltip>
              </Box>
            </Toolbar>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>CROP NAME</TableCell>
                    <TableCell>QUANTITY (in kg)</TableCell>
                    <TableCell align="center">DATE POSTED</TableCell>
                    <TableCell align="center">ACTIONS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ads.map((ad) => (
                    <TableRow key={ad.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <SupplierAdvertisement ad={ad} offers={offers} onDeleteAd={handleDeleteAds} />
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

export default SupplierAdvertisementsPage;
