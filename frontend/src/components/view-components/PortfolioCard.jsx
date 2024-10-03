import React from 'react';
import { Typography, Box, Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Tags } from '../text-components';
import { formatDate } from '../utils';

function PortfolioCard({ item, onClickCardClicked, icon }) {
    const theme = useTheme();

    return (
        <Card
            onClick={() => onClickCardClicked(item.id)}
            sx={{
                ...theme.custom.portfolioCard,
                '&:hover .overlay': {
                    opacity: 1,
                },
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                height: '100%',
            }}>
                <Box
                    component='img'
                    alt={item.title}
                    src={item.imageUrl}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
                <Box
                    sx={{
                        padding: 1.5,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        gap: 2, // Add some spacing between the items
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={theme.custom.portfolioCard.title}
                    >
                        {item.title} {/* Title at the top */}
                    </Typography>

                    <Tags tags={item.tags} isColorized={false} isHorizontalScrollable={true} />

                    <Typography
                        variant="body2"
                        sx={theme.custom.portfolioCard.views}
                    >
                        {`${item.views} views • ${formatDate(item.date)}`} {/* Date at the bottom */}
                    </Typography>
                </Box>
            </Box>
            <Box
                className="overlay"
                sx={{
                    ...theme.custom.portfolioCard.overlay,
                }}
            >
                {/* Icon and VIEW text for the overlay */}
                {icon}
            </Box>
        </Card>
    );
}

export { PortfolioCard };