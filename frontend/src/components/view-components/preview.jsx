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

// Constants
const LOADING_MESSAGE = 'Loading...';
const ERROR_MESSAGE_PREFIX = 'Error: ';
const NO_BLOGS_MESSAGE = 'No blogs available';
const NO_PROJECTS_MESSAGE = 'No projects available';
const SCALE_DURATION = 5000; // Duration for scaling effect (2 seconds)

// The Preview component to handle layout and title
function Preview({ title, children }) {
    return (
        <Section title={title}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                    padding: '2rem',
                    width: '100%',
                    position: 'relative',
                }}
            >
                {children}
            </Box>
        </Section>
    );
}

/// BlogPreview Component using Box and Flexbox
function BlogPreview({ title, onItemClicked }) {
    const { blogs, loading, error } = useSelector((state) => state.blogs);

    // Use custom hook to manage visible items
    const [prev, current, next, moveForward, moveBackward] = useVisibleItems(blogs);

    useEffect(() => {
        if (blogs.length > 0) {
            const interval = setInterval(() => {
                moveForward(); // Move to the next item every 2 seconds
            }, SCALE_DURATION);

            return () => clearInterval(interval); // Cleanup the interval on unmount
        }
    }, [blogs, moveForward]);

    return (
        <Preview title={title}>
            {loading && <Typography>{LOADING_MESSAGE}</Typography>}
            {error && <Typography>{ERROR_MESSAGE_PREFIX}{error}</Typography>}
            {!loading && !error && blogs.length === 0 && <Typography>{NO_BLOGS_MESSAGE}</Typography>}
            {!loading && !error && blogs.length > 0 && (
                <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    flexWrap="nowrap"
                    sx={{ width: '100%' }}
                >
                    {/* Previous Card */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            flexShrink: 1,
                            width: '80%',
                        }}
                    >
                        {prev && (
                            <BlogCard
                                item={prev}
                                onClickCardClicked={() => moveBackward()}
                                icon={<KeyboardArrowUpRoundedIcon fontSize='large' sx={{ fontSize: 80 }} />} // Add icon
                            />
                        )}
                    </Box>

                    {/* Current Card with marginX */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            flexShrink: 1,
                            width: '80%',
                            marginX: 2, // Adjust marginX
                            transform: 'scale(1.2)', // Slightly scale the current card
                            transition: 'transform 0.3s',
                            zIndex: 1, // Ensure the current card is on top
                        }}
                    >
                        {current && (
                            <BlogCard
                                item={current}
                                onClickCardClicked={() => onItemClicked(current._id, current)}
                                icon={<TocIcon fontSize='large' />} // Add icon
                            />
                        )}
                    </Box>

                    {/* Next Card */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            flexShrink: 1,
                            width: '80%',
                        }}
                    >
                        {next && (
                            <BlogCard
                                item={next}
                                onClickCardClicked={() => moveForward()}
                                icon={<KeyboardArrowDownRoundedIcon fontSize='large' sx={{ fontSize: 80 }} />} // Add icon
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
    const { projects, loading, error } = useSelector((state) => state.projects);

    // Use custom hook to manage visible items
    const [prev, current, next, moveForward, moveBackward] = useVisibleItems(projects);
    useEffect(() => {
        if (projects.length > 0) {
            const interval = setInterval(() => {
                moveForward(); // Move to the next item every 2 seconds
            }, SCALE_DURATION);

            return () => clearInterval(interval); // Cleanup the interval on unmount
        }
    }, [projects, moveForward]);

    return (
        <Preview title={title}>
            {loading && <Typography>{LOADING_MESSAGE}</Typography>}
            {error && <Typography>{ERROR_MESSAGE_PREFIX}{error}</Typography>}
            {!loading && !error && projects.length === 0 && <Typography>{NO_PROJECTS_MESSAGE}</Typography>}
            {!loading && !error && projects.length > 0 && (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexWrap="nowrap"
                    sx={{ width: '100%' }}
                >
                    {/* Previous Card */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            flexShrink: 1,
                            width: '40%',
                        }}
                    >
                        {prev && (
                            <PortfolioCard
                                item={prev}
                                onClickCardClicked={() => moveBackward()}
                                icon={<KeyboardArrowLeftRoundedIcon fontSize='large' sx={{ fontSize: 80 }} />} // Add icon
                            />
                        )}
                    </Box>

                    {/* Current Card with marginX */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            flexShrink: 1,
                            width: '40%',
                            marginX: 0, // Add marginX
                            transform: 'scale(1.2)', // Slightly scale the current card
                            zIndex: 1, // Ensure the current card is on top
                        }}
                    >
                        {current && (
                            <PortfolioCard
                                item={current}
                                onClickCardClicked={() => onItemClicked(current._id, current)}
                                icon={<TocIcon fontSize='large' />} // Add icon
                            />
                        )}
                    </Box>

                    {/* Next Card */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            flexShrink: 1,
                            width: '40%',
                        }}
                    >
                        {next && (
                            <PortfolioCard
                                item={next}
                                onClickCardClicked={() => moveForward()}
                                icon={<KeyboardArrowRightRoundedIcon fontSize='large' sx={{ fontSize: 80 }} />} // Add icon
                            />
                        )}
                    </Box>
                </Box>
            )}
        </Preview>
    );
}

export { BlogPreview, PortfolioPreview };
