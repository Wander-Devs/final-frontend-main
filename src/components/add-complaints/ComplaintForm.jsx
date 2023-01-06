import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { addComplaint, updateComplaintById } from '../../services/complaint';

// eslint-disable-next-line react/prop-types
const ComplaintForm = ({ initialValue }) => {
  console.log(initialValue);

  const [form, setForm] = useState(
    initialValue || {
      title: '',
      summary: '',
      isSolved: '',
    }
  );
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialValue) {
      updateComplaintById(form).then((res) => {
        alert(res.data.message);
        navigate('/admin/complaints');
        console.log(res);
      });
    } else {
      addComplaint(form).then((res) => {
        console.log(res);
        if (res.data && res.data.status === 1) {
          alert(res.data.message);
          navigate('/admin/complaints');
        }
      });
    }
  };
  return (
    <Container component="main" maxWidth="xs" sx={{ mb: 8 }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Subject"
            name="subject"
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="Complaint"
            label="complaint"
            type="text"
            value={form.summary}
            onChange={(e) => setForm({ ...form, summary: e.target.value })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Status"
            label="status"
            type="text"
            value={form.isSolved}
            onChange={(e) => setForm({ ...form, isSolved: e.target.value })}
          />

          <Button type="submit" fullWidth variant="contained" color="success" sx={{ mt: 3, mb: 2 }}>
            SAVE
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ComplaintForm;
