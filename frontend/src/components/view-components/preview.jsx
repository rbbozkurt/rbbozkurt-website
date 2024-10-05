import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { BlogCard } from './BlogCard'; // Assuming BlogCard is already implemented
import { PortfolioCard } from './PortfolioCard'; // Assuming PortfolioCard is already implemented
import { Section } from '../text-components';
import { useVisibleItems } from '../utils';
import PreviewIcon from '@mui/icons-material/Preview';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

// Constants
const MESSAGES = {
    LOADING: 'Loading...',
    ERROR_PREFIX: 'Error: ',
    NO_BLOGS: 'No blogs available',
    NO_PROJECTS: 'No projects available',
};

function Preview({ title, children }) {
    const theme = useTheme();
    return (
        <Section title={title}>
            <Box sx={theme.custom.previewTheme}>
                {children}
            </Box>
        </Section>
    );
}

function BlogPreview({ title, onItemClicked }) {
    const { blogs, loading, error } = useSelector((state) => state.blogs);
    const theme = useTheme();
    const [prev, current, next, moveForward, moveBackward] = useVisibleItems(blogs);

    useEffect(() => {
        if (blogs.length > 0) {
            const interval = setInterval(() => {
                moveForward();
            }, theme.custom.blogPreviewTheme.card.scaleDuration);

            return () => clearInterval(interval);
        }
    }, [blogs, moveForward, theme.custom.blogPreviewTheme.card.scaleDuration]);

    return (
        <Preview title={title}>
            {loading && <Typography>{MESSAGES.LOADING}</Typography>}
            {error && <Typography>{MESSAGES.ERROR_PREFIX}{error}</Typography>}
            {!loading && !error && blogs.length === 0 && <Typography>{MESSAGES.NO_BLOGS}</Typography>}
            {!loading && !error && blogs.length > 0 && (
                <Box sx={theme.custom.blogPreviewTheme.mainContainer}>
                    <Box sx={theme.custom.blogPreviewTheme.card.prevNextCard}>
                        {prev && (
                            <BlogCard
                                item={prev}
                                onClickCardClicked={() => moveBackward()}
                                icon={<KeyboardArrowUpRoundedIcon fontSize='large' sx={{ fontSize: theme.custom.blogPreviewTheme.card.iconSize }} />}
                            />
                        )}
                    </Box>
                    <Box sx={theme.custom.blogPreviewTheme.card.currentCard}>
                        {current && (
                            <BlogCard
                                item={current}
                                onClickCardClicked={() => onItemClicked(current._id, current)}
                                icon={<PreviewIcon fontSize='large' />}
                            />
                        )}
                    </Box>
                    <Box sx={theme.custom.blogPreviewTheme.card.prevNextCard}>
                        {next && (
                            <BlogCard
                                item={next}
                                onClickCardClicked={() => moveForward()}
                                icon={<KeyboardArrowDownRoundedIcon fontSize='large' sx={{ fontSize: theme.custom.blogPreviewTheme.card.iconSize }} />}
                            />
                        )}
                    </Box>
                </Box>
            )}
        </Preview>
    );
}

function PortfolioPreview({ title, onItemClicked }) {
    const { projects, loading, error } = useSelector((state) => state.projects);
    const theme = useTheme();
    const [prev, current, next, moveForward, moveBackward] = useVisibleItems(projects);

    useEffect(() => {
        if (projects.length > 0) {
            const interval = setInterval(() => {
                moveForward();
            }, theme.custom.portfolioPreviewTheme.card.scaleDuration);

            return () => clearInterval(interval);
        }
    }, [projects, moveForward, theme.custom.portfolioPreviewTheme.card.scaleDuration]);

    return (
        <Preview title={title}>
            {loading && <Typography>{MESSAGES.LOADING}</Typography>}
            {error && <Typography>{MESSAGES.ERROR_PREFIX}{error}</Typography>}
            {!loading && !error && projects.length === 0 && <Typography>{MESSAGES.NO_PROJECTS}</Typography>}
            {!loading && !error && projects.length > 0 && (
                <Box sx={theme.custom.portfolioPreviewTheme.mainContaier}>
                    <Box sx={theme.custom.portfolioPreviewTheme.card.prevNextCard}>
                        {prev && (
                            <PortfolioCard
                                item={prev}
                                onClickCardClicked={() => moveBackward()}
                                icon={<KeyboardArrowLeftRoundedIcon fontSize='large' sx={{ fontSize: theme.custom.portfolioPreviewTheme.card.iconSize }} />}
                            />
                        )}
                    </Box>
                    <Box sx={theme.custom.portfolioPreviewTheme.card.currentCard}>
                        {current && (
                            <PortfolioCard
                                item={current}
                                onClickCardClicked={() => onItemClicked(current._id, current)}
                                icon={<PreviewIcon fontSize='large' />}
                            />
                        )}
                    </Box>
                    <Box sx={theme.custom.portfolioPreviewTheme.card.prevNextCard}>
                        {next && (
                            <PortfolioCard
                                item={next}
                                onClickCardClicked={() => moveForward()}
                                icon={<KeyboardArrowRightRoundedIcon fontSize='large' sx={{ fontSize: theme.custom.portfolioPreviewTheme.card.iconSize }} />}
                            />
                        )}
                    </Box>
                </Box>
            )}
        </Preview>
    );
}

export { BlogPreview, PortfolioPreview };