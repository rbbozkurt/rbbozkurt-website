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
                ...sx
            }}
        >
            <Box sx={theme.custom.blogCard.containerBox}>
                {/* Image Section */}
                <Box
                    component="img"
                    alt={item.title}
                    src={item.image}
                    sx={theme.custom.blogCard.image}
                />

                {/* Content Section */}
                <Box
                    sx={theme.custom.blogCard.content}
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

                    <Box sx={theme.custom.blogCard.tagContainerBox}>
                        <Tags tags={item.tags} isColorized={false} isHorizontalScrollable={true} sx={theme.custom.portfolioCard.tag} />
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
                sx={theme.custom.blogCard.overlay}
            >
                {/* Icon and VIEW text */}
                {icon}
            </Box>
        </Card>
    );
}

export { BlogCard };