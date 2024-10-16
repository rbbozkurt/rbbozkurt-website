import express from 'express';
import {getBlogs, updateBlog, getBlog, createBlog, deleteBlog} from '../controllers/blogs.js';

const router = express.Router();

router.get('/', getBlogs);
router.get('/:id', getBlog);
router.put('/:id', updateBlog);
router.post('/', createBlog);
router.delete('/:id', deleteBlog);


export default router;