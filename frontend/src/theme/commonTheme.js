export const commonTheme = {
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
