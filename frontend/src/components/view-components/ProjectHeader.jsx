import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Tags } from '../text-components';

function ProjectHeader({ projectTitle, createdAt, estimatedReadTime, image, tags }) {
    const theme = useTheme();
    return (
        <Box
            direction="column"
            sx={{ padding: 'px 0 16px 0' }}>

            <Typography align="left" variant="h2">
                {projectTitle}
            </Typography>
            <Typography
                variant="body1"
                align='left'
                sx={{
                    color: theme.palette.primary.light,
                }}
            >
                {`${createdAt} - ${estimatedReadTime} read`}
            </Typography>

            <Divider
                orientation='horizontal'
                sx={{
                    backgroundColor: 'primary.light',
                    height: '1px', // Adjust the thickness here
                    margin: '4px 0 16px 0', // Add some space below the divider
                }} />
            <Tags tags={tags}></Tags>

            <Box sx={{ marginBottom: '1rem', marginTop: '1rem' }}>
                <img src={image} alt={projectTitle} style={{ width: '100%', height: 'auto' }} />
            </Box>

        </Box>
    );
}
export { ProjectHeader };
