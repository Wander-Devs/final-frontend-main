import * as React from 'react';

import Typography from '@mui/material/Typography';
import LandingPage from './LandingPage';
// import Footer from '../footer/Footer';

const backgroundImage =
  'https://images.unsplash.com/photo-1491202862203-88033b2f36a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1970&q=80';

export default function ProductHero() {
  return (
    <LandingPage
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h1" marked="center">
        WELCOME TO GROW IT GREEN FARMING ASSISTANT
      </Typography>
    </LandingPage>
  );
}
