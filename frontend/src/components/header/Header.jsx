import { Stack, Box, Typography, IconButton, Divider, Container } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import { HEADER_TITLE, HEADER_SUBTITLE } from '../../constants';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import './Header.css';

function HeaderTitle() {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    return (
        <Box py={2}>
            <Typography
                variant='h4'
                sx={{
                    color: isDarkMode ? theme.palette.primary.contrastText : theme.palette.primary.dark,
                    fontFamily: theme.custom.header.title.fontFamily,
                    fontWeight: theme.custom.header.title.fontWeight,
                    fontSize: theme.typography.h4.fontSize,
                    px: 4,
                }}
            >
                {HEADER_TITLE}
            </Typography>
            <Typography
                variant='h3'
                sx={{
                    fontWeight: theme.custom.header.subtitle.fontWeight,
                    fontFamily: theme.custom.header.subtitle.fontFamily,
                    fontSize: theme.typography.h3.fontSize,
                    '&:hover': {
                        color: theme.custom.header.subtitle.hoverColor,
                    }
                }}
            >
                {HEADER_SUBTITLE}
            </Typography>
        </Box>
    );
}

function DarkModeToggleButton({ toggleDarkMode }) {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    return (
        <Box>
            <IconButton
                onClick={toggleDarkMode}
                sx={{
                    color: isDarkMode ? theme.custom.header.darkModeToggle.color.dark : theme.custom.header.darkModeToggle.color.light,
                    transition: theme.custom.header.darkModeToggle.transition,
                    transform: isDarkMode ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
            >
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
        </Box>
    );
}

function SocialMediaButtons() {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const socialMediaData = [
        { icon: GitHubIcon, link: 'https://github.com/rbbozkurt/', color: 'black' },
        { icon: InstagramIcon, link: 'https://www.instagram.com/rbbozkurt/', color: '#FD00BA' },
        { icon: LinkedInIcon, link: 'https://www.linkedin.com/in/resit-berkay-bozkurt/', color: '#0A66C2' },
        { icon: EmailIcon, link: 'mailto:resitberkaybozkurt@gmail.com', color: '#C5221F' }
    ];

    const handleButtonClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <Box
            display="flex"
            sx={{
                justifyContent: { xs: 'space-between', sm: 'flex-start' },
                width: '100%',
                gap: { xs: 1.5, sm: 0.5 },
            }}
        >
            {socialMediaData.map((item, index) => (
                <React.Fragment key={index}>
                    <IconButton
                        onClick={() => handleButtonClick(item.link)}
                        sx={{
                            color: { xs: `${item.color}`, sm: isDarkMode ? theme.palette.primary.light : theme.palette.primary.light },
                            '&:hover': {
                                color: `${item.color}`,
                            }
                        }}
                    >
                        <item.icon />
                    </IconButton>
                    {index !== socialMediaData.length - 1 && (
                        <Divider orientation="vertical" variant="middle" flexItem />
                    )}
                </React.Fragment>
            ))}
        </Box>
    );
}

function Header({ toggleDarkMode }) {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    return (
        <Box sx={{
            flexGrow: 1,
            display: 'flex',
            backgroundColor: isDarkMode ? theme.palette.background.default : theme.palette.secondary.light,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow on the bottom
        }}>
            <Container disableGutters={true} sx={{ width: '100%', height: 'auto' }}>
                <Box
                    sx={{
                        width: '100%', // Make header span full width
                        maxWidth: '100vw', // Avoid exceeding viewport width
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: theme.palette.text.primary,
                        backgroundColor: isDarkMode ? theme.palette.background.default : theme.palette.secondary.light,
                        padding: 2,
                    }}
                >
                    {/* Align Header Title to the Left */}
                    <HeaderTitle />

                    {/* Align Dark Mode Toggle and Social Media Buttons */}
                    <Stack
                        spacing={2}
                        alignItems="center"
                        sx={{ mt: { xs: 2, sm: 0 } }}
                    >
                        <DarkModeToggleButton toggleDarkMode={toggleDarkMode} />
                        <SocialMediaButtons />
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

export { Header };