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