export const darkModeTheme = {
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

        preview: {
            container: {
                padding: '2rem',
                width: '100%',
                position: 'relative',
            },
            blogContainer: {
                width: '100%',
            },
            portfolioContainer: {
                width: '100%',
            },
            prevNextCard: {
                flexGrow: 1,
                flexShrink: 1,
                width: '80%',
                transform: 'scale(0.9)', // Use constant for scale
            },
            currentCard: {
                flexGrow: 1,
                flexShrink: 1,
                width: '80%',
                marginY: 4, // Use constant for marginY
                transform: 'scale(1.2)', // Slightly scale the current card
                transition: 'transform 0.3s',
                zIndex: 1, // Ensure the current card is on top
            },
            icon: {
                fontSize: 80, // Use constant for icon size
            },
        },
        blogCard: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: 200,
            boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.6)',
            borderRadius: 2,
            transition: 'transform 0.3s, border 0.3s',
            cursor: 'pointer',
            position: 'relative',
            '&:hover': {
                transform: 'scale(1.02)',
            },
            image: {
                width: '50%',
                height: '100%',
                objectFit: 'cover',
                borderTopLeftRadius: 2,
                borderBottomLeftRadius: 2,
            },
            content: {
                width: '50%',
                paddingX: 2,
                paddingTop: 1,
                paddingBottom: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 1,
            },
            title: {
                textAlign: 'left',
                color: 'primary.dark',
            },
            author: {
                textAlign: 'left',
                color: 'primary.light',
            },
            readTime: {
                textAlign: 'left',
                color: 'primary.dark',
            },
            views: {
                textAlign: 'left',
                color: 'primary.light',
            },
            overlay: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0,
                transition: 'opacity 0.3s',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold',
            },
        },
        portfolioCard: {
            width: '100%',
            height: { xs: 250, sm: 300, md: 350 },
            borderRadius: 2,
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.6)',
            transition: 'transform 0.3s, border 0.3s',
            cursor: 'pointer',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&:hover': {
                transform: 'scale(1.02)',
            },
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                transition: 'opacity 0.3s',
            },
            title: {
                textAlign: 'left',
                color: 'secondary.dark',
            },
            views: {
                textAlign: 'left',
                color: 'primary.light',
            },
        },
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
                fontStyle: {
                    xs: 'normal',
                    selected: 'bold',
                },
                color: '#fefefe',
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