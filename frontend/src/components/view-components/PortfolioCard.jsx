import React from 'react';
import { Typography, Box, Card, Icon } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Tags } from '../text-components';
import { formatDate } from '../utils';
import TocIcon from '@mui/icons-material/Toc';

function PortfolioCard({ item, onClickCardClicked, icon }) {
    const theme = useTheme();

    return (
        <Card
            onClick={() => onClickCardClicked(item.id)}
            sx={{
                width: '100%',
                height: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end', // Align items towards the bottom of the card
                boxShadow: 'none',
                borderRadius: 2,
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.6)', // Add a subtle shadow

                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.3s, border 0.3s',
                cursor: 'pointer',
                position: 'relative', // Needed for overlay positioning
                '&:hover': {
                    transform: 'scale(1.02)',
                },
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
                    src={item.image.presignedUrl}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                >

                </Box>
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
                        sx={{ textAlign: 'left', color: theme.palette.secondary.dark }}
                    >
                        {item.title} {/* Title at the top */}
                    </Typography>

                    <Tags tags={item.tags} isColorized={false} isHorizontalScrollable={true} />

                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: 'left',
                            color: theme.palette.primary.light,
                        }}
                    >
                        {`${item.views} views • ${formatDate(item.date)}`} {/* Date at the bottom */}
                    </Typography>
                </Box>
            </Box>
            <Box
                className="overlay"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                }}
            >
                {/* Icon and VIEW text for the overlay */}
                {icon}

            </Box>

        </Card>
    );
}

export { PortfolioCard };