import React from 'react';
import { Typography, Box, Link, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

const HighlightedText = ({ text, sx }) => {
    const theme = useTheme();
    return (
        <Typography
            component="span"
            sx={{
                ...theme.custom.highlightedText,
                ...sx
            }}
        >
            {text}
        </Typography>
    );
};

const RoleText = ({ text, link, sx }) => {
    const theme = useTheme();
    return (
        <Typography
            component="span"
            sx={{
                ...theme.custom.roleText,
                ...sx
            }}
        >
            {link ? (
                <Link href={link} target="_blank" sx={{ textDecoration: 'none', color: 'inherit' }}>
                    {text}
                </Link>
            ) : (
                text
            )}
        </Typography>
    );
};

const Turkey = ({ text = "Turkey" }) => {
    const theme = useTheme();
    return (
        <HighlightedText
            text={text}
            sx={theme.custom.turkey}
        />
    );
};

const Berlin = ({ text = "Berlin" }) => {
    const theme = useTheme();
    return (
        <HighlightedText
            text={text}
            sx={theme.custom.berlin}
        />
    );
};

const SubText = ({ text }) => {
    const theme = useTheme();
    return (
        <HighlightedText
            text={text}
            sx={theme.custom.subText}
        />
    );
};

const Paragraph = ({ children }) => {
    const theme = useTheme();
    return (
        <Typography
            align="left"
            gutterBottom
            sx={theme.custom.paragraph}
        >
            {children}
        </Typography>
    );
};

const Section = ({ title, children }) => {
    const theme = useTheme();
    return (
        <Box direction="column" sx={theme.custom.section}>
            <Typography align="left" sx={theme.custom.section.title}>
                {title}
            </Typography>
            <Divider orientation='horizontal' sx={theme.custom.section.divider} />
            {children}
        </Box>
    );
};

// this text is takes list of string and returns a string with # at the beginning of each item
// uses RoleText for each list item and returns a Typography component
const hashtify = (list) => list.map((item) => `#${item}`).join(' ');

// Map of pastel color pairs
const colorMap = {
    development: { color: '#4CAF50', backgroundColor: '#E8F5E9' }, // Green for development
    engineering: { color: '#2196F3', backgroundColor: '#E3F2FD' }, // Blue for engineering
    coding: { color: '#FFC107', backgroundColor: '#FFF8E1' }, // Yellow for coding
    error: { color: '#ff1744', backgroundColor: '#FFE6E6' }, // Red for error
    design: { color: '#9C27B0', backgroundColor: '#F3E5F5' }, // Purple for design
    testing: { color: '#FF5722', backgroundColor: '#FFEBEE' }, // Orange for testing
};

const getColor = (index) => {
    const keys = Object.keys(colorMap);
    const key = keys[index % keys.length];
    return colorMap[key];
};

const Tags = ({ tags, isColorized = true, isHorizontalScrollable = false, sx }) => {
    const theme = useTheme();
    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexWrap: isHorizontalScrollable ? 'nowrap' : 'wrap', 
                gap: 1, 
                overflowX: isHorizontalScrollable ? 'auto' : 'visible',
                whiteSpace: isHorizontalScrollable ? 'nowrap' : 'normal', // Prevents wrapping in scrollable mode
                '&::-webkit-scrollbar': {
                    display: 'none', // Hides the scrollbar for webkit browsers (Chrome, Safari)
                },
                '-ms-overflow-style': 'none',  // Hides scrollbar for Internet Explorer and Edge
                'scrollbar-width': 'none',     // Hides scrollbar for Firefox
            }} 
            role="text"
        >
            {hashtify(tags).split(' ').map((tag, index) => {
                const { color, backgroundColor } = getColor(index);
                return (
                    <Typography
                        key={index}
                        sx={{
                            ...theme.custom.tags,
                            ...sx,
                            color: isColorized ? color : theme.palette.secondary.dark,
                            backgroundColor: isColorized ? backgroundColor : theme.custom.tags.backgroundColor,
                            
                        }}
                    >
                        {tag}
                    </Typography>
                );
            })}
        </Box>
    );
};

Tags.propTypes = {
    tags: PropTypes.string.isRequired,
    isColorized: PropTypes.bool,
    isHorizontalScrollable: PropTypes.bool,
};

export default Tags;

export { Section, Paragraph, RoleText, Turkey, Berlin, SubText, Tags };