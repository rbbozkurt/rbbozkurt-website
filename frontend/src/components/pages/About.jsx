import React from 'react';
import { Box } from '@mui/material';
import {Paragraph, Section } from '../text-components';
import { SensitiveContent } from '../view-components';
import me from '../../images/me.jpeg';

const title1 = "me";
const title2 = "what I am working on";
const paragraphs1 = [
    `I’m Resit Berkay Bozkurt, a passionate Software Developer with a deep-rooted love for technology and problem-solving. Born and raised in Turkey, I moved to Berlin six years ago to pursue a degree in Computer Science from the Technical University of Berlin (TU Berlin), where I’m also completing my Master’s. My technical expertise spans across Android development, full-stack web development, and blockchain technologies, with a growing focus on the Web3 and fintech spaces.`,
    `My professional journey has taken me through diverse roles and projects, from building Android applications to working on backend solutions for decentralized apps. Currently, I’m a Software Engineer at IAV GmbH, where I work with innovative teams to design and implement cutting-edge solutions for the automotive industry.`,
    `What drives me is the constant evolution of the tech landscape. I’m always eager to learn new technologies, solve complex problems, and contribute to projects that make an impact. Outside of coding, I’m a huge EuroLeague fan, and you can often catch me cheering for Fenerbahce or exploring new tech ideas.`
];
const paragraphs2 = [
    `I’m currently working on a Web3 project under Mina Navigator Program and a Web App called ShiftPro.`,
    `Stay tuned for more updates!`
]

const sections = [
    {
        title: title1,
        paragraphs: paragraphs1
    },
    {
        title: title2,
        paragraphs: paragraphs2
    }
]



const About = () => {

    return (
        <Box direction='column'>
            <SensitiveContent content={
                <Box
                component="img"
                alt={'me'}
                src={me}
                sx={
                    {
                        width: '100%',
                        height: 300,
                        objectFit: 'cover',
                        borderRadius: 2,
                    }
                }
               

            />
            }/>
            {sections.map((section, index) => (
                <Section key={index} title={section.title}>
                    {section.paragraphs.map((paragraph, index) => (
                        <Paragraph key={index}>{paragraph}</Paragraph>
                    ))}
                </Section>
            ))}
        </Box>
    );
}

export { About };
