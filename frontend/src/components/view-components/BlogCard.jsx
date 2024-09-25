import React from 'react';
import { Typography, Box, Card, Icon } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TocIcon from '@mui/icons-material/Toc';
import { Tags } from '../text-components';
import { formatDate } from '../utils';

function BlogCard({ item, onClickCardClicked }) {
    const theme = useTheme();

    console.log(`The id of item is ${item._id}`);

    return (
        <Card
            onClick={() => onClickCardClicked(item.id)}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%', // Full width of the container
                height: 200, // Fixed height
                boxShadow: 'none',
                borderRadius: 2,
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
            {/* Image Section */}
            <Box
                component="img"
                alt={item.title}
                src={item.image}
                sx={{
                    width: '40%', // Image takes 40% of the card width
                    height: '100%',
                    objectFit: 'cover',
                    borderTopLeftRadius: 2,
                    borderBottomLeftRadius: 2,
                }}
            />

            {/* Content Section */}
            <Box
                sx={{
                    width: '60%', // Content takes 60% of the card width
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 1, // Add some spacing between the items
                    backgroundColor: theme.palette.background.paper,
                }}
            >
                <Box>
                    <Typography
                        variant="h6"
                        sx={{ textAlign: 'left', color: theme.palette.primary.dark }}
                    >
                        {item.title} {/* Title at the top */}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ textAlign: 'left', color: theme.palette.primary.light }}
                    >
                        {item.author} {/* Author below the title */}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        flexGrow: 1, // Takes up available space, pushing the date to the bottom
                        overflowY: 'auto',
                        width: '100%',
                    }}
                >
                    <Tags tags={item.tags} isColorized={false} isHorizontalScrollable={true} />
                </Box>

                <Box>
                    <Typography 
                        variant="body2" 
                        sx={{ textAlign: 'left', color: theme.palette.primary.dark }}
                    >
                        {item.estimatedReadTime} {/* Estimated read time above the date */}
                    </Typography>
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

            {/* Overlay on Hover */}
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
                <TocIcon fontSize="large" />
            </Box>
        </Card>
    );
}

export { BlogCard };
