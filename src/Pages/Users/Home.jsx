import React from 'react';
import Nav from '../../components/Nav/Navbar';
import SwipeableTextMobileStepper from '../../components/Card/SwipeableTextMobileStepper';
import { Grid } from '@mui/material';

function Home() {
  return (
    <>
      <Nav />
      <Grid container spacing={2} justifyContent="center">
        {/* Repeat the SwipeableTextMobileStepper component for each card */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SwipeableTextMobileStepper />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SwipeableTextMobileStepper />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SwipeableTextMobileStepper />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SwipeableTextMobileStepper />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
