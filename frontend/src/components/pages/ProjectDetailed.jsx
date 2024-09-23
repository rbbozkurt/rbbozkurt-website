import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Paragraph, Section } from '../text-components';
import { ProjectHeader } from '../view-components';

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
    const tmpId = typeof projectId === 'string' ? parseInt(projectId, 10) : projectId;
    const project = projects.find(project => project.id === tmpId);
    
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

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}

export { ProjectDetailed };