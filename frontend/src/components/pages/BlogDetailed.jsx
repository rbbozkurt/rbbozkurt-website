import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getBlog } from '../../actions/blogs';
import { Paragraph, Section } from '../text-components';
import { BlogHeader } from '../view-components';

const BlogDetailed = () => {
    const { blogId } = useParams(); // Get the projectId from the route
    const { blogs, loading, error } = useSelector((state) => state.blogs);
    const navigate = useNavigate();




    console.log('Component rendered with state:', { blogs, loading, error });

    // Handle error or invalid project
    if (error) {
        navigate('/error'); // Redirect to the error page
    }

    // Show a loading indicator while data is being fetched
    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }
    const tmpBlogId = typeof blogId === 'string' ? parseInt(blogId, 10) : blogId;

    const currentBlog = blogs.find(blog => blog.id === tmpBlogId);

    if (!currentBlog) {
        console.log('No project data available.');
        return null;
    }


    return (
        <Box sx={{ padding: '2rem' }}>
            <BlogHeader
                blogTitle={currentBlog.title}
                author={currentBlog.author}
                createdAt={formatDate(currentBlog.date)}
                estimatedReadTime={currentBlog.estimatedReadTime}
                image={currentBlog.image}
                tags={currentBlog.tags}
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