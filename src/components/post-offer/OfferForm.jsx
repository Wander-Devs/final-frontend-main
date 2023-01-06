import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { MenuItem } from '@mui/material';
import { getPostDetails } from '../../services/advertisement';
import { getCurrentUser } from '../../services/auth';
import { addOffer } from '../../services/offer';

const category = [
  {
    value: 'Grains',
    label: 'Grains',
  },
  {
    value: 'Vegetables',
    label: 'Vegetables',
  },
  {
    value: 'Fruits',
    label: 'Fruits',
  },
];

const cropName = [
  {
    value: 'Rice',
    label: 'Rice',
  },
  {
    value: 'Barley',
    label: 'Barley',
  },
  {
    value: 'Banana',
    label: 'Banana',
  },
  {
    value: 'Apple',
    label: 'Apple',
  },
  {
    value: 'Cabbage',
    label: 'Cabbage',
  },
  {
    value: 'Petchay',
    label: 'Petchay',
  },
];

// eslint-disable-next-line react/prop-types
const OfferForm = () => {
  const param = useParams();
  const userInfo = getCurrentUser();

  useEffect(() => {
    getPostDetails(+param.id).then((res) => {
      if (res.data && res.data.status === 1) {
        console.log(res.data, 'poster');
        setForm({ ...form, post: res.data.data });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  const [form, setForm] = useState({
    cropName: '',
    price: 0,
    farmer: userInfo.data,
    quantity: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addOffer(form).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 8 }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">Make an Offer</Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            select
            label="Crop Category"
            defaultValue="Grains"
            name="category"
            type="text"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            {category.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            select
            label="Crop Name"
            name="crop name"
            type="text"
            value={form.cropName}
            onChange={(e) => setForm({ ...form, cropName: e.target.value })}
          >
            {cropName.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            type="number"
            name="Quantity in (kg)"
            label="Quantity in (kg)"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Price"
            label="Price per kg"
            type="number"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                // LinkComponent={Link}
                // to="/farmer/offers"
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2 }}
              >
                SUBMIT
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                LinkComponent={Link}
                to="/farmer/ads"
                fullWidth
                variant="contained"
                color="error"
                sx={{ mt: 3, mb: 2 }}
              >
                CANCEL
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default OfferForm;
