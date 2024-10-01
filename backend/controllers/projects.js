import mongoose from 'mongoose';
import ProjectMessage from "../models/projectMessage.js";
import { generatePresignedUrl } from '../services/s3Service.js';
import _ from 'lodash'; // lodash is a utility library that can clone objects deeply

export const getProjects = async (req, res) => {
    try {
        // Fetch all the projects from the database
        const projects = await ProjectMessage.find();
        console.log('Projects:', projects);
        
        // Generate pre-signed URLs for each project's image
        const projectsWithPresignedUrls = await Promise.all(projects.map(async (project) => {
            // Create a deep clone of the project object to avoid mutations
            const clonedProject = _.cloneDeep(project.toObject()); 
            
            console.log('Image object:', clonedProject.image);

            if (!clonedProject.image || typeof clonedProject.image.key !== 'string') {
                console.log('Image key is undefined or not a string:', clonedProject.image.key);
                return clonedProject; // Return the cloned project without modifying the image
            }

            console.log(`The key of the image is ${clonedProject.image.key}`);

            // Generate pre-signed URL using the S3 key
            try {
                const presignedUrl = await generatePresignedUrl(clonedProject.image.key);
                console.log('Generated presignedUrl:', presignedUrl);
                
                clonedProject.image.presignedUrl = presignedUrl;
                return clonedProject;
            } catch (err) {
                console.error('Error generating pre-signed URL:', err);
                return clonedProject;
            }
        }));

        // Send the projects with pre-signed URLs as a response
        res.status(200).json(projectsWithPresignedUrls);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(404).json({ message: error.message });
    }
};



export const updateProject = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const project = req.body;

        // Check if the provided ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).send('No project with that id');
        }

        // Find the existing project to preserve the S3 image key
        const existingProject = await ProjectMessage.findById(_id);

        if (!existingProject) {
            return res.status(404).send('No project with that id');
        }

        // If the incoming project data includes a pre-signed URL, retain the original S3 key
        if (project.image && project.image.presignedUrl) {
            project.image.key = existingProject.image.key;  // Keep the S3 key unchanged
        }

        // Update the project with the new data, preserving the S3 key
        const updatedProject = await ProjectMessage.findByIdAndUpdate(_id, { ...project, _id }, { new: true });

        // Send the updated project as a response
        res.json(updatedProject);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
