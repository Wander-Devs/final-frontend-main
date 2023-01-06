import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  Stack,
} from '@mui/material';

import * as farmingtipsService from '../../../services/farmingtips';
import FarmingTip from './FarmingTip';

const FarmingTips = () => {
  const navigate = useNavigate();
  const [farmingtips, setFarmingTips] = useState([]);

  useEffect(() => {
    farmingtipsService.getAllFarmingTips().then((res) => {
      setFarmingTips(res.data);
    });
  }, []);

  console.log(farmingtips);
  const tipForm = () => {
    navigate('/add/tip');
  };

  if (farmingtips) {
    return (
      <Container maxWidth="xl">
        <Box sx={{ width: '100%', boxShadow: 3 }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <Toolbar sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {' '}
              <Typography variant="h6" component="div">
                Farming Tips
              </Typography>
              {/* </Stack> */}
            </Toolbar>

            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>TITLE</TableCell>
                    <TableCell>TIPS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {farmingtips.map((tip) => (
                    <TableRow key={tip.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <FarmingTip tip={tip} />
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

export default FarmingTips;
