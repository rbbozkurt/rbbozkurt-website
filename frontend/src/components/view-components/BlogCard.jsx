import React from 'react';
import { Typography, Box, Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Tags } from '../text-components';
import { formatDate } from '../utils';

function BlogCard({ item, onClickCardClicked, icon, sx }) {
    const theme = useTheme();

    return (
        <Card
            onClick={() => onClickCardClicked(item.id)}
            sx={{
                ...theme.custom.blogCard,
                '&:hover .overlay': {
                    opacity: 1,
                },
                ...sx
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                {/* Image Section */}
                <Box
                    component="img"
                    alt={item.title}
                    src={item.image}
                    sx={{
                        ...theme.custom.blogCard.image,
                    }}
                />

                {/* Content Section */}
                <Box
                    sx={{
                        ...theme.custom.blogCard.content,
                        backgroundColor: theme.palette.background.paper,
                    }}
                >
                    <Box>
                        <Typography
                            sx={theme.custom.blogCard.title}
                        >
                            {item.title} {/* Title */}
                        </Typography>
                        <Typography
                            sx={theme.custom.blogCard.author}
                        >
                            {item.author} {/* Author */}
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, overflowY: 'auto', width: '100%' }}>
                        <Tags tags={item.tags} isColorized={false} isHorizontalScrollable={true} />
                    </Box>

                    <Box>
                        <Typography 
                            sx={theme.custom.blogCard.readTime}
                        >
                            {item.estimatedReadTime} {/* Read Time */}
                        </Typography>
                        <Typography
                            sx={theme.custom.blogCard.views}
                        >
                            {`${item.views} views • ${formatDate(item.date)}`} {/* Date */}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Overlay on Hover */}
            <Box
                className="overlay"
                sx={{
                    ...theme.custom.blogCard.overlay,
                }}
            >
                {/* Icon and VIEW text */}
                {icon}
            </Box>
        </Card>
    );
}

export { BlogCard };