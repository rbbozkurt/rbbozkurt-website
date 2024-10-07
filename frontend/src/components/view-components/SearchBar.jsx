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
      sx={theme.custom.searchBar.paper}
    >
      <InputBase
        sx={theme.custom.searchBar.inputBase}
        placeholder = {placeholderText}
        inputProps={{ 'aria-label': 'search portfolio' }}
        value={searchTerm}
        onChange={onSearchChange}
      />
      <IconButton type="button" sx={theme.custom.searchBar.iconButton} aria-label="search">
        <SearchIcon sx={theme.custom.searchBar.iconButton.searchIcon} />
      </IconButton>
    </Paper>
  );
}

export { SearchBar };