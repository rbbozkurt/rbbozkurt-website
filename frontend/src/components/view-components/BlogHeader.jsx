import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Tags } from '../text-components';

function BlogHeader({ blogTitle, author, createdAt, estimatedReadTime, image, tags, views }) {
    const theme = useTheme();
    return (
        <Box
            direction="column"
            sx={{ padding: '0 0 16px 0' }}>

            <Typography align="left" variant="h2">
                {blogTitle}
            </Typography>
            <Typography
                variant="body1"
                align='left'
                sx={{
                    color: theme.palette.primary.light,
                    paddingBottom: '1rem'
                }}
            >
                {author}
            </Typography>
            
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
                            paddingX : '12px',
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
                    height: '1px',
                    margin: '4px 0 16px 0',
                }}
            />
            
            <Tags tags={tags} />

            <Box sx={{ marginBottom: '1rem', marginTop: '1rem' }}>
                <img src={image} alt={blogTitle} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            </Box>

        </Box>
    );
}

export { BlogHeader };
