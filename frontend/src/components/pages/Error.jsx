import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Error( {darkMode} ) {
  return (
    <Box
      direction = "column"
    >
      <Typography variant="h1" component="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: '#ff1744' }}>
        404
      </Typography>
      <Typography  component="h2" variant='h4'
                sx={{
                    color: darkMode ? 'primary.dark' : 'primary.dark',
                    fontFamily: "Playwrite CU",
                    px: 4,
                    marginBottom: '2rem'
                }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
        Please select a page from the menu above or return to the <Link to="/">homepage</Link>.
        </Typography>
    </Box>
  );
}

export { Error };