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