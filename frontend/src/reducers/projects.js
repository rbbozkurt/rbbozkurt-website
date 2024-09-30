import { 
    FETCH_PROJECTS, 
    FETCH_PROJECT, 
    FETCH_PROJECT_SUCCESS, 
    FETCH_PROJECT_FAILURE, 
    FETCH_PROJECTS_SUCCESS, 
    FETCH_PROJECTS_FAILURE,
    UPDATE_PROJECT
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
        case UPDATE_PROJECT:
            return {
                ...state,
                project: action.payload,  // Update the current viewed project
                projects: state.projects.map(p => p._id === action.payload._id ? action.payload : p) // Update the specific project in projects array
            };
        default:
            return state;
    }
}

export default projects;