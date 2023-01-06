import React, { useState } from 'react';
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
import * as authService from '../../services/auth';

export default function RegistrationForm() {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    type: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    setUserDetails({
      ...userDetails,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userDetails);
    try {
      await authService.register(userDetails).then((response) => {
        console.log(response);
        if (response.data.status === 1) {
          alert(response.data.message);
          navigate('/login');
        } else {
          alert(response.data.message);
        }
      });
    } catch (error) {
      if (error.response.status > 400) {
        alert('An unexpected error occured');
      }
    }
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 3 }}>
      <Box
        sx={{
          marginTop: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 5,
        }}
      >
        <Avatar sx={{ m: 3, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ m: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth id="userName" label="Username" name="userName" onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel>Please select one</FormLabel>
                <RadioGroup row name="type" onChange={handleChange}>
                  <FormControlLabel value="farmer" control={<Radio />} label="Farmer" />
                  <FormControlLabel value="supplier" control={<Radio />} label="Supplier" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="success" sx={{ mt: 3, mb: 2 }}>
            Register
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
