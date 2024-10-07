import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTheme } from '@mui/material/styles';

const SensitiveContent = ({ content }) => {
    const [isContentHidden, setIsContentHidden] = useState(true);
    const theme = useTheme();

    const handleToggle = () => {
        setIsContentHidden(!isContentHidden);
    };

    return (
        <Box sx={theme.custom.sensitiveContent.container} onClick={handleToggle}>
            <Box sx={theme.custom.sensitiveContent.contentContainer}>
                {content}
            </Box>
            <Box
                sx={{
                    ...theme.custom.sensitiveContent.cover,
                    ...(isContentHidden ? theme.custom.sensitiveContent.cover.hidden : {})

                }}
            >
                <VisibilityOffIcon sx={theme.custom.sensitiveContent.cover.icon} />
                <Typography sx={theme.custom.sensitiveContent.cover.text}>
                    Sensitive Content
                </Typography>
            </Box>
        </Box>
    );
};

export { SensitiveContent };