import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

function Error({ darkMode }) {
  const theme = useTheme();

  return (
    <Box sx={theme.custom.errorPage.box}>
      <Typography sx={theme.custom.errorPage.errorCode.text}>
        404
      </Typography>
      <Typography sx={theme.custom.errorPage.errorTitle}>
        Page Not Found
      </Typography>
      <Typography sx={theme.custom.errorPage.errorSubtitle}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
      <Typography sx={theme.custom.errorPage.errorSubtitle}>
        Please select a page from the menu above or return to the <Link to="/">homepage</Link>.
      </Typography>
    </Box>
  );
}

export { Error };