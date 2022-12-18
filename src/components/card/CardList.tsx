import React from 'react';
import Grid from '@mui/material/Grid';
import Card from './Card';

const CardList = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Card />
      </Grid>
    </Grid>
  );
};

export default CardList;
