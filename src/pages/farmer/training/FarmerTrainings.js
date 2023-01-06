import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import FarmerTraining from './FarmerTraining';
import * as trainingService from '../../../services/training';

const FarmerTrainings = () => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    trainingService.getAlltraining().then((res) => {
      setTrainings(res.data);
    });
  }, []);

  console.log(trainings);

  return (
    <Grid container spacing={2}>
      {trainings.map((training) => {
        return (
          <Grid item lg={4} md={6} xs={12} key={training.id}>
            <FarmerTraining training={training} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FarmerTrainings;
