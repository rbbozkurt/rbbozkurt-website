import express from 'express';
import {getBlogs, updateBlog} from '../controllers/blogs.js';

const router = express.Router();

router.get('/', getBlogs);
router.put('/:id', updateBlog);

export default router;