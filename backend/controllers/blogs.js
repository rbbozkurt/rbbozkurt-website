import mongoose from 'mongoose';
import BlogMessage from '../models/blogMessage.js';
import { getBase64ImageFromS3, generatePresignedUrl } from '../services/s3Service.js';
import _ from 'lodash'; // lodash is a utility library that can clone objects deeply
import { StatusCodes } from 'http-status-codes';

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
        res.status(StatusCodes.OK).json(blogsWithPresignedUrls);
    } catch(error) {
        res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
    }
}

export const getBlog = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const blog = await BlogMessage.findById(_id);
        // Check if the blog with the given ID exists
        if (!blog) {
            return res.status(StatusCodes.NOT_FOUND).send('No blog with that id');
        }
        // Get the base64 image from S3
        blog.imageUrl = await generatePresignedUrl(blog.imageS3Key);
        // Send the blog as a response
        res.status(StatusCodes.OK).json(blog);
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
    }
}

export const createBlog = async (req, res) => {
    try {
        const blog = req.body;
        // Create a new blog
        const newBlog = new BlogMessage(blog);
        // Save the new blog to the database
        await newBlog.save();
        // Send the new blog as a response
        res.status(StatusCodes.CREATED).json(newBlog);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const deleteBlog = async (req, res) => {
    try {
        const { id: _id } = req.params;

        // Check if the blog with the given ID exists
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(StatusCodes.NOT_FOUND).send('No blog with that id');
        }

        // Delete the blog with the given ID
        const deletedBlog = await BlogMessage.findByIdAndDelete(_id);

        if (!deletedBlog) {
            return res.status(StatusCodes.NOT_FOUND).send('No blog with that id');
        }

        res.status(StatusCodes.OK).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};

export const updateBlog = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const blog = req.body;
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(StatusCodes.BAD_REQUEST).send('Invalid blog ID');
        }
        const updatedBlog = await BlogMessage.findByIdAndUpdate(_id, { ...blog, _id }, { new: true });
        if (!updatedBlog) {
            return res.status(StatusCodes.NOT_FOUND).send('No blog with that id');
        }
        res.status(StatusCodes.OK).json(updatedBlog);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};