import { createTheme } from '@mui/material/styles';

const lightMode = {
    palette: {
        mode: 'light',
        primary: {
            main: 'rgb(169, 29, 58)',
            light: '#6b6b6b',
            dark: 'rgb(21, 21, 21)',
            contrastText: '#fefefe',
        },
        secondary: {
            main: 'rgb(199, 54, 89)',
            light: '#fefefe',
            dark: 'rgb(21, 21, 21)',
            contrastText: '#fefefe',
        },
        background: {
            default: '#fefefe',
            paper: '#fefefe',
        },
        text: {
            primary: '#000',
            secondary: 'rgb(199, 54, 89)',
        },
    },
    custom: {
        menuItem: {
            fontSize: {
                xs: '1.2rem',
                sm: '1.4rem',
                selected: {
                    xs: '1.4rem',
                    sm: '1.8rem',
                },
            },
            color: {
                default: '#6b6b6b',
                hover: '#FFC107',
            },
        },
        header: {
            title: {
                fontFamily: '"Playwrite CU", cursive',
                color: 'primary.dark',
            },
            subtitle: {
                fontFamily: '"Source Code Pro", monospace',
                hoverColor: '#FFC107',
            },
            darkModeToggle: {
                color: '#2D3242',
                transition: 'transform 0.5s',
            },
            socialMedia: {
                color: 'primary.light',
            },
        },
    },
};

const darkMode = {
    palette: {
        mode: 'dark',
        primary: {
            main: 'rgb(169, 29, 58)',
            light: '#6b6b6b',
            dark: 'rgb(21, 21, 21)',
            contrastText: '#fefefe',
        },
        secondary: {
            main: 'rgb(199, 54, 89)',
            light: '#fefefe',
            dark: 'rgb(21, 21, 21)',
            contrastText: '#fefefe',
        },
        background: {
            default: 'rgb(21, 21, 21)',
            paper: '#fefefe',
        },
        text: {
            primary: '#fefefe',
            secondary: 'rgb(199, 54, 89)',
        },
    },
    custom: {
        menuItem: {
            fontSize: {
                xs: '1.2rem',
                sm: '1.4rem',
                selected: {
                    xs: '1.4rem',
                    sm: '1.8rem',
                },
            },
            color: {
                default: '#fefefe',
                hover: '#FFC107',
            },
        },
        header: {
            title: {
                fontFamily: '"Playwrite CU", cursive',
                color: 'primary.light',
            },
            subtitle: {
                fontFamily: '"Source Code Pro", monospace',
                hoverColor: '#FFC107',
            },
            darkModeToggle: {
                color: '#FB940B',
                transition: 'transform 0.5s',
            },
            socialMedia: {
                color: 'primary.light',
            },
        },
    },
};

const commonTheme = {
    typography: {
        fontFamily: '"Source Code Pro", monospace',
        h1: {
            fontWeight: 700,
            fontSize: '2.5rem',
            color: 'rgb(21, 21, 21)',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem',
            color: '#3d3d3d',
        },
        h3: {
            fontWeight: 600,
            fontSize: '2rem',
            color: '#6b6b6b',
        },
        h4: {
            fontFamily: '"Playwrite CU", cursive',
            fontWeight: 400,
            fontSize: '1.5rem',
            color: '#fefefe',
        },
        body1: {
            fontSize: '1rem',
            color: '#000',
        },
        body2: {
            fontSize: '0.9rem',
            color: '#3d3d3d',
        },
        button: {
            fontSize: '1rem',
            textTransform: 'none',
            color: '#fefefe',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFD700',
                    color: '#fefefe',
                    '&:hover': {
                        backgroundColor: '#FFD700',
                    },
                },
            },
        },
        MuiCircularProgress: {
            styleOverrides: {
                colorPrimary: {
                    color: '#FFD700',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: 'rgb(21, 21, 21)',
                },
            },
        },
    },
};

const theme = (mode) => createTheme({
    ...commonTheme,
    ...(mode === 'dark' ? darkMode : lightMode),
});

export default theme;