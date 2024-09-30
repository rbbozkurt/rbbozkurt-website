import {
    FETCH_BLOGS,
    FETCH_BLOG,
    FETCH_BLOG_FAILURE,
    FETCH_BLOG_SUCCESS,
    FETCH_BLOGS_SUCCESS,
    FETCH_BLOGS_FAILURE,
    UPDATE_BLOG
} from '../constants/actionTypes';

const initialState = {
    blogs: [],
    blog: null,
    loading: false,
    error: null,
};

const blogs = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BLOGS:
            return { ...state, loading: true, error: null };
        case FETCH_BLOGS_SUCCESS:
            return { ...state, loading: false, blogs: action.payload };
        case FETCH_BLOGS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case FETCH_BLOG:
            return { ...state, loading: true, error: null };
        case FETCH_BLOG_SUCCESS:
            return { ...state, loading: false, blog: action.payload };
        case FETCH_BLOG_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case UPDATE_BLOG:
            return {
                ...state,
                blog: action.payload,  // Update the current viewed blog
                blogs: state.blogs.map(b => b._id === action.payload._id ? action.payload : b) // Update the specific blog in blogs array
            };
        default:
            return state;
    }
}

export default blogs;