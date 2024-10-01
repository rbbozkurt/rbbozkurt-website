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

const AWSImageSchema = new mongoose.Schema({
    image: {
        key: { type: String, required: true },  // S3 object key (e.g., 'picsblur_banner.png')
        presignedUrl: { type: String },  // Optional field for the pre-signed URL, can be generated on the fly
    }
})

export {DetailsSchema, SectionSchema, AWSImageSchema};