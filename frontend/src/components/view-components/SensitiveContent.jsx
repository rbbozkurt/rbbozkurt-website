import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SensitiveContent = ({ content }) => {
    const [isContentHidden, setIsContentHidden] = useState(true);

    const handleToggle = () => {
        setIsContentHidden(!isContentHidden);
    };

    return (
        <Box sx={
            {
                borderRadius: 2,
                '&:hover': {
                    cursor: 'pointer'
                }
            }
        } position="relative" display="inline-block" onClick={handleToggle}>
            <Box sx={{
                borderRadius: 2,
                
            }}>
                {content}
            </Box>
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgcolor="rgba(0, 0, 0, 0.5)"
                color="white"
                textAlign="center"
                zIndex={1}
                sx={{
                    borderRadius: 2,
                    backdropFilter: 'blur(10px)', // Apply blur effect
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                    opacity: isContentHidden ? 1 : 0, // Control visibility with opacity
                    transition: 'opacity 0.3s ease', // Smooth transition for opacity change
                    pointerEvents: isContentHidden ? 'auto' : 'none', // Disable pointer events when hidden
                    '&:hover': {
                        '& .MuiSvgIcon-root, & .MuiTypography-root': {
                            color: '#FFD700', // Gold color for hover effect
                            transition: 'color 0.3s ease', // Smooth transition for color change
                        },
                    },
                }}
            >
                <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
                    <VisibilityOffIcon
                        style={{ fontSize: 50, marginBottom: '10px' }}
                    />
                    <Typography variant="h6">
                        Sensitive Content
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export { SensitiveContent };