import * as api from '../api';
import { 
    FETCH_BLOGS, 
    FETCH_BLOG, 
    FETCH_BLOG_FAILURE, 
    FETCH_BLOG_SUCCESS, 
    FETCH_BLOGS_FAILURE, 
    FETCH_BLOGS_SUCCESS ,
    UPDATE_BLOG
} from '../constants/actionTypes';

// Action Creators
export const getBlogs = () => async (dispatch) => {
    dispatch({ type: FETCH_BLOGS });
    try {
        const { data } = await api.fetchBlogs();
        dispatch({ type: FETCH_BLOGS_SUCCESS, payload: data });
    } catch (error) {
        console.error('Error fetching blogs:', error);
        dispatch({ type: FETCH_BLOGS_FAILURE, payload: error.message });
    }
};

export const getBlog = (id) => async (dispatch) => {
    dispatch({ type: FETCH_BLOG });
    try {
        const { data } = await api.fetchBlog(id);
        dispatch({ type: FETCH_BLOG_SUCCESS, payload: data });
    } catch (error) {
        console.error('Error fetching blog:', error);
        dispatch({ type: FETCH_BLOG_FAILURE, payload: error.message });
    }
};

export const updateBlogView = (id, blog) => async (dispatch) => {
    try{
        blog.views += 1;
        console.log(`Updating blog with id ${id} views to ${blog}`);
        const { data } = await api.updateBlog(id, blog);
        dispatch({ type: UPDATE_BLOG, payload: data });
    }catch(error){
        console.error('Error updating blog:', error);
    }
}