import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Footer = () => (
  <Typography variant="body2" color="text.secondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="/home">
      Grow-It-Green
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

export default Footer;
