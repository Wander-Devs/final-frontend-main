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
import * as authService from '../../services/auth';
import * as complaintService from '../../services/complaint';

const ComplaintForm = ({ complaintDetails, onSubmit }) => {
  const userType = authService.getCurrentUser().data.type;
  const [complaint, setComplaint] = useState(
    complaintDetails || {
      title: '',
      summary: '',
    }
  );

  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    setComplaint({
      ...complaint,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    onSubmit(complaint);
    console.log(complaint);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 3 }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 5,
        }}
      >
        <Typography component="h1" variant="h5" sx={{ m: 3 }}>
          Submit a Complaint
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ m: 3 }}>
          <Grid container spacing={2}>
            <Grid item lg={12} xs={12}>
              <TextField
                name="title"
                required
                fullWidth
                label="Complaint Title"
                autoFocus
                value={complaint.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={12} xs={12}>
              <TextField
                required
                fullWidth
                multiline
                rows={6}
                label="Description"
                name="summary"
                value={complaint.summary}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item lg={6} xs={12} sx={{ mt: 1 }}>
              <Button type="submit" fullWidth variant="contained" color="success">
                Submit
              </Button>
            </Grid>
            <Grid item lg={6} xs={12} sx={{ mt: 1 }}>
              <Button fullWidth variant="contained" color="error" LinkComponent={Link} href={`/${userType}/complaints`}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ComplaintForm;
