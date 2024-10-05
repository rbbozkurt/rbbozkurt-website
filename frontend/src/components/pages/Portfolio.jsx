import React, { useState } from 'react';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import { SearchBar, PortfolioCard } from '../view-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { updateProjectView } from '../../actions/projects';
import { useDispatch } from 'react-redux';
import PreviewIcon from '@mui/icons-material/Preview';
import { useTheme } from '@mui/material/styles';


function Portfolio() {
    const [searchTerm, setSearchTerm] = useState('');
    const theme = useTheme();
    const { projects, loading, error } = useSelector(state => state.projects);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleOnCardClick = (id) => {
        dispatch(updateProjectView(id, projects.find(project => project._id === id)));
        navigate(`/portfolio/${id}`);
    };

    const filteredItems = projects?.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    return (
        <Box
        sx={theme.custom.portfolioPage.box}

        >
            <SearchBar placeholderText={"Search Portfolio"} searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            
            {loading ? (
                <Box sx={theme.custom.portfolioPage.loadingBox}>
                    <CircularProgress />
                </Box>
            ) : error ? (
                <Box sx={theme.custom.portfolioPage.errorBox}>
                    <Typography sx = {theme.custom.portfolioPage.errorBox.text}>
                        {error}
                    </Typography>
                </Box>
            ) : projects.length === 0 ? (
                <Box sx={theme.custom.portfolioPage.noBlogBox}>
                    <Typography sx = {theme.custom.portfolioPage.noBlogBox.text}>
                    No projects found.
                    </Typography>
                </Box>
            ) : (
                <Grid container
                    spacing={theme.custom.portfolioPage.grid.container.spacing}
                    justifyContent={theme.custom.portfolioPage.grid.container.justifyContent}
                    alignItems={theme.custom.portfolioPage.grid.container.alignItems}>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <Grid 
                                item 
                                key={item._id} 
                                xs={6} sm={6} md={4}
                                sx={theme.custom.portfolioPage.grid.item}>
                                <PortfolioCard item={item} onClickCardClicked={() => handleOnCardClick(item._id)} icon={<PreviewIcon fontSize={theme.custom.portfolioPage.item.portfolioCard} />} />
                            </Grid>
                        ))
                    ) : (
                        <Box sx={theme.custom.portfolioPage.noMatchingBlog.box}>
                        <Typography sx={theme.custom.portfolioPage.noMatchingBlog.text}>
                            No projects found with the search term "{searchTerm}"
                        </Typography>
                    </Box>
                    )}
                </Grid>
            )}
        </Box>
    );
}

export { Portfolio };