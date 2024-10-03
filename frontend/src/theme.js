import { createTheme } from '@mui/material/styles';

const commonTheme = {
    typography: {
        fontFamily: '"Source Code Pro", monospace',
        h1: {
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            color: 'rgb(21, 21, 21)',
        },
        h2: {
            fontWeight: 600,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            color: '#3d3d3d',
        },
        h3: {
            fontWeight: 600,
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
            color: '#6b6b6b',
        },
        h4: {
            fontFamily: '"Playwrite CU", cursive',
            fontWeight: 400,
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            color: '#fefefe',
        },
        body1: {
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            color: '#000',
        },
        body2: {
            fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
            color: '#3d3d3d',
        },
        button: {
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
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
                sm: '1.6rem',
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
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.5rem' },
            },
            subtitle: {
                fontFamily: '"Source Code Pro", monospace',
                color: '#6b6b6b',
                '&:hover': {
                    color: '#FFC107',
                },
                fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.8rem' },
            },
            darkModeToggle: {
                color: {
                    light: '#2D3242',
                    dark: '#FB940B',
                },
                transition: 'transform 0.5s',
            },
            socialMedia: {
                color: 'primary.light',
            },
        },
        topMenu: {
            container: {
                width: '100%',
                height: 'auto',
                padding: 2,
                paddingX: { xs: 1, sm: 2 },
            },
            box: {
                display: 'flex',
                justifyContent: 'center',
            },
        },
        topMenuItem: {
            button: {
                flexShrink: 0,
                whiteSpace: 'nowrap',
            },
            text: {
                textAlign: 'center',
                fontFamily: 'Source Code Pro, monospace',
                fontSize: {
                    xs: '1.2rem',
                    sm: '1.6rem',
                    selected: {
                        xs: '1.4rem',
                        sm: '1.8rem',
                    },
                },
                fontWeight: {
                    xs: 0,
                    sm: 0,
                    selected: {
                        xs: 20,
                        sm: 30,
                    }
                },
                fontStyle : {
                    xs : 'normal',
                    selected : 'bold',
                },
                color:  'rgb(21, 21, 21)',
                '&:hover': {
                    color: '#FFC107',
                }
            },
        },
        highlightedText: {
            padding: '0 4px',
            fontStyle: 'italic',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            color: '#000',
        },
        roleText: {
            padding: '0 4px',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            color: '#000',
        },
        turkey: {
            backgroundColor: 'red',
            color: 'white',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
        },
        berlin: {
            backgroundImage: 'linear-gradient(90deg, black 33%, red 33%, red 66%, gold 66%)',
            color: 'white',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
        },
        subText: {
            fontStyle: 'italic',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            color: '#000',
        },
        paragraph: {
            padding: '0 0 16px 0',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            color: '#000',
        },
        section: {
            padding: '64px 0 16px 0',
            title: {
                fontWeight: 600,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                color: '#000',
            },
            divider: {
                backgroundColor: '#6b6b6b',
                height: '1px',
                margin: '4px 0 16px 0',
            },
        },
        tags: {
            borderRadius: '4px',
            fontWeight: 'bold',
            padding: '1px 4px',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            color: '#000',
            backgroundColor: '#E5E5E5',
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
                sm: '1.6rem',
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
                color: '#fefefe',
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.5rem' },
            },
            subtitle: {
                fontFamily: '"Source Code Pro", monospace',
                color: '#6b6b6b',
                '&:hover': {
                    color: '#FFC107',
                },
                fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.8rem' },
            },
            darkModeToggle: {
                color: {
                    light: '#2D3242',
                    dark: '#FB940B',
                },
                transition: 'transform 0.5s',
            },
            socialMedia: {
                color: 'primary.light',
            },
        },
        topMenu: {
            container: {
                width: '100%',
                height: 'auto',
                padding: 2,
                paddingX: { xs: 1, sm: 2 },
            },
            box: {
                display: 'flex',
                justifyContent: 'center',
            },
        },
        topMenuItem: {
            button: {
                flexShrink: 0,
                whiteSpace: 'nowrap',
            },
            text: {
                textAlign: 'center',
                fontFamily: 'Source Code Pro, monospace',
                fontSize: {
                    xs: '1.2rem',
                    sm: '1.6rem',
                    selected: {
                        xs: '1.4rem',
                        sm: '1.8rem',
                    },
                },
                fontWeight: {
                    xs: 0,
                    sm: 0,
                    selected: {
                        xs: 20,
                        sm: 30,
                    }
                },
                fontStyle : {
                    xs : 'normal',
                    selected : 'bold',
                },
                color:  '#fefefe',
                '&:hover': {
                    color: '#FFC107',
                }
            },
        },
        highlightedText: {
            padding: '0 4px',
            fontStyle: 'italic',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            color: '#fefefe',
        },
        roleText: {
            padding: '0 4px',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            color: '#fefefe',
        },
        turkey: {
            backgroundColor: 'red',
            color: 'white',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
        },
        berlin: {
            backgroundImage: 'linear-gradient(90deg, black 33%, red 33%, red 66%, gold 66%)',
            color: 'white',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
        },
        subText: {
            fontStyle: 'italic',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            color: '#fefefe',
        },
        paragraph: {
            padding: '0 0 16px 0',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            color: '#fefefe',
        },
        section: {
            padding: '64px 0 16px 0',
            title: {
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                color: '#fefefe',
            },
            divider: {
                backgroundColor: '#6b6b6b',
                height: '1px',
                margin: '4px 0 16px 0',
            },
        },
        tags: {
            borderRadius: '4px',
            fontWeight: 'bold',
            padding: '1px 4px',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            color: '#fefefe',
            backgroundColor: '#E5E5E5',
        },
    },
};

const theme = (mode) => createTheme({
    ...commonTheme,
    ...(mode === 'dark' ? darkMode : lightMode),
});

export default theme;