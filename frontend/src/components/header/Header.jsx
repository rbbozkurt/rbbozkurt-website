import { Stack, Box, Typography, IconButton, Divider, Container } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import { HEADER_TITLE, HEADER_SUBTITLE } from '../../constants';
import React from 'react';
import './Header.css';

function HeaderTitle({ darkMode }) {
    return (
        <Box py={2}>
            <Typography
                variant='h4'
                sx={{
                    color: darkMode ? 'primary.dark' : 'primary.dark',
                    fontFamily: "Playwrite CU",
                    px: 4,
                }}
            >
                {HEADER_TITLE}
            </Typography>
            <Typography
                variant='h3'
                sx={{
                    fontStyle: 'bold',
                    fontFamily: 'Source Code Pro',
                    '&:hover': {
                        color: '#FFC107',
                    }
                }}
            >
                {HEADER_SUBTITLE}
            </Typography>
        </Box>
    );
}

function DarkModeToggleButton({ darkMode, toggleDarkMode }) {
    return (
        <Box>
            <IconButton
                onClick={toggleDarkMode}
                className= {darkMode ? 'light-mode-toggle' : 'dark-mode-toggle'}
            >
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
        </Box>
    );
}

function SocialMediaButtons() {
    const socialMediaData = [
        { icon: GitHubIcon, link: 'https://github.com/your-username', color : 'black' },
        { icon: InstagramIcon, link: 'https://www.instagram.com/your-profile', color : '#FD00BA' },
        { icon: LinkedInIcon, link: 'https://www.linkedin.com/in/your-profile', color : '#0A66C2' },
        { icon: EmailIcon, link: 'mailto:your-email@example.com', color : '#C5221F' },
    ];

    const handleButtonClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <Box display="flex">
            {socialMediaData.map((item, index) => (
                <React.Fragment key={index}>
                    <IconButton
                        onClick={() => handleButtonClick(item.link)}
                        sx={{
                            color: 'primary.light',
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

function Header({ darkMode = false, toggleDarkMode }) {
    return (
        <Box sx={{
            flexGrow: 1,
            display: 'flex',
            backgroundColor: 'secondary.light',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow on the bottom
        }}>
            <Container disableGutters={true} sx={{ width: '100%', height: 'auto' }}>
                <Box
                    sx={{
                        width: '100%', // Make header span full width
                        maxWidth: '100vw', // Avoid exceeding viewport width
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: 'text.primary',
                        backgroundColor: 'secondary.light',
                        padding: 2,
                    }}
                >
                    {/* Align Header Title to the Left */}
                    <HeaderTitle darkMode={darkMode} />

                    {/* Align Dark Mode Toggle and Social Media Buttons to the Right */}
                    <Stack
                        spacing={2}
                        alignItems="center"
                    >
                        <DarkModeToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                        <SocialMediaButtons />
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

export { Header };
