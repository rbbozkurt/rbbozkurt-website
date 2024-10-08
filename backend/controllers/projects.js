import mongoose from 'mongoose';
import ProjectMessage from "../models/projectMessage.js";
import { getBase64ImageFromS3, generatePresignedUrl } from '../services/s3Service.js';
import _ from 'lodash'; // lodash is a utility library that can clone objects deeply




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
        res.status(200).json(projectsWithPresignedUrls);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};




export const updateProject = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const project = req.body;
        console.log('Updating project:', project);
        // Check if the provided ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).send('No project with that id');
        }

        // Update the project with the new data, preserving the S3 key
        const updatedProject = await ProjectMessage.findByIdAndUpdate(_id, { ...project, _id }, { new: true });
        // Send the updated project as a response
        res.json(updatedProject);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
