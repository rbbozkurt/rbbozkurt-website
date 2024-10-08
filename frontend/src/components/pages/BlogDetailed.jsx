import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Paragraph, Section } from '../text-components';
import { BlogHeader } from '../view-components';
import { useTheme } from '@mui/material/styles';

const BlogDetailed = () => {
    const { blogId } = useParams(); // Get the projectId from the route
    const { blogs, loading, error } = useSelector((state) => state.blogs);
    const theme = useTheme();
    const navigate = useNavigate();
    // Handle error or invalid project
    if (error) {
        navigate('/error'); // Redirect to the error page
    }

    // Show a loading indicator while data is being fetched
    if (loading) {
        return (
            <Box sx={theme.custom.blogDetailedPage.loadingBox}>
                <CircularProgress />
            </Box>
        );
    }

    const currentBlog = blogs.find(blog => blog._id === blogId);

    if (!currentBlog) {
        return null;
    }


    return (
        <Box>
            <BlogHeader
                blogTitle={currentBlog.title}
                author={currentBlog.author}
                createdAt={formatDate(currentBlog.date)}
                estimatedReadTime={currentBlog.estimatedReadTime}
                image={currentBlog.imageUrl}
                tags={currentBlog.tags}
                views={currentBlog.views}
            />
            {currentBlog.details.sections.map((section, index) => (
                <Section key={index} title={section.title}>
                    {section.paragraphs.map((paragraph, idx) => (
                        <Paragraph key={idx} children={paragraph} />
                    ))}
                </Section>
            ))}
        </Box>
    );
};

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}

export { BlogDetailed };