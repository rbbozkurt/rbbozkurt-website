import * as api from '../api';
import { 
    FETCH_PROJECTS, 
    FETCH_PROJECT, 
    FETCH_PROJECT_SUCCESS, 
    FETCH_PROJECT_FAILURE, 
    FETCH_PROJECTS_SUCCESS, 
    FETCH_PROJECTS_FAILURE, 
    UPDATE_PROJECT
} from '../constants/actionTypes';

// Action Creators
export const getProjects = () => async (dispatch) => {
    dispatch({ type: FETCH_PROJECTS });
    try {
        const { data } = await api.fetchProjects();
        dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: data });
    } catch (error) {
        console.error('Error fetching projects:', error);
        dispatch({ type: FETCH_PROJECTS_FAILURE, payload: error.message });
    }
};

export const getProject = (id) => async (dispatch) => {
    dispatch({ type: FETCH_PROJECT });
    try {
        const { data } = await api.fetchProject(id);
        dispatch({ type: FETCH_PROJECT_SUCCESS, payload: data });
    } catch (error) {
        console.error('Error fetching project:', error);
        dispatch({ type: FETCH_PROJECT_FAILURE, payload: error.message });
    }
};

export const updateProjectView = (id, project) => async (dispatch) => {
    try {
        project.views += 1;
        console.log(`Updating project with id ${id} views to ${project.views}`);
        const { data } = await api.updateProject(id, project);
        dispatch({ type: UPDATE_PROJECT, payload: data });
    } catch (error) {
        console.error('Error updating project:', error);
    }
}