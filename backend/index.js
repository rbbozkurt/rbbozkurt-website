
import dotenv from 'dotenv';
dotenv.config();  // Load environment variables

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import blogRoutes from './routes/blogs.js';
import projectRoutes from './routes/projects.js';


console.log("AWS Access Key:", process.env.AWS_ACCESS_KEY_ID);
console.log("AWS Secret Access Key:", process.env.AWS_SECRET_ACCESS_KEY);
console.log("AWS Region:", process.env.AWS_REGION);

const app = express();
app.use(cors())


app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use('/api/blogs', blogRoutes);
app.use('/api/projects', projectRoutes);

const CONNECTION_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/?retryWrites=true&w=majority&appName=devCluster`;
const PORT = process.env.PORT || 5001;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error));

export default app


