import axios from 'axios';
import config from '../config';  // Import the config file

// Fetch all projects
export async function fetchProjects() {
    try {
        const response = await axios.get(`${config.api.baseUrl}${config.paths.projects}`);
        console.log('Fetched projects:', response.data);
        return { data: response.data };
    } catch (error) {
        console.error('Error fetching projects:', error);
        return { data: [] };
    }
}

// Fetch a specific project by ID
export async function fetchProject(id) {
    try {
        const response = await axios.get(`${config.api.baseUrl}${config.paths.projects}/${id}`);
        console.log('Fetched projects:', response.data);
        return { data: response.data };
    } catch (error) {
        return { data: null };
    }
}

// Fetch all blogs
export async function fetchBlogs() {
    try {
        const response = await axios.get(`${config.api.baseUrl}${config.paths.blogs}`);
        console.log('Fetched blogs:', response.data);
        return { data: response.data };
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return { data: [] };
    }
}

// Fetch a specific blog by ID
export async function fetchBlog(id) {
    try {
        const response = await axios.get(`${config.api.baseUrl}${config.paths.blogs}/${id}`);
        return { data: response.data };
    } catch (error) {
        return { data: null };
    }
}

export async function updateProject(id, data) {
    try {
        console.log('Updating project:', data);
        const response = await axios.put(`${config.api.baseUrl}${config.paths.projects}/${id}`, data);
        return { data: response.data };
    } catch (error) {
        return { data: data };
    }
}   
export async function updateBlog(id, data) {
    try {
        const response = await axios.put(`${config.api.baseUrl}${config.paths.blogs}/${id}`, data);
        return { data: response.data };
    } catch (error) {
        return { data: data };
    }
}
