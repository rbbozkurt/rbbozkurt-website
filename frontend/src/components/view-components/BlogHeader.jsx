import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Tags } from '../text-components';

function BlogHeader({ blogTitle, author, createdAt, estimatedReadTime, image, tags, views }) {
    const theme = useTheme();
    return (
        <Box
            sx={theme.custom.blogHeader.container}
        >
            <Typography
                sx={theme.custom.blogHeader.title}
            >
                {blogTitle}
            </Typography>
            <Typography
                sx={theme.custom.blogHeader.author}
            >
                {author}
            </Typography>
            
            <Box sx={theme.custom.blogHeader.infoContainer}>
                {/* Group read time and views */}
                <Box sx={theme.custom.blogHeader.readTimeViewContainer}>
                    <Typography
                        sx={theme.custom.blogHeader.readTime}
                    >
                        {`${estimatedReadTime} read `}
                    </Typography>
                    <Typography
                        sx={theme.custom.blogHeader.separator}
                    >
                        {` • `}
                    </Typography>
                    <Typography
                        sx={theme.custom.blogHeader.views}
                    >
                        {` ${views} views`}
                    </Typography>
                </Box>

                {/* Right-aligned date */}
                <Typography
                    sx={theme.custom.blogHeader.date}
                >
                    {`${createdAt}`}
                </Typography>
            </Box>

            <Divider
                orientation='horizontal'
                sx={theme.custom.blogHeader.divider}
            />
            
            <Tags tags={tags} />

            <Box sx={theme.custom.blogHeader.imageContainer}>
                <img src={image} alt={blogTitle} style={theme.custom.blogHeader.image} />
            </Box>
        </Box>
    );
}

export { BlogHeader };