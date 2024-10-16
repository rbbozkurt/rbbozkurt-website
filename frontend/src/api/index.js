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
        console.log('Fetched project:', response.data);
        return { data: response.data };
    } catch (error) {
        return { data: null };
    }
}

// Create a new project
export async function createProject(data) {
    try {
        const response = await axios.post(`${config.api.baseUrl}${config.paths.projects}`, data);
        console.log('Created project:', response.data);
        return { data: response.data };
    } catch (error) {
        console.error('Error creating project:', error);
        return { data: null };
    }
}

// Update an existing project
export async function updateProject(id, data) {
    try {
        console.log('Updating project:', data);
        const response = await axios.put(`${config.api.baseUrl}${config.paths.projects}/${id}`, data);
        return { data: response.data };
    } catch (error) {
        console.error('Error updating project:', error);
        return { data: data };
    }
}

// Delete a project
export async function deleteProject(id) {
    try {
        const response = await axios.delete(`${config.api.baseUrl}${config.paths.projects}/${id}`);
        console.log('Deleted project:', response.data);
        return { data: response.data };
    } catch (error) {
        console.error('Error deleting project:', error);
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

// Create a new blog
export async function createBlog(data) {
    try {
        const response = await axios.post(`${config.api.baseUrl}${config.paths.blogs}`, data);
        console.log('Created blog:', response.data);
        return { data: response.data };
    } catch (error) {
        console.error('Error creating blog:', error);
        return { data: null };
    }
}

// Update an existing blog
export async function updateBlog(id, data) {
    try {
        const response = await axios.put(`${config.api.baseUrl}${config.paths.blogs}/${id}`, data);
        return { data: response.data };
    } catch (error) {
        console.error('Error updating blog:', error);
        return { data: data };
    }
}

// Delete a blog
export async function deleteBlog(id) {
    try {
        const response = await axios.delete(`${config.api.baseUrl}${config.paths.blogs}/${id}`);
        console.log('Deleted blog:', response.data);
        return { data: response.data };
    } catch (error) {
        console.error('Error deleting blog:', error);
        return { data: null };
    }
}
