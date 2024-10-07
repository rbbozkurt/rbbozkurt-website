import { createTheme } from '@mui/material/styles';
import { lightModeTheme } from './lightModeTheme';
import { darkModeTheme } from './darkModeTheme';

const theme = (mode) => createTheme({
    ...(mode === 'dark' ? darkModeTheme : lightModeTheme),
});

export default theme;