import React from 'react';
import { Typography, Box, Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function BlogCard({ item, onClickCardClicked }) {
    const theme = useTheme();

    // Function puts # at the beginning of each item in list and returns a string
    function hashtify(list) {
        return list.map((item) => `#${item}`).join(' ');
    }

    return (
        <Card
            onClick={() => onClickCardClicked(item.id)}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%', // Full width of the container
                height: 200, // Fixed height
                boxShadow: 'none',
                border: `1px solid ${theme.palette.primary.light}`,
                borderRadius: 2,
                transition: 'transform 0.3s, border 0.3s',
                cursor: 'pointer',
                '&:hover': {
                    border: `1.5px solid ${theme.palette.primary.dark}`,
                    transform: 'scale(1.02)',
                },
            }}
        >
            <Box
                sx={{
                    width: '40%', // Image takes 40% of the card width
                    height: '100%',
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderTopLeftRadius: 2,
                    borderBottomLeftRadius: 2,
                }}
            />
            <Box
                sx={{
                    width: '60%', // Content takes 60% of the card width
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 1, // Add some spacing between the items
                }}
            >
                <Box>
                    <Typography
                        variant="h5"
                        sx={{ textAlign: 'left', color: theme.palette.primary.dark }}
                    >
                        {item.title} {/* Title at the top */}
                    </Typography>
                    <Typography
                        variant="body1" // Smaller variant for author
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
                    <Typography variant="body1" textStyle='bold' sx={{ textAlign: 'left', color: theme.palette.primary.dark }}>
                        {hashtify(item.tags)} {/* Technologies or description in the middle */}
                    </Typography>
                </Box>
                <Box>
                    <Typography 
                        variant="body2" // Smaller variant for duration
                        textStyle='bold' 
                        sx={{ textAlign: 'left', color: theme.palette.primary.dark }}
                    >
                        {item.estimatedReadTime} {/* Duration above the date */}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: 'left',
                            color: theme.palette.primary.light,
                        }}
                    >
                        {item.date} {/* Date at the bottom */}
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
}

export { BlogCard };