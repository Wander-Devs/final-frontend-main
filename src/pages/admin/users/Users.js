import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
} from '@mui/material';
import { toast } from 'react-toastify';
import Swal from 'sweetalert';
import * as userService from '../../../services/users';
import User from './User';

const Users = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const getUsers = (id) => {
    userService.getUserById(id).then((res) => {
      if (res && res.data) {
        setUsers(res.data.body.object);
      }
    });
  };

  useEffect(() => {
    userService.getAllUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);

  const getAllUsers = () => {
    userService.getAllUsers().then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    getUsers(params.id);
  }, [params.id]);
  console.log(users);

  const handleActivateUser = async (id) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you really want to activate this user?',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3CB043',
        confirmButtonText: 'Activate',
      }).then((res) => {
        if (res.isConfirmed) {
          userService.updateUserById(id);
          //   setUsers(users.filter((users) => users.id !== id));
          toast.success('Successfully activated!');
          console.log(users.id);
          navigate('admin/user-list');
        } else if (res.isDenied) {
          toast.error('Activating has been cancelled');
        }
      });
    } catch (error) {
      if (error.response.data.statusCode === 404) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'This record may have already been activated.',
        });
      }
    }
  };
  const handleDeactivateUser = async (id) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you really want to deactivate this user? This process cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3CB043',
        confirmButtonText: 'Deactivate',
      }).then((res) => {
        if (res.isConfirmed) {
          userService.updateUserById(id);
          //   setUsers(users.filter((users) => users.id !== id));
          toast.success('Successfully deactivated!');
          console.log(users.id);
          navigate('admin/user-list');
        } else if (res.isDenied) {
          toast.error('Deactivating has been cancelled');
        }
      });
    } catch (error) {
      if (error.response.data.statusCode === 404) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'This record may have already been activated.',
        });
      }
    }
  };

  const handleActivate = (user, type) => {
    if (window.confirm('This action cannot be undone. Are you sure? ')) {
      if (type === 'deactivate') {
        const data = { ...user, active: false };
        userService.updateUserById(user.id, data).then((res) => {
          if (res.data && res.data.status === 1) {
            getAllUsers();
          }
        });
      } else {
        const data = { ...user, active: true };
        userService.updateUserById(user.id, data).then((res) => {
          if (res.data && res.data.status === 1) {
            getAllUsers();
          }
        });
      }
    }
  };

  if (users) {
    return (
      <Container maxWidth="xl">
        <Box sx={{ width: '100%', boxShadow: 3 }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <Toolbar
              sx={{
                display: 'flex',
                // float: 'right',
                justifyContent: 'flex-start',
                flexFlow: 'row',
              }}
            >
              {/* <Stack direction="row" justifyContent="space-between"> */}
              <Typography variant="h6">Users</Typography>
              {/* </Stack> */}
            </Toolbar>

            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>FIRSTNAME</TableCell>
                    <TableCell>LASTNAME</TableCell>
                    <TableCell>TYPE</TableCell>
                    <TableCell align="center">ACTIONS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users
                    .filter((user) => user.type !== 'admin')
                    .map((user) => (
                      <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <User user={user} onActivate={handleActivate} />
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
    <div>
      <User users={users} handleActivateUser={handleActivateUser} handleDeactivateUser={handleDeactivateUser} />
    </div>
  );
};

export default Users;
