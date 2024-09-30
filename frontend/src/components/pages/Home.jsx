import React from 'react';
import { Box} from '@mui/material';
import { RoleText, Turkey, Berlin, SubText, Paragraph, Section } from '../text-components';
import {  MasonryImageList } from '../view-components';
import { BlogPreview, PortfolioPreview } from '../view-components/preview';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateBlogView } from '../../actions/blogs';
import { updateProjectView } from '../../actions/projects';




const title1 = "whoami";
const title2 = "what am I working on?";
const paragraphs1 = [
    `Hey there! I’m Berkay, a `,
    `I’ve spent a lot of time honing my skills in Android app, full stack and general software development, but recently, I’ve found myself diving deeper into the exciting world of Web3 and fintech. Right now, I’m working at IAV GmbH, where I get to bring cool ideas to life with code. When I’m not coding, you can probably find me exploring new tech, learning something new, or watching EuroLeague 🏀`,
    `I’m always open to new opportunities, so feel free to reach out if you’d like to chat, collaborate, or just say hi!  👋`
];
const paragraphs2 = [
    `I’m currently working on a Web3 project under Mina Navigator Program and a Web App called ShiftPro.`,
    `Stay tuned for more updates!`
]



const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onBlogClick = (id, blog) => {
        dispatch(updateBlogView(id, blog));
        navigate(`/blog/${id}`);
    }

    const onProjectClick = (id, project) => {
        dispatch(updateProjectView(id, project));
        navigate(`/portfolio/${id}`);

    }

    return (
        <Box direction="column">
            <Section title={title1}>
                <Paragraph>
                    {paragraphs1[0]}
                    <RoleText
                        text="Software Developer"
                        link="https://simple.wikipedia.org/wiki/Software_developer"
                        sx={{
                            fontWeight: 'bold',
                            color: '#4CAF50', // Green for development
                            backgroundColor: '#E8F5E9', // Light green background
                        }}
                    />
                    {"/ "}
                    <RoleText
                        text="Engineer"
                        link="https://simple.wikipedia.org/wiki/Software_engineering"
                        sx={{
                            fontWeight: 'bold',
                            color: '#2196F3', // Blue for engineering
                            backgroundColor: '#E3F2FD', // Light blue background
                        }}
                    />
                    {"/ "}
                    <RoleText
                        text="Coder"
                        link="https://en.wikipedia.org/wiki/Programmer"
                        sx={{
                            fontWeight: 'bold',
                            color: '#FFC107', // Yellow for coding
                            backgroundColor: '#FFF8E1', // Light yellow background
                        }}
                    />
                    <SubText text=" —whatever you'd like to call it—" /> from <Turkey />, now calling <Berlin /> home for the past six years. I graduated with a degree in Computer Science from TU Berlin, where I’m currently pursuing my Master’s.
                </Paragraph>
                <Paragraph>
                    {paragraphs1[1]}
                    <SubText text="-I'm a huge Fenerbahce fan-" />.
                </Paragraph>
                <Paragraph>
                    {paragraphs1[2]}
                </Paragraph>
            </Section>
            <PortfolioPreview title={"portfolio"} onItemClicked={onProjectClick}/>
            <BlogPreview title={"blogs"} onItemClicked={onBlogClick}/>
            <Section title={title2}>
                {paragraphs2.map((paragraph, index) => (
                    <Paragraph key={index}>
                        {paragraph}
                    </Paragraph>
                ))}
            </Section>


        </Box>
    );
}

export { Home };
