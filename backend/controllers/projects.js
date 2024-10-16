import mongoose from 'mongoose';
import ProjectMessage from "../models/projectMessage.js";
import { getBase64ImageFromS3, generatePresignedUrl } from '../services/s3Service.js';
import _ from 'lodash'; // lodash is a utility library that can clone objects deeply
import { StatusCodes } from 'http-status-codes';

export const getProjects = async (req, res) => {
    try {
        // Fetch all the projects from the database
        const projects = await ProjectMessage.find();

        // get image from s3
        const projectsWithPresignedUrls = await Promise.all(projects.map(async (project) => {
            // Clone the project object deeply
            const clonedProject = _.cloneDeep(project);
            // Get the base64 image from S3
            clonedProject.imageUrl = await generatePresignedUrl(project.imageS3Key);
            return clonedProject;
        }));
        
        // Send the projects with pre-signed URLs as a response
        res.status(StatusCodes.OK).json(projectsWithPresignedUrls);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};

export const getProject = async (req, res) =>{
    try {
        const { id: _id } = req.params;
        const project = await ProjectMessage.findById(_id);
        // Check if the project with the given ID exists
        if (!project) {
            return res.status(StatusCodes.NOT_FOUND).send('No project with that id');
        }
        // Get the base64 image from S3
        project.imageUrl = await generatePresignedUrl(project.imageS3Key);
        // Send the project as a response
        res.status(StatusCodes.OK).json(project);
    }catch (error) { 
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    } 
}

export const createProject = async (req, res) => {
    try {
        const project = req.body;
        // Create a new project
        const newProject = new ProjectMessage(project);
        // Save the new project to the database
        await newProject.save();
        // Send the new project as a response
        res.status(StatusCodes.CREATED).json(newProject);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const deleteProject = async (req, res) => {
    try{
        const { id: _id } = req.params;
        // Check if the provided ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(StatusCodes.BAD_REQUEST).send('Invalid project ID');
        }
        // Delete the project from the database
        const deletedProject = await ProjectMessage.findByIdAndDelete(_id);
        if (!deletedProject) {
            return res.status(StatusCodes.NOT_FOUND).send('No project with that id');
        }
        res.status(StatusCodes.OK).json({ message: 'Project deleted successfully' });
    }catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const updateProject = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const project = req.body;
        console.log('Updating project:', project);
        // Check if the provided ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(StatusCodes.BAD_REQUEST).send('Invalid project ID');
        }

        // Update the project with the new data, preserving the S3 key
        const updatedProject = await ProjectMessage.findByIdAndUpdate(_id, { ...project, _id }, { new: true });
        if (!updatedProject) {
            return res.status(StatusCodes.NOT_FOUND).send('No project with that id');
        }
        // Send the updated project as a response
        res.status(StatusCodes.OK).json(updatedProject);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}
