import React from 'react';
import useSWR from 'swr';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import NextLink from 'next/link';
import { Box, Link as MuiLink } from '@mui/material';

import Navbar from '../generic/navbar';
import { DefaultLayoutProps } from '../../@types';
import { BASE_API, fetcher } from '../../utility/api';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { data, error } = useSWR(`${BASE_API}/letters`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid sx={{ marginLeft: 3, overflow: 'hidden' }} item xs>
        <Item sx={{ height: 300, bgcolor: '#cbe1ea', overflow: 'hidden' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {data.map((letter: any, index: any) => {
              return (
                <MuiLink
                  sx={{ marginX: 1 }}
                  key={`${letter.character}-${index}`}
                  component={NextLink}
                  href="#"
                >
                  {letter.character}
                </MuiLink>
              );
            })}
          </Box>
          <span></span>
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
