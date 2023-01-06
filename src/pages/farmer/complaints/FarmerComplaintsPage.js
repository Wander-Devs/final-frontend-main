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
  Button,
  Fab,
  Tooltip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ComplaintItem from '../../../components/complaints/ComplaintItem';
import * as authService from '../../../services/auth';
import * as complaintService from '../../../services/complaint';

const FarmerComplaints = () => {
  const userId = authService.getCurrentUser().data.id;
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    complaintService.getComplaintsByUserId(userId).then((res) => {
      setComplaints(res.data.data);
    });
  }, [userId]);

  const handleDeleteComplaint = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      await complaintService.deleteComplaintById(id);
      setComplaints(complaints.filter((complaint) => complaint.id !== id));
    } else {
      window.close();
    }
  };

  if (complaints) {
    return (
      <Container maxWidth="xl">
        <Box sx={{ width: '100%', boxShadow: 3 }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <Toolbar sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <Typography variant="h6" component="div">
                Complaints
              </Typography>
              <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Tooltip title="Submit a Complaint">
                  <Fab color="primary" aria-label="add" size="small" LinkComponent={Link} to="/farmer/complaints/add">
                    <AddIcon />
                  </Fab>
                </Tooltip>
              </Box>
            </Toolbar>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>SUBJECT</TableCell>
                    <TableCell>COMPLAINT</TableCell>
                    <TableCell align="center">DATE POSTED</TableCell>
                    <TableCell align="center">STATUS</TableCell>
                    <TableCell align="center">ACTIONS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {complaints.map((complaint) => (
                    <TableRow key={complaint.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <ComplaintItem complaint={complaint} onDeleteComplaint={handleDeleteComplaint} />
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

export default FarmerComplaints;
