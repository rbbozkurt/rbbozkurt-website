import React from 'react';
import { Typography, Box, Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Tags } from '../text-components';
import { formatDate } from '../utils';

function PortfolioCard({ item, onClickCardClicked, icon, sx }) {
    const theme = useTheme();

    return (
        <Card
            onClick={() => onClickCardClicked(item._id)}
            sx={{
                ...theme.custom.portfolioCard,
                ...sx
            }}
        >
            <Box sx={theme.custom.portfolioCard.mainContainer}>
                {/* Image Section */}
                <Box
                    component="img"
                    alt={item.title}
                    src={item.imageUrl}
                    sx={theme.custom.portfolioCard.image}
                />

                {/* Content Section */}
                <Box
                    sx={theme.custom.portfolioCard.content}
                >
                    <Typography
                        sx={theme.custom.portfolioCard.title}
                    >
                        {item.title} {/* Title */}
                    </Typography>

                    <Tags tags={item.tags} isColorized={false} isHorizontalScrollable={true} sx={{
                        fontSize : theme.custom.portfolioCard.tag.fontSize}}/>
                    <Typography
                    sx = {theme.custom.portfolioCard.readTime}>
                        {item.estimatedReadTime} {/* Description */}
                    </Typography>
                    <Typography
                        sx={theme.custom.portfolioCard.views}
                    >
                        {`${item.views} views • ${formatDate(item.date)}`} {/* Date */}
                    </Typography>
                </Box>
            </Box>

            {/* Overlay on Hover */}
            <Box
                className="overlay"
                sx={theme.custom.portfolioCard.overlay}
            >
                {/* Icon and VIEW text */}
                {icon}
            </Box>
        </Card>
    );
}

export { PortfolioCard };