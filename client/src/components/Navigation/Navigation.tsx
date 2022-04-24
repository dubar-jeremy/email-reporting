import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            width: '25%',
            margin: '0 auto',
          }}
        >
          <Typography variant='h6' component='div'>
            Reportings
          </Typography>
          <Typography variant='h6' component='div'>
            Paramètres
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
