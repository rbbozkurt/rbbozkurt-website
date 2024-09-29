import mongoose from 'mongoose';

import {DetailsSchema} from './commonSchemaUtils.js';

// Create the main schema for the blog
const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true, maxlength: 100 },
    author: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: Date, required: true },
    views : { type: Number, required: true },
    estimatedReadTime: { type: String, required: true },
    tags: { type: [String], required: true },
    details: { type: DetailsSchema, required: true },
});

// Export the model
const BlogMessage = mongoose.model('BlogMessage', BlogSchema);
export default BlogMessage;