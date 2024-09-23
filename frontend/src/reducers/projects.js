import { 
    FETCH_PROJECTS, 
    FETCH_PROJECT, 
    FETCH_PROJECT_SUCCESS, 
    FETCH_PROJECT_FAILURE, 
    FETCH_PROJECTS_SUCCESS, 
    FETCH_PROJECTS_FAILURE 
} from '../constants/actionTypes';

const initialState = {
    projects: [],
    project: null,
    loading: false,
    error: null,
};

const projects = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PROJECTS:
            return { ...state, loading: true, error: null };
        case FETCH_PROJECTS_SUCCESS:
            return { ...state, loading: false, projects: action.payload };
        case FETCH_PROJECTS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case FETCH_PROJECT:
            return { ...state, loading: true, error: null };
        case FETCH_PROJECT_SUCCESS:
            return { ...state, loading: false, project: action.payload };
        case FETCH_PROJECT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default projects;