import * as api from '../api';
import { 
    FETCH_BLOGS, 
    FETCH_BLOG, 
    FETCH_BLOG_FAILURE, 
    FETCH_BLOG_SUCCESS, 
    FETCH_BLOGS_FAILURE, 
    FETCH_BLOGS_SUCCESS 
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