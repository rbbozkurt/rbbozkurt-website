import mongoose from 'mongoose';


// Create the schema for the sections inside details
const SectionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    paragraphs: { type: [String], required: true },
});

// Create the schema for the details field
const DetailsSchema = new mongoose.Schema({
    sections: { type: [SectionSchema], required: true },
});


export {DetailsSchema, SectionSchema};