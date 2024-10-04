import React, { useState } from 'react';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import { SearchBar, BlogCard } from '../view-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateBlogView } from '../../actions/blogs';
import PreviewIcon from '@mui/icons-material/Preview';

function Blog() {
    const [searchTerm, setSearchTerm] = useState('');
    const { blogs, loading, error } = useSelector(state => state.blogs);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleOnCardClick = (id) => {
        // update views count
        dispatch(updateBlogView(id, blogs.find(blog => blog._id === id)));
        navigate(`/blog/${id}`);
    };

    const filteredItems = blogs?.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

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
            
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </Box>
            ) : error ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Typography variant="h6" color="error">
                        {error}
                    </Typography>
                </Box>
            ) : blogs.length === 0 ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Typography variant="h6" color="textSecondary">
                        No blogs found.
                    </Typography>
                </Box>
            ) : (
                <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <Grid 
                                item 
                                key={item._id} 
                                xs={12} sm={12} md={12}
                                sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    alignItems: 'center' 
                                }}
                            >
                                <BlogCard item={item} onClickCardClicked={() => handleOnCardClick(item._id)} icon={<PreviewIcon   fontSize='large' />} />
                            </Grid>
                        ))
                    ) : (
                        <Typography 
                            variant="h6" 
                            color="textSecondary" 
                            sx={{ 
                                marginTop: '3rem', 
                                textAlign: 'center', 
                                width: '100%',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden'
                            }}
                        >
                            No blogs found with the search term "{searchTerm}"
                        </Typography>
                    )}
                </Grid>
            )}
        </Box>
    );
}

export { Blog };