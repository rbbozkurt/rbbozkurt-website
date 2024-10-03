export const lightModeTheme = {
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
        previewTheme: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: '100%',
            padding: {
                xs: '1rem',
                sm: '1.5rem',
                md: '3rem',
            }
        },
        blogPreviewTheme: {
            container: {
                width: '100%',
                position: 'relative',
            },
            card: {
                prevNextCard: {
                    flexGrow: 1,
                    flexShrink: 1,
                    height: '80%',
                    transform: 'scale(0.9)',
                },
                currentCard: {
                    flexGrow: 1,
                    flexShrink: 1,
                    height: '80%',
                    marginY: {
                        xs: 2,
                        sm: 4,
                        md: 6,
                    },
                    transform: 'scale(1.2)',
                    transition: 'transform 0.3s',
                    zIndex: 1,
                },
                iconSize: 80,
                transitionDuration: '0.3s',
                scaleDuration: 5000,
                cardScale: 1.2,
            },
        },
        portfolioPreviewTheme: {
            container: {
                padding: '2rem',
                width: '100%',
                position: 'relative',
            },
            card: {
                prevNextCard: {
                    flexGrow: 1,
                    flexShrink: 1,
                    width: '40%',
                    transform: 'scale(0.9)',
                },
                currentCard: {
                    flexGrow: 1,
                    flexShrink: 1,
                    width: '40%',
                    marginX: {
                        xs: 2,
                        sm: 4,
                        md: 6,
                    },

                    transform: 'scale(1.2)',
                    transition: 'transform 0.3s',
                    zIndex: 1,
                },
                iconSize: 80,
                transitionDuration: '0.3s',
                scaleDuration: 5000,
                cardScale: 1.2,
            },
        },
        blogHeader: {
            container: {
                padding: '0 0 16px 0',
            },
            title: {
                textAlign: 'left',
                variant: 'h2',
            },
            author: {
                color: 'primary.light',
                paddingBottom: '1rem',
                textAlign: 'left',
                variant: 'body1',
            },
            infoContainer: {
                display: 'flex',
                alignItems: {
                    xs: 'flex-start',
                    sm: 'center',
                },
                flexDirection: {
                    xs: 'column',
                    sm: 'row',
                },
                width: '100%',
            },
            readTimeViewContainer: {
                flexDirection: {
                    xs: 'row',
                    sm: 'row',
                },
                display: 'flex',
                alignItems: {
                    xs: 'flex-start',
                    sm: 'center',
                }
            },
            readTime: {
                color: 'primary.dark',
                textAlign: 'left',
            },
            separator: {
                color: 'primary.dark',
                textAlign: 'left',
                paddingX: '12px',
            },
            views: {
                color: 'primary.light',
                textAlign: 'left',
                variant: 'body1',
            },
            date: {
                textAlign: {
                    xs: 'left',
                    sm: 'right',
                },
                color: 'primary.light',
                marginLeft: {
                    xs: 0,
                    sm: 'auto',
                }
            },
            divider: {
                backgroundColor: 'primary.light',
                height: '1px',
                margin: '4px 0 16px 0',
            },
            image: {
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '1rem',
                marginTop: '1rem',
            },
        },
        blogCard: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: {
                xs: 120,
                sm: 160,
                md: 200,
            },
            boxShadow: {
                xs: '0px 10px 10px rgba(0, 0, 0, 0.6)',
                sm: '0px 10px 20px rgba(0, 0, 0, 0.6)',
            },
            borderRadius: 1,
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
                fontSize: {
                    xs: '1rem',
                    sm: '1.2rem',
                    md: '1.6rem'
                },
                textAlign: 'left',
                color: 'primary.dark',
            },
            author: {
                fontSize: {
                    xs: '0.8rem',
                    sm: '1rem',
                    md: '1.2rem'
                },
                textAlign: 'left',
                color: 'primary.light',
            },
            readTime: {
                fontSize: {
                    xs: '0.5rem',
                    sm: '0.8rem',
                    md: '1rem'
                },
                textAlign: 'left',
                color: 'primary.dark',
            },
            views: {
                fontSize: {
                    xs: '0.5rem',
                    sm: '0.8rem',
                    md: '1rem'
                },
                textAlign: 'left',
                color: 'primary.light',
            },
            tag: {
                fontSize: {
                    xs: '0.5rem',
                    sm: '0.8rem',
                    md: '1rem'
                }
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
            height: { xs: 160, sm: 320, md: 360 },
            borderRadius: 2,
            boxShadow: {
                xs: '0px 10px 10px rgba(0, 0, 0, 0.6)',
                sm: '0px 10px 20px rgba(0, 0, 0, 0.6)',
            },
            transition: 'transform 0.3s, border 0.3s',
            cursor: 'pointer',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&:hover': {
                transform: 'scale(1.02)',
            },
            image: {
                width: '100%',
                height: '50%',
                objectFit: 'cover',
            },
            content: {
                padding: {
                    xs: 0.6,
                    sm: 2
                },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                gap: {
                    xs: 0.5,
                    sm: 1,
                    md: 2
                }
            },
            title: {
                fontSize: {
                    xs: '0.7rem',
                    sm: '1.2rem',
                    md: '1.6rem'
                },
                textAlign: 'left',
                color: 'secondary.dark',
            },
            readTime: {
                fontSize: {
                    xs: '0.5rem',
                    sm: '0.8rem',
                    md: '1rem'
                },
                textAlign: 'left',
                color: 'primary.dark',
            },
            views: {
                fontSize: {
                    xs: '0.5rem',
                    sm: '0.8rem',
                    md: '1rem'
                },
                textAlign: 'left',
                color: 'primary.light',
            },
            tag: {
                fontSize: {
                    xs: '0.5rem',
                    sm: '0.8rem',
                    md: '1rem'
                }
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
        projectHeader: {
            container: {
                padding: '0 0 16px 0',
            },
            title: {
                fontSize: '2rem',
                marginBottom: '1rem',
            },
            linkContainer: {
                display: 'flex',
                justifyContent: 'flex-start',
                marginBottom: '1rem',
            },
            link: {
                fontSize :
                {
                    xs : '1rem',
                    sm : '1.2rem',
                    md : '1.5rem'
                },
                '&:hover': {
                    fontSize : {
                        xs : '1.2rem',
                        sm : '1.5rem',
                        md : '1.8rem'
                    }
                } ,   
                color: '#105ABF',
                fontStyle : 'underline',
            },
            infoContainer: {
                display: 'flex',
                alignItems: {
                    xs: 'flex-start',
                    sm: 'center',
                },
                flexDirection: {
                    xs: 'column',
                    sm: 'row',
                },
                width: '100%',
            },
            readTimeViewContainer: {
                flexDirection: {
                    xs: 'row',
                    sm: 'row',
                },
                display: 'flex',
                alignItems: {
                    xs: 'flex-start',
                    sm: 'center',
                }
            },
            readTime: {
                color: 'primary.dark',
            },
            separator: {
                color: 'primary.light',
                paddingX: '12px',
            },
            views: {
                color: 'primary.light',
            },
            date: {
                textAlign: {
                    xs: 'left',
                    sm: 'right',
                },
                color: 'primary.light',
                marginLeft: {
                    xs: 0,
                    sm: 'auto',
                }
            },
            divider: {
                backgroundColor: 'primary.light',
                height: '1px',
                margin: '4px 0 16px 0',
            },
            imageContainer: {
                marginBottom: '1rem',
                marginTop: '1rem',
            },
            image: {
                width: '100%',
                height: 'auto',
                borderRadius: '8px',

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
                fontStyle: {
                    xs: 'normal',
                    selected: 'bold',
                },
                color: 'rgb(21, 21, 21)',
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