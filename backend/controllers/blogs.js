import mongoose from 'mongoose';
import BlogMessage from '../models/blogMessage.js';


export const getBlogs = async (req, res) => {
    try {
        // Fetch all the blogs from the database
        const blogs = await BlogMessage.find();
        // Send the blogs as a response
        res.status(200).json(blogs);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateBlog = async (req, res) => {
    const { id: _id } = req.params;
    const blog = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No blog with that id');
    }

    try {
        const updatedBlog = await BlogMessage.findByIdAndUpdate(_id, { ...blog, _id }, { new: true });
        res.json(updatedBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}