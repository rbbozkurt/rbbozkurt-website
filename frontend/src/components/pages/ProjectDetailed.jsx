import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Paragraph, Section } from '../text-components';
import { ProjectHeader } from '../view-components';
import { formatDate } from '../utils';

const ProjectDetailed = () => {
    const { projectId } = useParams(); // Get the projectId from the route
    const { projects, loading, error } = useSelector((state) => state.projects);
    const navigate = useNavigate();
;

    console.log('Component rendered with state:', { projects, loading, error });

    // Handle error or invalid project
    if (error) {
        console.error('Error fetching project:', error);
        navigate('/error'); // Redirect to the error page
    }

    // Show a loading indicator while data is being fetched
    if (loading) {
        console.log('Loading project data...');
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }
    const project = projects.find(project => project._id === projectId);
    
    if (!project) {
        console.log('No project data available.');
        return null;
    }

    console.log('Project data:', project);

    return (
        <Box sx={{ padding: '2rem' }}>
            <ProjectHeader
                projectTitle={project.title}
                createdAt={formatDate(project.date)}
                estimatedReadTime={project.estimatedReadTime}
                image={project.image}
                tags={project.tags}
            />
            {project.details.sections.map((section, index) => (
                <Section key={index} title={section.title}>
                    {section.paragraphs.map((paragraph, idx) => (
                        <Paragraph key={idx} children={paragraph} />
                    ))}
                </Section>
            ))}
        </Box>
    );
};



export { ProjectDetailed };