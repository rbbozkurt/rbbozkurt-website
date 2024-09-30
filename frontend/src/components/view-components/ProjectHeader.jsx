import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Divider, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Tags } from '../text-components';

function ProjectHeader({ projectTitle, createdAt, estimatedReadTime, image, tags, link, views }) {
    const theme = useTheme();
    return (
        <Box
            direction="column"
            sx={{ padding: '0 0 16px 0' }}>

            {/* Project Title */}
            <Typography align="left" variant="h2" sx={{ marginBottom: '1rem' }}>
                {projectTitle}
            </Typography>

            {/* Project Link (Separate from Title, opens in a new tab) */}
            <Box sx={{ 
                display: 'flex',
                justifyContent: 'flex-start',
                marginBottom: '1rem' 
                }}>
                <Link 
                    href={link} 
                    underline="hover"
                    variant='h5'
                    target="_blank"                // Opens the link in a new tab
                    rel="noopener noreferrer"      // Security best practice
                    sx={{
                        color: theme.palette.primary.dark,
                    }}
                >
                    Project Link
                </Link>
            </Box>

            {/* Read Time, Views, and Date */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                }}
            >
                {/* Group read time and views */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                        variant="body1"
                        align='left'
                        sx={{
                            color: theme.palette.primary.dark,
                        }}
                    >
                        {`${estimatedReadTime} read `}
                    </Typography>
                    <Typography
                        variant="body1"
                        align='left'
                        sx={{
                            color: theme.palette.primary.light,
                            paddingX: '12px',
                        }}
                    >
                        {` • `}
                    </Typography>
                    <Typography
                        variant="body1"
                        align='left'
                        sx={{
                            color: theme.palette.primary.light,
                        }}
                    >
                        {` ${views} views`}
                    </Typography>
                </Box>

                {/* Right-aligned date */}
                <Typography
                    variant="body1"
                    align='right'
                    sx={{
                        color: theme.palette.primary.light,
                        marginLeft: 'auto',  // Pushes the date to the right
                    }}
                >
                    {`${createdAt}`}
                </Typography>
            </Box>

            <Divider
                orientation='horizontal'
                sx={{
                    backgroundColor: theme.palette.primary.light,
                    height: '1px', // Adjust the thickness here
                    margin: '4px 0 16px 0', // Add some space below the divider
                }} 
            />

            <Tags tags={tags} />

            <Box sx={{ marginBottom: '1rem', marginTop: '1rem' }}>
                <img src={image} alt={projectTitle} style={{ width: '100%', height: 'auto' }} />
            </Box>

        </Box>
    );
}

export { ProjectHeader };
