import axios from 'axios';
import config from '../config';  // Import the config file

// Fetch all projects
export async function fetchProjects() {
    try {
        const response = await axios.get(`${config.api.baseUrl}${config.paths.projects}`);
        return { data: response.data };
    } catch (error) {
        console.error('Error fetching projects:', error);
        return { data: [] };
    }
}

// Fetch a specific project by ID
export async function fetchProject(id) {
    try {
        console.log('Fetching project with id:', id);
        const response = await axios.get(`${config.api.baseUrl}${config.paths.projects}/${id}`);
        return { data: response.data };
    } catch (error) {
        console.error('Error fetching project:', error);
        return { data: null };
    }
}

// Fetch all blogs
export async function fetchBlogs() {
    try {
        const response = await axios.get(`${config.api.baseUrl}${config.paths.blogs}`);
        return { data: response.data };
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return { data: [] };
    }
}

// Fetch a specific blog by ID
export async function fetchBlog(id) {
    try {
        console.log('Fetching blog with id:', id);
        const response = await axios.get(`${config.api.baseUrl}${config.paths.blogs}/${id}`);
        return { data: response.data };
    } catch (error) {
        console.error('Error fetching blog:', error);
        return { data: null };
    }
}
