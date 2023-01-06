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
import Advertisement from '../../../components/post/Advertisement';
import * as adService from '../../../services/advertisement';
import * as userService from '../../../services/users';

const AdvertisementsPage = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    adService.getAllPost().then((res) => {
      setPosts(res.data);
    });
    userService.getAllUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);

  console.log(posts);
  console.log(users);

  if (posts && users) {
    return (
      <Container maxWidth="xl">
        <Box sx={{ width: '100%', boxShadow: 3 }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flex: '1 1 100%' }}>
                Ads
              </Typography>
            </Toolbar>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>BUYER DETAILS</TableCell>
                    <TableCell>CROP NAME</TableCell>
                    <TableCell>QUANTITY</TableCell>
                    <TableCell align="center">DATE POSTED</TableCell>
                    <TableCell align="center">ACTIONS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {posts.map((post) => (
                    <TableRow key={post.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <Advertisement post={post} suppliers={users} />
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

export default AdvertisementsPage;
