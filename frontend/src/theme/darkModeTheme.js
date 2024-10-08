export const darkModeTheme = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFC107',
            light: '#b2b2b2',
            dark: '#ededed',
            contrastText: '#cccccc',
        },
        secondary: {
            main:  '#03DAC6',
            light: '#2b2a2a',
            dark: '#b2b2b2',
            contrastText: '#000000',
        },
        background: {
            default: '#121212',
            paper: '#1E1E1E',
        },
        text: {
            default :'#ededed',
            primary: '#cccccc',
            secondary:'#b2b2b2',
            error : '#ff1744'
        },
        roles : {
            sofwareDeveloper: {
                color: '#4CAF50',
                backgroundColor: '#E8F5E9',
            },
            engineer: {
                color: '#2196F3',
                backgroundColor: '#E3F2FD',
            },
            coder: {
                color: '#FFC107',
                backgroundColor: '#FFF8E1',
            }
        },
        toggle: {
            iconColor : '#FFA500',
        }

    },
    typography: {
        fontFamily: '"Source Code Pro", monospace',
        h1: {
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            color: 'text.default',
        },
        h2: {
            fontWeight: 600,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            color: 'text.primary',
        },
        h3: {
            fontWeight: 600,
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
            color: 'text.primary',
        },
        h4: {
            fontFamily: '"Playwrite CU", cursive',
            fontWeight: 400,
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            color: 'text.primary',
        },
        body1: {
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            color: 'text.secondary',
        },
        body2: {
            fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
            color: 'text.secondary',
        },
        button: {
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            textTransform: 'none',
            color: 'primary.contrastText',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                    },
                },
            },
        },
        MuiCircularProgress: {
            styleOverrides: {
                colorPrimary: {
                    color: 'primary.main',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: 'primary.dark',
                },
            },
        },
    },
    custom: {
        mainContainer: {
            spacing: {
                xs: 1,
                sm: 4,
                md: 6,
            }
        },
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
            mainContainer: {
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            },
            card: {
                prevNextCard: {
                    flexGrow: 1,
                    flexShrink: 1,
                    height: '40%',
                    width: '100%',
                    transform: 'scale(0.9)',
                },
                currentCard: {
                    flexGrow: 1,
                    flexShrink: 1,
                    height: '40%',
                    width: '100%',
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
            mainContainer: {
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
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
                flexDirection: 'column',
            },
            title: {
                textAlign: 'left',
                fontWeight: 600,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                color: 'text.primary',
            },
            author: {
                color: 'text.secondary',
                paddingBottom: '1rem',
                textAlign: 'left',
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
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
                color: 'text.primary',
                textAlign: 'left',
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            },
            separator: {
                color: 'text.secondary',
                textAlign: 'left',
                paddingX: '12px',
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            },
            views: {
                color: 'text.secondary',
                textAlign: 'left',
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            },
            date: {
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
                textAlign: {
                    xs: 'left',
                    sm: 'right',
                },
                color: 'text.secondary',
                marginLeft: {
                    xs: 0,
                    sm: 'auto',
                }
            },
            divider: {
                backgroundColor: 'primary.dark',
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
            '&:hover .overlay': {
                opacity: 1,
            },
            boxShadow: {
                xs: '0px 10px 10px rgba(0, 0, 0, 0.0)',
                sm: '0px 10px 20px rgba(0, 0, 0, 0.0)',
            },
            borderRadius: 2,
            transition: 'transform 0.3s, border 0.3s',
            cursor: 'pointer',
            position: 'relative',
            '&:hover': {
                transform: 'scale(1.02)',
            },
            containerBox: {
                display: 'flex', flexDirection: 'row', height: '100%'
            },
            tagContainerBox: {
                flexGrow: 1, overflowY: 'auto', width: '100%'
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
                backgroundColor: 'background.paper',
            },
            title: {
                fontSize: {
                    xs: '0.6rem',
                    sm: '1.2rem',
                    md: '1.6rem'
                },
                textAlign: 'left',
                color: 'text.primary',
            },
            author: {
                fontSize: {
                    xs: '0.5rem',
                    sm: '1rem',
                    md: '1.2rem'
                },
                textAlign: 'left',
                color:'text.secondary',
            },
            readTime: {
                fontSize: {
                    xs: '0.5rem',
                    sm: '0.8rem',
                    md: '1rem'
                },
                textAlign: 'left',
                color: 'text.primary',
            },
            views: {
                fontSize: {
                    xs: '0.5rem',
                    sm: '0.8rem',
                    md: '1rem'
                },
                textAlign: 'left',
                color: 'text.secondary',
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
                color: 'primary.contrastText',
                fontSize: '1.5rem',
                fontWeight: 'bold',
            },
        },
        portfolioCard: {
            width: '100%',
            height: { xs: 160, sm: 320, md: 360 },
            position: 'relative',
            borderRadius: 2,
            boxShadow: {
                xs: '0px 10px 10px rgba(0, 0, 0, 0.0)',
                sm: '0px 10px 20px rgba(0, 0, 0, 0.0)',
            },
            '&:hover .overlay': {
                opacity: 1,
            },
            transition: 'transform 0.3s, border 0.3s',
            cursor: 'pointer',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&:hover': {
                transform: 'scale(1.02)',
            },
            mainContainer: {
                display: 'flex', flexDirection: 'column', height: '100%'
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
                backgroundColor: 'background.paper',
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
                color: 'text.primary',
            },
            readTime: {
                fontSize: {
                    xs: '0.5rem',
                    sm: '0.8rem',
                    md: '1rem'
                },
                textAlign: 'left',
                color: 'text.primary',
            },
            views: {
                fontSize: {
                    xs: '0.5rem',
                    sm: '0.8rem',
                    md: '1rem'
                },
                textAlign: 'left',
                color: 'text.secondary',
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
                color: 'primary.contrastText',
                fontSize: '1.5rem',
                fontWeight: 'bold',
            },

        },
        projectHeader: {
            flexDirection: 'column',
            container: {
                padding: '0 0 16px 0',
            },
            title: {
                textAlign: 'left',
                fontSize: {
                    xs: '1.5rem',
                    sm: '1.8rem',
                    md: '2rem'
                },

                fontWeight: 600,
                color: 'text.primary',
                marginBottom: '1rem',
            },
            linkContainer: {
                display: 'flex',
                justifyContent: 'flex-start',
                marginBottom: '1rem',
            },
            link: {
                fontSize:
                {
                    xs: '1rem',
                    sm: '1.2rem',
                    md: '1.5rem'
                },
                '&:hover': {
                    fontSize: {
                        xs: '1.2rem',
                        sm: '1.5rem',
                        md: '1.8rem'
                    }
                },
                color: '#3b8ef9',
                fontStyle: 'underline',
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
                color: 'text.primary',
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            },
            separator: {
                color: 'text.secondary',
                paddingX: '12px',
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            },
            views: {
                color: 'text.secondary',
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            },
            date: {
                textAlign: {
                    xs: 'left',
                    sm: 'right',
                },
                color: 'text.secondary',
                marginLeft: {
                    xs: 0,
                    sm: 'auto',
                },
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            },
            divider: {
                backgroundColor: 'primary.dark',
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
            outerBox: {
                flexGrow: 1,
                display: 'flex',
                backgroundColor: 'background.paper',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow on the bottom
            },
            container: {
                width: '100%', height: 'auto'
            },
            innerBox: {
                width: '100%', // Make header span full width
                maxWidth: '100vw', // Avoid exceeding viewport width
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'text.default',
                backgroundColor: 'background.paper',
                padding: {
                    xs: 2,
                    sm: 2
                }
            },
            stack: {
                mt: { xs: 0, sm: 0 }
            },
            title: {
                box: {
                    py: {
                        xs: 1,
                        sm: 2,
                    }
                },
                fontFamily: '"Playwrite CU", cursive',
                fontWeight: 400,
                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
                color: 'text.default',
                px: 4,
            },
            subtitle: {
                fontWeight: 600,
                fontFamily: '"Source Code Pro", monospace',
                color: 'text.secondary',
                '&:hover': {
                    color: 'primary.main',
                },
                fontSize: { xs: '1.4rem', sm: '1.5rem', md: '2rem' },
            },
            darkModeToggle: {
                color: 'toggle.iconColor',
                transition: 'transform 0.5s',
                transform: 'rotate(180deg)',
            },
            socialMedia: {
                box: {
                    justifyContent: { xs: 'space-between', sm: 'flex-start' },
                    width: '100%',
                    gap: { xs: 1.5, sm: 0.5 },
                },

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
                },
                selected: {
                    fontSize: {
                        xs: '1.4rem',
                        sm: '1.8rem',
                    },
                    
                    color: 'text.default',
                },
                fontWeight: {
                    xs: 0,
                    sm: 0,
                },
                fontStyle: {
                    xs: 'normal',
                },

                color: 'text.secondary',
    
                '&:hover': {
                    color: 'text.primary',
                }
            },
        },
        highlightedText: {
            padding: '0 4px',
            fontStyle: 'italic',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            color: 'text.primary',
        },
        roleText: {
            padding: '0 4px',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            color: 'text.primary',
            link: {
                textDecoration: 'none',
                color: 'inherit'
            }
        },
        turkey: {
            backgroundColor: 'red',
            color: 'primary.contrastText',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
        },
        berlin: {
            backgroundImage: 'linear-gradient(90deg, black 33%, red 33%, red 66%, gold 66%)',
            color: 'primary.contrastText',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
        },
        subText: {
            fontStyle: 'italic',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            color: 'text.secondary',
        },
        paragraph: {
            padding: '0 0 18px 0',
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            color: 'text.primary',
            textAlign: 'left',
        },
        section: {
            box: {
                flexDirection: 'column',
                padding: {
                    xs: '16px 0 4px 0',
                    sm: '32px 0 8px 0',
                    md: '64px 0 16px 0',
                },
            },
            title: {
                textAlign: 'left',
                fontWeight: 600,
                fontSize: { xs: '1.4rem', sm: '2rem', md: '2.5rem' },
                color: 'text.primary',
            },
            divider: {
                orientation: 'horizontal',
                backgroundColor: 'primary.dark',
                height: '1px',
                margin: '4px 0 16px 0',
            },
        },
        tags: {
            box: {
                display: 'flex',
                gap: 1,
                '&::-webkit-scrollbar': {
                    display: 'none', // Hides the scrollbar for webkit browsers (Chrome, Safari)
                },
                '-ms-overflow-style': 'none',  // Hides scrollbar for Internet Explorer and Edge
                'scrollbar-width': 'none',     // Hides scrollbar for Firefox
            },
            text: {
                borderRadius: '4px',
                fontWeight: 'bold',
                padding: '1px 4px',
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
                color: 'secondary.dark',
                backgroundColor: 'secondary.light',
            }
        },

        aboutPage: {
            box: {
                flexDirection: 'column',
            },
            sensitiveContent: {
                box: {
                    width: '100%',
                    height: 300,
                    objectFit: 'cover',
                    borderRadius: 2,
                }
            }
        },
        blogPage: {
            box: {
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                paddingTop: '2rem',
            },
            loadingBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            },
            errorBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                text: {
                    color: 'text.error',
                }
            },
            noBlogBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                text: {
                    color: 'text.error',
                }
            },
            grid: {
                container: {
                    spacing: 4,
                    justifyContent: 'center',
                    alignItems: 'stretch',
                },
                item: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    blogCard: {
                        fontSize: 'large'
                    }
                },
                noMatchingBlog: {
                    box: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                    },
                    text: {
                        marginTop: '3rem',
                        textAlign: 'center',
                        width: '100%',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        color: 'text.primary',
                    }
                }
            }
        },
        blogDetailedPage: {
            loadingBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }
        },
        errorPage: {
            box: {
                flexDirection: 'column',
            },
            errorCode: {
                text: {
                    fontWeight: 700,

                    fontSize: '6rem',
                    fontWeight: 'bold',
                    color: 'text.error'
                }
            },
            errorTitle: {
                fontWeight: 600,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                fontFamily: "Playwrite CU",
                px: 4,
                marginBottom: '2rem',
                color: 'text.primary',
            },
            errorSubtitle: {
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
                color: 'text.secondary',
                marginBottom: '2rem',
            }
        },
        homePage: {
            box: {
                flexDirection: 'column',
            },
            roleText: {
                softwareDeveloper: {
                    fontWeight: 'bold',
                    color: 'roles.sofwareDeveloper.color',
                    backgroundColor: 'roles.sofwareDeveloper.backgroundColor',
                },
                engineer: {
                    fontWeight: 'bold',
                    color: 'roles.engineer.color',
                    backgroundColor: 'roles.engineer.backgroundColor',
                },
                coder: {
                    fontWeight: 'bold',
                    color: 'roles.coder.color',
                    backgroundColor: 'roles.coder.backgroundColor',
                }
            }
        },
        portfolioPage: {
            box: {
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                paddingTop: '2rem',
            },
            loadingBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            },
            errorBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                text: {
                    color: 'text.error',
                }
            },
            noBlogBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                text: {
                    color: 'text.error',
                }
            },
            grid: {
                container: {
                    spacing: 4,
                    justifyContent: 'center',
                    alignItems: 'stretch',
                },
                item: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    blogCard: {
                        fontSize: {
                            xs: 'large'
                        }
                    }
                },
                noMatchingBlog: {
                    box: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                    },
                    text: {
                        marginTop: '3rem',
                        textAlign: 'center',
                        width: '100%',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        color: 'text.primary',
                    }
                }
            }
        },
        projectDetailedPage: {
            loadingBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }
        },
        searchBar: {
            paper: {
                p: '2px 2px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                marginBottom: '2rem',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                boxShadow: 'none', // Remove shadows
                border: `1.5px solid`, // Add outline
                borderColor : 'primary.light',
                borderRadius: '4px', // Optional: add border radius for rounded corners
                '&:focus-within': {
                    border: `2px solid`, // Change border size and color on focus
                    borderColor: 'primary.dark',
                    '& .MuiSvgIcon-root': {
                        color: 'primary.dark',
                    }
                }
            },
            inputBase: {
                ml: 1,
                flex: 1,
                color: 'primary.dark',
            },
            iconButton: {
                p: '10px',
                searchButton: {
                    color: 'primary.light',
                }
            }
        },
        sensitiveContent: {
            container: {
                borderRadius: 2,
                '&:hover': {
                    cursor: 'pointer'
                },
                position: "relative",
                display: "inline-block"
            },
            contentContainer: {
                borderRadius: 2,
            },
            cover: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "primary.contrastText",
                textAlign: "center",
                zIndex: 1,
                borderRadius: 2,
                backdropFilter: {
                    xs : 'blur(20px)', // Apply blur effect
                    sm : 'blur(10px)', // Apply blur effect
                },
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent background
                transition: 'opacity 0.3s ease', // Smooth transition for opacity change
                '&:hover': {
                    '& .MuiSvgIcon-root, & .MuiTypography-root': {
                        color: 'primary.main', // Gold color for hover effect
                        transition: 'color 0.3s ease', // Smooth transition for color change
                    },
                },
                flexDirection: 'column',
                gap: 1,
                icon: {
                    fontSize: 50,
                    marginBottom: '10px',
                    color: 'primary.contrastText'
                },
                text: {
                    fontSize: 20,
                    color: 'primary.contrastText'
                },
                pointerEvents : 'none',
                opacity : 0,
                hidden : {
                    pointerEvents : 'auto',
                    opacity : 1
                }
            }
        }
    },
}; 