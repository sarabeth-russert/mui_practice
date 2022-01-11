import React from 'react';
import Grid from '@mui/material/Grid';
import SomeCard from './SomeCard.js';

const Main = () => {
  
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={3}>
        <SomeCard />
      </Grid>
      <Grid item xs={3}>
        <SomeCard />
      </Grid>
      <Grid item xs={3}>
        <SomeCard />
      </Grid>
      <Grid item xs={3}>
        <SomeCard />
      </Grid>
      <Grid item xs={3}>
        <SomeCard />
      </Grid>
      <Grid item xs={3}>
        <SomeCard />
      </Grid>
      <Grid item xs={3}>
        <SomeCard />
      </Grid>
      <Grid item xs={3}>
        <SomeCard />
      </Grid>
      <Grid item xs={3}>
        <SomeCard />
      </Grid>
    </Grid>
  )
}

export default Main
