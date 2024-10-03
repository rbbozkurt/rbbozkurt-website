import React from 'react';
import { Typography, Box, Link, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

const HighlightedText = ({ text, sx }) => {
    const theme = useTheme();
    return (
        <Typography
            variant="body1"
            component="span"
            sx={{
                padding: '0 4px',
                fontStyle: 'italic',
                fontSize: theme.typography.body1.fontSize,
                color: theme.typography.body1.color,
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
            variant="body1"
            component="span"
            sx={{
                padding: '0 4px',
                fontSize: theme.typography.body1.fontSize,
                color: theme.typography.body1.color,
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
            sx={{
                backgroundColor: 'red',
                color: 'white',
                fontSize: theme.typography.body1.fontSize,
            }}
        />
    );
};

const Berlin = ({ text = "Berlin" }) => {
    const theme = useTheme();
    return (
        <HighlightedText
            text={text}
            sx={{
                backgroundImage: 'linear-gradient(90deg, black 33%, red 33%, red 66%, gold 66%)',
                color: 'white',
                fontSize: theme.typography.body1.fontSize,
            }}
        />
    );
};

const SubText = ({ text }) => {
    const theme = useTheme();
    return (
        <HighlightedText
            text={text}
            sx={{
                fontStyle: 'italic',
                fontSize: theme.typography.body1.fontSize,
                color: theme.typography.body1.color,
            }}
        />
    );
};

const Paragraph = ({ children }) => {
    const theme = useTheme();
    return (
        <Typography
            align="left"
            variant="body1"
            gutterBottom
            sx={{
                padding: '0 0 16px 0',
                fontSize: theme.typography.body1.fontSize,
                color: theme.typography.body1.color,
            }}
        >
            {children}
        </Typography>
    );
};

const Section = ({ title, children }) => {
    const theme = useTheme();
    return (
        <Box direction="column"
            sx={{
                padding: '64px 0 16px 0'
            }}>
            <Typography align="left" variant="h2">
                {title}
            </Typography>
            <Divider
                orientation='horizontal'
                sx={{
                    backgroundColor: theme.palette.primary.light,
                    height: '1px', // Adjust the thickness here
                    margin: '4px 0 16px 0', // Add some space below the divider
                }} />
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

const Tags = ({ tags, isColorized = true, isHorizontalScrollable = false }) => {
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
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            color: isColorized ? color : theme.palette.secondary.dark,
                            backgroundColor: isColorized ? backgroundColor : '#E5E5E5',
                            padding: '1px 4px',
                            fontSize: theme.typography.body1.fontSize,
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