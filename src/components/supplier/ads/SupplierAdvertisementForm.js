import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import * as adsService from '../../../services/advertisement';
import { getCurrentUser } from '../../../services/auth';

export default function SupplierAdvertisementForm({ post, onSubmit }) {
  const userInfo = getCurrentUser();
  const [ad, setAd] = useState(
    post || {
      title: '',
      quantity: '',
    }
  );

  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    setAd({
      ...ad,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    onSubmit(ad);
    console.log(ad);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mb: 3 }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          {post ? 'Edit Advertisement' : 'Post an Advertisement'}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item lg={12} xs={12}>
              <TextField
                name="title"
                required
                fullWidth
                label="Crop Name"
                autoFocus
                value={ad.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={12} xs={12}>
              <TextField
                required
                fullWidth
                type="number"
                label="Quantity (in kg.)"
                name="quantity"
                value={ad.quantity}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={0.5}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
                Submit
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                LinkComponent={Link}
                href="/supplier/ads"
                fullWidth
                variant="contained"
                color="error"
                sx={{ mt: 3, mb: 2 }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
