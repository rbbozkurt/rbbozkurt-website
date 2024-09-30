import mongoose from 'mongoose';
import ProjectMessage from "../models/projectMessage.js";

export const getProjects = async (req, res) => {
    try{
        // Fetch all the projects from the database
        const projects = await ProjectMessage.find();
        // Send the projects as a response
        res.status(200).json(projects);
    }catch(error){
        res.status(404).json({ message: error.message });
    }
}

export const updateProject = async (req, res) => {
    try{
        const { id: _id } = req.params;
        const project = req.body;
        
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).send('No project with that id');
        }

        const updatedProject = await ProjectMessage.findByIdAndUpdate(_id, { ...project, _id }, { new: true });
        res.json(updatedProject);
    }catch(error){
        res.status(404).json({ message: error.message });
    }
    
}