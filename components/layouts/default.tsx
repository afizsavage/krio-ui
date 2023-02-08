import React from 'react';
import Grid from '@mui/material/Grid';

import Navbar from '../generic/navbar';

type DefaultLayoutProps = {
  children?: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Navbar />
        {children}
      </Grid>
    </Grid>
  );
};

export default DefaultLayout;
