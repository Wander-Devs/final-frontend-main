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
import * as authService from '../../services/auth';

export default function LoginForm() {
  const [credentials, setCredentials] = useState({ userName: '', password: '' });

  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    setCredentials({ ...credentials, [event.currentTarget.name]: event.currentTarget.value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await authService.login(credentials).then((response) => {
        if (response.data.status === 1) {
          console.log(response.data);

          localStorage.setItem('gg', JSON.stringify(response.data));
          if (response.data.data.type === 'admin') navigate('/admin/dashboard');
          if (response.data.data.type === 'supplier') navigate('/supplier/dashboard');
          if (response.data.data.type === 'farmer') navigate('/farmer/dashboard');
        } else {
          alert(response.data.message);
        }
      });
    } catch (error) {
      if (error.response.data.statusCode > 400) {
        alert('Error');
      }
    }
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 8 }}>
      <Box
        sx={{
          marginTop: 8,
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ m: 4 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            name="userName"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" color="success" sx={{ mt: 3, mb: 2 }}>
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
