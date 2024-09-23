import React, { useState } from 'react';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import { SearchBar, BlogCard } from '../view-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Blog() {
    const [searchTerm, setSearchTerm] = useState('');
    //    const theme = useTheme();
    const { blogs, loading, error } = useSelector(state => state.blogs); // Accessing blogs state
    const navigate = useNavigate();

  

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleOnCardClick = (id) => {
        navigate(`/blog/${id}`); // Adjusted the route to blog
    };

    const filteredItems = blogs?.filter((item) =>
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
            <SearchBar placeholderText={"Search Blog"} searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <Grid 
                            item 
                            key={item.id} 
                            xs={12} sm={12} md={12}
                            sx={{ 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center' 
                            }}
                        >
                            <BlogCard item={item} onClickCardClicked={() => handleOnCardClick(item.id)} />
                        </Grid>
                    ))
                ) : (
                    <Typography variant="h6" color="textSecondary" sx={{ marginTop: '3rem', textAlign: 'center' }}>
                        No blogs found with the search term "{searchTerm}"
                    </Typography>
                )}
            </Grid>
        </Box>
    );
}

export { Blog };