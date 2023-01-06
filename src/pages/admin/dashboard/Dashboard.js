import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import AdminHeroCard from './AdminHeroCard';
import { ComplaintsCount } from './ComplaintsCount';
import { FarmersCount } from './FarmersCount';
import { SuppliersCount } from './SuppliersCount';
import { UsersCount } from './UsersCount';
import * as complaintService from '../../../services/complaint';
import * as userService from '../../../services/users';

const Dashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    complaintService.getAllComplaints().then((res) => {
      setComplaints(res.data);
    });
    userService.getAllUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);

  if (complaints && users) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <ComplaintsCount complaints={complaints} />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FarmersCount farmers={users.filter((user) => user.type === 'farmer')} />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <SuppliersCount suppliers={users.filter((user) => user.type === 'supplier')} />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <UsersCount users={users} />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <AdminHeroCard />
        </Grid>
      </Grid>
    );
  }

  return <></>;
};

export default Dashboard;
