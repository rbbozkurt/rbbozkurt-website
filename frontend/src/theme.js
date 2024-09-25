import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark', // Dark mode
        primary: {
            main: 'rgb(169, 29, 58)', // Primary color
            light: '#6b6b6b', // Lighter primary color
            dark: 'rgb(21, 21, 21)', // Dark primary color
            contrastText: '#fefefe', // Text contrast on primary
        },
        secondary: {
            main: 'rgb(199, 54, 89)', // Secondary color
            light: '#fefefe', // Light secondary color (used in backgrounds)
            dark: 'rgb(21, 21, 21)', // Dark secondary color
            contrastText: '#fefefe', // Text contrast on secondary
        },
        background: {
            default: 'rgb(21, 21, 21)', // Default app background
            paper: '#fefefe', // Paper or card background
        },
        text: {
            primary: '#fefefe', // Text on dark background
            secondary: 'rgb(199, 54, 89)', // Secondary text color
        },
    },
    typography: {
        fontFamily: '"Source Code Pro", monospace', // Monospace font for all text
        h1: {
            fontWeight: 700,
            fontSize: '2.5rem',
            color: 'rgb(21, 21, 21)', // Text color for h1
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem',
            color: '#3d3d3d', // Text color for h2
        },
        h3: {
            fontWeight: 600,
            fontSize: '2rem',
            color: '#6b6b6b', // Text color for h2
        },
        h4: {
            fontFamily: '"Playwrite CU", cursive',
            fontWeight: 400,
            fontSize: '1.5rem',
            color: '#fefefe', // Text color for h4
        },
        body1: {
            fontSize: '1rem',
            color: '#000'
        },
        body2: {
            fontSize: '0.9rem',
            color: '#3d3d3d'
        },
        button: {
            fontSize: '1rem',
            textTransform: 'none', // No automatic uppercase for button text
            color: '#fefefe', // Button text color
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFD700', // Button background color
                    color: '#fefefe', // Button text color
                    '&:hover': {
                        backgroundColor: '#FFD700', // Hover state for button
                    },
                },
            },
        },
        MuiCircularProgress: {
            styleOverrides: {
                colorPrimary: {
                    color: '#FFD700', // Circular progress color
                },
            },
        },

        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: 'rgb(21, 21, 21)', // AppBar background color
                },
            },
        },
    },
});

export default theme;
