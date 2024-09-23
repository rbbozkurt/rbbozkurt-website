import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SearchBar, PortfolioCard } from '../view-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Portfolio() {
    const [searchTerm, setSearchTerm] = useState('');
    const { projects, loading, error } = useSelector(state => state.projects);
    const theme = useTheme();
    const navigate = useNavigate();
    
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleOnCardClick = (id) => {
        navigate(`/portfolio/${id}`);
    };

    const filteredItems = projects?.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography variant="h6" color="error">
                    {error}
                </Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                width: '100%',  
                maxWidth: '1200px',  
                margin: '0 auto',  
                paddingTop: '2rem',  
            }}
        >
            <SearchBar placeholderText={"Search Portfolio"} searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <Grid 
                            item 
                            key={item.id} 
                            xs={12} sm={6} md={4}
                            sx={{ 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center' 
                            }}
                        >
                            <PortfolioCard item={item} onClickCardClicked={() => handleOnCardClick(item.id)} />
                        </Grid>
                    ))
                ) : (
                    <Typography variant="h6" color="textSecondary" sx={{ marginTop: '3rem', textAlign: 'center' }}>
                        No projects found with the search term "{searchTerm}"
                    </Typography>
                )}
            </Grid>
        </Box>
    );
}

export { Portfolio };
