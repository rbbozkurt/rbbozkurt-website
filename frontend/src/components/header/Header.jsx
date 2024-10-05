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

function HeaderTitle() {
    const theme = useTheme();
    return (
        <Box sx={theme.custom.header.title.box}>
            <Typography
                sx={theme.custom.header.title}>
                {HEADER_TITLE}
            </Typography>
            <Typography
                sx={{
                    ...theme.custom.header.subtitle,
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
                sx={theme.custom.header.darkModeToggle}
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
            sx={theme.custom.header.socialMedia.box}>
            {socialMediaData.map((item, index) => (
                <React.Fragment key={index}>
                    <IconButton
                        onClick={() => handleButtonClick(item.link)}
                        sx={{
                            ...theme.custom.header.socialMedia.color,
                            color: { xs: `${item.color}`, },
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
    return (
        <Box sx={theme.custom.header.outerBox}>
            <Container disableGutters={true} sx={theme.custom.header.container}>
                <Box
                    sx={theme.custom.header.innerBox}>
                    {/* Align Header Title to the Left */}
                    <HeaderTitle />
                    {/* Align Dark Mode Toggle and Social Media Buttons */}
                    <Stack
                        spacing={2}
                        alignItems="center"
                        sx={theme.custom.header.stack}>
                        <DarkModeToggleButton toggleDarkMode={toggleDarkMode} />
                        <SocialMediaButtons />
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

export { Header };