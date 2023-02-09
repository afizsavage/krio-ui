import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Navbar from '../generic/navbar';
import { DefaultLayoutProps } from '../../@types';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid sx={{ marginLeft: 3 }} item xs>
        <Item>
          <span>here</span>
        </Item>
      </Grid>
      <Grid item xs={5}>
        {children}
      </Grid>
      <Grid sx={{ marginRight: 3 }} item xs>
        <Item>
          <span>here</span>
        </Item>
      </Grid>
    </Grid>
  );
};

export default DefaultLayout;
