import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Divider, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Tags } from '../text-components';

function ProjectHeader({ projectTitle, createdAt, estimatedReadTime, image, tags, link, views }) {
    const theme = useTheme();
    return (
        <Box direction="column" sx={theme.custom.projectHeader.container}>
            {/* Project Title */}
            <Typography align="left" variant="h2" sx={theme.custom.projectHeader.title}>
                {projectTitle}
            </Typography>

            {/* Project Link (Separate from Title, opens in a new tab) */}
            <Box sx={theme.custom.projectHeader.linkContainer}>
                <Link 
                    href={link} 
                    underline="always"
                    target="_blank"                // Opens the link in a new tab
                    rel="noopener noreferrer"      // Security best practice
                    sx={theme.custom.projectHeader.link}
                    color = 'inherit'
                >
                    Project Link
                </Link>
            </Box>

            {/* Read Time, Views, and Date */}
            <Box sx={theme.custom.projectHeader.infoContainer}>
                {/* Group read time and views */}
                <Box sx={theme.custom.projectHeader.readTimeViewContainer}>
                    <Typography variant="body1" align='left' sx={theme.custom.projectHeader.readTime}>
                        {`${estimatedReadTime} read `}
                    </Typography>
                    <Typography variant="body1" align='left' sx={theme.custom.projectHeader.separator}>
                        {` • `}
                    </Typography>
                    <Typography variant="body1" align='left' sx={theme.custom.projectHeader.views}>
                        {` ${views} views`}
                    </Typography>
                </Box>

                {/* Right-aligned date */}
                <Typography variant="body1" align='right' sx={theme.custom.projectHeader.date}>
                    {`${createdAt}`}
                </Typography>
            </Box>

            <Divider orientation='horizontal' sx={theme.custom.projectHeader.divider} />

            <Tags tags={tags} />

            <Box sx={theme.custom.projectHeader.imageContainer}>
                <img src={image} alt={projectTitle} style={theme.custom.projectHeader.image} />
            </Box>
        </Box>
    );
}

export { ProjectHeader };