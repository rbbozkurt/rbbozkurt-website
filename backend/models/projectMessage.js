import mongoose from 'mongoose';
import { DetailsSchema } from './commonSchemaUtils.js';

// Create the main schema for the project
const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true, maxlength: 100 },
    description: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: Date, required: true },
    views : { type: Number, required: true },
    estimatedReadTime: { type: String, required: true },
    tags: { type: [String], required: true },
    details: { type: DetailsSchema, required: true },
    link: { type: String, required: true },
});

// Export the model
const ProjectMessage = mongoose.model('ProjectMessage', ProjectSchema);
export default ProjectMessage;