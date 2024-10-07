import React from 'react';
import { Typography, Box, Link, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { hashtify } from '../utils';
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
                <Link href={link} target="_blank" sx={theme.custom.roleText.link}>
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
            sx={theme.custom.paragraph}
        >
            {children}
        </Typography>
    );
};

const Section = ({ title, children }) => {
    const theme = useTheme();
    return (
        <Box sx={theme.custom.section.box}>
            <Typography sx={theme.custom.section.title}>
                {title}
            </Typography>
            <Divider sx={theme.custom.section.divider} />
            {children}
        </Box>
    );
};


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
                ...theme.custom.tags.box,
                flexWrap: isHorizontalScrollable ? 'nowrap' : 'wrap',
                overflowX: isHorizontalScrollable ? 'auto' : 'visible',
                whiteSpace: isHorizontalScrollable ? 'nowrap' : 'normal', // Prevents wrapping in scrollable mode
            } }
            role="text"
        >
            {hashtify(tags).split(' ').map((tag, index) => {
                const { color, backgroundColor } = getColor(index);
                return (
                    <Typography
                        key={index}
                        sx={{
                            ...theme.custom.tags.text,
                            ...sx,
                            color: isColorized ? color : theme.custom.tags.text.color,
                            backgroundColor: isColorized ? backgroundColor : theme.custom.tags.text.backgroundColor,
                            
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