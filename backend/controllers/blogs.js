import mongoose from 'mongoose';
import BlogMessage from '../models/blogMessage.js';
import { getBase64ImageFromS3, generatePresignedUrl } from '../services/s3Service.js';
import _ from 'lodash'; // lodash is a utility library that can clone objects deeply

export const getBlogs = async (req, res) => {
    try {
        // Fetch all the blogs from the database
        const blogs = await BlogMessage.find();
        //get image from s3
        const blogsWithPresignedUrls = await Promise.all(blogs.map(async (blog) => {
            // Clone the blog object deeply
            console.log('Cloning blog:', blog);
            const clonedBlog = _.cloneDeep(blog);
            // Get the base64 image from S3
            clonedBlog.imageUrl = await generatePresignedUrl(blog.imageS3Key);
            return clonedBlog;
        }));

        // Send the blogs as a response
        res.status(200).json(blogsWithPresignedUrls);
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