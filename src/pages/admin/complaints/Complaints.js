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
import ComplaintItem from './ComplaintItem';
import * as complaintService from '../../../services/complaint';
import * as userService from '../../../services/users';

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [complainants, setComplainants] = useState([]);

  useEffect(() => {
    complaintService.getAllComplaints().then((res) => {
      setComplaints(res.data);
    });
    userService.getAllUsers().then((res) => {
      setComplainants(res.data);
    });
  }, []);

  const handleDeleteComplaint = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      await complaintService.deleteComplaintById(id);
      setComplaints(complaints.filter((comp) => comp.complaint_id !== id));
    } else {
      window.close();
    }
  };

  if (complaints && complainants.length > 0) {
    return (
      <Container maxWidth="xl">
        <Box sx={{ width: '100%', boxShadow: 3 }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flex: '1 1 100%' }}>
                Complaints
              </Typography>
            </Toolbar>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>COMPLAINANT</TableCell>
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
                      <ComplaintItem
                        complaint={complaint}
                        complainants={complainants}
                        onDeleteComplaint={handleDeleteComplaint}
                      />
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

export default Complaints;
