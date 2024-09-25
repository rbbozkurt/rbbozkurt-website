import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { BlogCard } from './BlogCard'; // Assuming BlogCard is already implemented
import { PortfolioCard } from './PortfolioCard'; // Assuming PortfolioCard is already implemented
import { Section } from '../text-components';
import Grow from '@mui/material/Grow';

// Constants
const FADE_OUT_DURATION = 500;
const INTERVAL_DURATION = 8000;
const TRANSITION_DURATION = '0.5s';
const TRANSITION_TIMING_FUNCTION = 'ease-in-out';
const LOADING_MESSAGE = 'Loading...';
const ERROR_MESSAGE_PREFIX = 'Error: ';
const NO_BLOGS_MESSAGE = 'No blogs available';
const NO_PROJECTS_MESSAGE = 'No projects available';
const GRID_HEIGHT = 300;
const GRID_PADDING = '2rem';

// The Preview component to handle layout and title
function Preview({ title, children }) {
    return (
        <Section title={title}>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                    padding: GRID_PADDING,
                    width: '100%',
                    height: GRID_HEIGHT, // Fixed height for consistency
                }}
            >
                {children}
            </Grid>
        </Section>
    );
}

// The BlogPreview component with fade-in/fade-out effect
function BlogPreview({ title, onItemClicked }) {
    const { blogs, loading, error } = useSelector((state) => state.blogs);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        if (blogs.length > 0) {
            const interval = setInterval(() => {
                setFadeIn(false); // Start fading out
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
                    setFadeIn(true); // Start fading in after the index changes
                }, FADE_OUT_DURATION); // Transition out duration
            }, INTERVAL_DURATION); // Change every 5 seconds
            return () => clearInterval(interval);
        }
    }, [blogs]);

    if (loading) {
        return <Typography>{LOADING_MESSAGE}</Typography>;
    }

    if (error) {
        return <Typography>{ERROR_MESSAGE_PREFIX}{error}</Typography>;
    }

    if (blogs.length === 0) {
        return <Typography>{NO_BLOGS_MESSAGE}</Typography>;
    }

    return (
        <Preview title={title}>
            <Grid
             justifyContent="center"
                alignItems="center"
                item
                xs={12} // Ensure responsiveness for BlogCard
                sx={{
                    opacity: fadeIn ? 1 : 0, // Control opacity for fade effect
                    transition: `opacity ${TRANSITION_DURATION} ${TRANSITION_TIMING_FUNCTION}`, // Smooth transition
                }}
            >
                <BlogCard item={blogs[currentIndex]} onClickCardClicked={() => onItemClicked(blogs[currentIndex]._id)} />
            </Grid>
        </Preview>
    );
}

// The PortfolioPreview component with fade-in/fade-out effect
function PortfolioPreview({ title, onItemClicked }) {
    const { projects, loading, error } = useSelector((state) => state.projects);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        if (projects.length > 0) {
            const interval = setInterval(() => {
                setFadeIn(false); // Start fading out
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
                    setFadeIn(true); // Start fading in after the index changes
                }, FADE_OUT_DURATION); // Transition out duration
            }, INTERVAL_DURATION); // Change every 5 seconds
            return () => clearInterval(interval);
        }
    }, [projects]);

    if (loading) {
        return <Typography>{LOADING_MESSAGE}</Typography>;
    }

    if (error) {
        return <Typography>{ERROR_MESSAGE_PREFIX}{error}</Typography>;
    }

    if (projects.length === 0) {
        return <Typography>{NO_PROJECTS_MESSAGE}</Typography>;
    }

    return (
        <Preview title={title}>
            <Grid
             justifyContent="center"
                item
                alignItems='center'
                alignContent='center'
                xs={12} // Ensure responsiveness for PortfolioCard
                sx={{
                    width: '100%',
                    opacity: fadeIn ? 1 : 0, // Control opacity for fade effect
                    transition: `opacity ${TRANSITION_DURATION} ${TRANSITION_TIMING_FUNCTION}`, // Smooth transition
                }}
            >
                <PortfolioCard item={projects[currentIndex]} onClickCardClicked={() => onItemClicked(projects[currentIndex]._id)} />
            </Grid>
        </Preview>
    );
}

export { BlogPreview, PortfolioPreview };

