import React, { useState } from 'react';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import { SearchBar, BlogCard } from '../view-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateBlogView } from '../../actions/blogs';
import PreviewIcon from '@mui/icons-material/Preview';
import { useTheme } from '@mui/material/styles';

function Blog() {
    const [searchTerm, setSearchTerm] = useState('');
    const theme = useTheme();
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
            sx={theme.custom.blogPage.box}
        >
            <SearchBar placeholderText={"Search Blog"} searchTerm={searchTerm} onSearchChange={handleSearchChange} />

            {loading ? (
                <Box sx={theme.custom.blogPage.loadingBox}>
                    <CircularProgress />
                </Box>
            ) : error ? (
                <Box sx={theme.custom.blogPage.errorBox}>
                    <Typography sx={theme.custom.blogPage.errorBox}>
                        {error}
                    </Typography>
                </Box>
            ) : blogs.length === 0 ? (
                <Box sx={theme.custom.blogPage.noBlogBox}>
                    <Typography sx={theme.custom.blogPage.noBlogBox.text}>
                        No blogs found.
                    </Typography>
                </Box>
            ) : (
                <Grid container
                    spacing={theme.custom.blogPage.grid.container.spacing}
                    justifyContent={theme.custom.blogPage.grid.container.justifyContent}
                    alignItems={theme.custom.blogPage.grid.container.alignItems}>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <Grid
                                item
                                key={item._id}
                                xs={12} sm={12} md={12}
                                sx={theme.custom.blogPage.grid.item}

                            >
                                <BlogCard
                                    item={item}
                                    onClickCardClicked={() => handleOnCardClick(item._id)}
                                    icon={<PreviewIcon fontSize={theme.custom.blogPage.grid.item.blogCard.fontSize} />}
                                />
                            </Grid>
                        ))
                    ) : (
                        <Box sx={theme.custom.blogPage.grid.noMatchingBlog}>
                            <Typography sx={theme.custom.blogPage.grid.noMatchingBlog.text}>
                                No blogs found with the search term "{searchTerm}"
                            </Typography>
                        </Box>

                    )}
                </Grid>
            )}
        </Box>
    );
}

export { Blog };