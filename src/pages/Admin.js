import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Chart from './Chart'; // Ensure the path is correct
import Properties from './Properties'; // Ensure the path is correct

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(4),
}));

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  overflow: 'auto',
  flexDirection: 'column',
  height: 240,
}));

const Admin = () => {
  return (
    <Root>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <PaperStyled>
              <Chart />
            </PaperStyled>
          </Grid>
          {/* Recent Properties */}
          <Grid item xs={12} md={4} lg={3}>
            <PaperStyled>
              <Properties />
            </PaperStyled>
          </Grid>
          {/* Properties List */}
          <Grid item xs={12}>
            <PaperStyled>
              <Properties />
            </PaperStyled>
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
};

export default Admin;
