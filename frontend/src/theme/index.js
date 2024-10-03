import { createTheme } from '@mui/material/styles';
import { commonTheme } from './commonTheme';
import { lightModeTheme } from './lightModeTheme';
import { darkModeTheme } from './darkModeTheme';

const theme = (mode) => createTheme({
    ...commonTheme,
    ...(mode === 'dark' ? darkModeTheme : lightModeTheme),
});

export default theme;