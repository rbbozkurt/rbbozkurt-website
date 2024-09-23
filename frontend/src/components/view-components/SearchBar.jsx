import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';

function SearchBar({ placeholderText, searchTerm, onSearchChange }) {
  const theme = useTheme();

  return (
    <Paper
      component="form"
      sx={{ 
        p: '2px 2px', 
        display: 'flex', 
        alignItems: 'center', 
        width: '100%', 
        marginBottom: '2rem', 
        paddingLeft: '1rem', 
        paddingRight: '1rem',
        boxShadow: 'none', // Remove shadows
        border: `1px solid ${theme.palette.primary.light}`, // Add outline
        borderRadius: '4px', // Optional: add border radius for rounded corners
        '&:focus-within': {
          border: `1.5px solid ${theme.palette.primary.dark}`, // Change border size and color on focus
          '& .MuiSvgIcon-root': {
            color: theme.palette.primary.dark, // Change icon color on focus
          }
        }
      }}
    >
      <InputBase
        sx={{ 
          ml: 1, 
          flex: 1,
          color: theme.palette.primary.dark, // Set text color
        }}
        placeholder = {placeholderText}
        inputProps={{ 'aria-label': 'search portfolio' }}
        value={searchTerm}
        onChange={onSearchChange}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{ color: theme.palette.primary.light }} />
      </IconButton>
    </Paper>
  );
}

export { SearchBar };