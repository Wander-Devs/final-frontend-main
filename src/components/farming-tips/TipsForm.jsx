import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { addTips, updateTip } from '../../services/farmingtips';

// eslint-disable-next-line react/prop-types
const TipsForm = ({ initialValue }) => {
  console.log(initialValue);

  const [form, setForm] = useState(
    initialValue || {
      image: '',
      title: '',
      tips: '',
    }
  );
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialValue) {
      updateTip(form).then((res) => {
        alert(res.data.message);
        navigate('/admin/farming-tips');
        console.log(res);
      });
    } else {
      addTips(form).then((res) => {
        console.log(res);
        if (res.data && res.data.status === 1) {
          alert(res.data.message);
          navigate('/admin/farming-tips');
        }
      });
    }
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
        <Typography variant="h5">Update Farming Tip</Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Title"
            name="title"
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="tip"
            label="Tip"
            type="text"
            multiline
            rows={5}
            value={form.tips}
            onChange={(e) => setForm({ ...form, tips: e.target.value })}
          />
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" fullWidth variant="contained" color="success" sx={{ mt: 3, mb: 2 }}>
                SAVE
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                LinkComponent={Link}
                to="/admin/farming-tips"
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

export default TipsForm;
