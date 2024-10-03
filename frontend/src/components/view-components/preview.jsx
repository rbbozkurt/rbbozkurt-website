import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { BlogCard } from './BlogCard'; // Assuming BlogCard is already implemented
import { PortfolioCard } from './PortfolioCard'; // Assuming PortfolioCard is already implemented
import { Section } from '../text-components';
import { useVisibleItems } from '../utils';
import TocIcon from '@mui/icons-material/Toc';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useTheme } from '@mui/material/styles';

// Constants
const MESSAGES = {
    LOADING: 'Loading...',
    ERROR_PREFIX: 'Error: ',
    NO_BLOGS: 'No blogs available',
    NO_PROJECTS: 'No projects available',
};

const SCALE_DURATION = 5000; // Duration for scaling effect (5 seconds)

// The Preview component to handle layout and title
function Preview({ title, children }) {
    const theme = useTheme();
    return (
        <Section title={title}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={theme.custom.preview.container}
            >
                {children}
            </Box>
        </Section>
    );
}

/// BlogPreview Component using Box and Flexbox
function BlogPreview({ title, onItemClicked }) {
    const theme = useTheme();
    const { blogs, loading, error } = useSelector((state) => state.blogs);

    // Use custom hook to manage visible items
    const [prev, current, next, moveForward, moveBackward] = useVisibleItems(blogs);

    useEffect(() => {
        if (blogs.length > 0) {
            const interval = setInterval(() => {
                moveForward(); // Move to the next item every 5 seconds
            }, SCALE_DURATION);

            return () => clearInterval(interval); // Cleanup the interval on unmount
        }
    }, [blogs, moveForward]);

    return (
        <Preview title={title}>
            {loading && <Typography>{MESSAGES.LOADING}</Typography>}
            {error && <Typography>{MESSAGES.ERROR_PREFIX}{error}</Typography>}
            {!loading && !error && blogs.length === 0 && <Typography>{MESSAGES.NO_BLOGS}</Typography>}
            {!loading && !error && blogs.length > 0 && (
                <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    flexWrap="nowrap"
                    sx={theme.custom.preview.blogContainer}
                >
                    {/* Previous Card */}
                    <Box sx={theme.custom.preview.prevNextCard}>
                        {prev && (
                            <BlogCard
                                item={prev}
                                onClickCardClicked={() => moveBackward()}
                                icon={<KeyboardArrowUpRoundedIcon fontSize='large' sx={theme.custom.preview.icon} />} // Add icon
                            />
                        )}
                    </Box>

                    {/* Current Card with marginY */}
                    <Box sx={theme.custom.preview.currentCard}>
                        {current && (
                            <BlogCard
                                item={current}
                                onClickCardClicked={() => onItemClicked(current._id, current)}
                                icon={<TocIcon fontSize='large' />} // Add icon
                            />
                        )}
                    </Box>

                    {/* Next Card */}
                    <Box sx={theme.custom.preview.prevNextCard}>
                        {next && (
                            <BlogCard
                                item={next}
                                onClickCardClicked={() => moveForward()}
                                icon={<KeyboardArrowDownRoundedIcon fontSize='large' sx={theme.custom.preview.icon} />} // Add icon
                            />
                        )}
                    </Box>
                </Box>
            )}
        </Preview>
    );
}

// PortfolioPreview Component using Box and Flexbox
function PortfolioPreview({ title, onItemClicked }) {
    const theme = useTheme();
    const { projects, loading, error } = useSelector((state) => state.projects);

    // Use custom hook to manage visible items
    const [prev, current, next, moveForward, moveBackward] = useVisibleItems(projects);
    useEffect(() => {
        if (projects.length > 0) {
            const interval = setInterval(() => {
                moveForward(); // Move to the next item every 5 seconds
            }, SCALE_DURATION);

            return () => clearInterval(interval); // Cleanup the interval on unmount
        }
    }, [projects, moveForward]);

    return (
        <Preview title={title}>
            {loading && <Typography>{MESSAGES.LOADING}</Typography>}
            {error && <Typography>{MESSAGES.ERROR_PREFIX}{error}</Typography>}
            {!loading && !error && projects.length === 0 && <Typography>{MESSAGES.NO_PROJECTS}</Typography>}
            {!loading && !error && projects.length > 0 && (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexWrap="nowrap"
                    sx={theme.custom.preview.portfolioContainer}
                >
                    {/* Previous Card */}
                    <Box sx={theme.custom.preview.prevNextCard}>
                        {prev && (
                            <PortfolioCard
                                item={prev}
                                onClickCardClicked={() => moveBackward()}
                                icon={<KeyboardArrowLeftRoundedIcon fontSize='large' sx={theme.custom.preview.icon} />} // Add icon
                            />
                        )}
                    </Box>

                    {/* Current Card with marginX */}
                    <Box sx={theme.custom.preview.currentCard}>
                        {current && (
                            <PortfolioCard
                                item={current}
                                onClickCardClicked={() => onItemClicked(current._id, current)}
                                icon={<TocIcon fontSize='large' />} // Add icon
                            />
                        )}
                    </Box>

                    {/* Next Card */}
                    <Box sx={theme.custom.preview.prevNextCard}>
                        {next && (
                            <PortfolioCard
                                item={next}
                                onClickCardClicked={() => moveForward()}
                                icon={<KeyboardArrowRightRoundedIcon fontSize='large' sx={theme.custom.preview.icon} />} // Add icon
                            />
                        )}
                    </Box>
                </Box>
            )}
        </Preview>
    );
}

export { BlogPreview, PortfolioPreview };