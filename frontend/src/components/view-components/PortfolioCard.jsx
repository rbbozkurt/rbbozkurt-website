import React from 'react';
import { Typography, Box, Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function PortfolioCard({ item, onClickCardClicked }) {
    const theme = useTheme();
    
    //function puts # at the beginning of each item in list and returns a string
    function hashtify(list) {
        return list.map((item) => `#${item}`).join(' ');
    }
    console.log(`Technology : ${item.technology} and type : ${typeof item.technology}`)
    return (
        <Card
            onClick={() => onClickCardClicked(item.id)}
            sx={{
                maxWidth: 300,
                height: 350,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end', // Align items towards the bottom of the card
                boxShadow: 'none',
                border: `1px solid ${theme.palette.primary.light}`, 
                borderRadius: 2,
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.3s, border 0.3s',
                cursor: 'pointer',
                '&:hover': {
                    border: `1.5px solid ${theme.palette.primary.dark}`,
                    transform: 'scale(1.05)',
                },
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    height: '50%',
                    gap: 1, // Add some spacing between the items
                }}
            >
                <Typography
                    variant="h5"
                    sx={{ textAlign: 'left', color: theme.palette.primary.dark }}
                >
                    {item.title} {/* Title at the top */}
                </Typography>

                <Box
                    sx={{
                        flexGrow: 1, // Takes up available space, pushing the date to the bottom
                        overflowY: 'auto',
                        width: '100%',
                    }}
                >
                    <Typography variant="body1" textStyle = 'bold' sx={{ textAlign: 'left', color: theme.palette.primary.dark }}>
                        {hashtify(item.tags)} {/* Technologies or description in the middle */}
                    </Typography>
                </Box>

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
        </Card>
    );
}

export { PortfolioCard };
