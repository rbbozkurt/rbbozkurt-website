import express from 'express';
import {getProjects, updateProject} from '../controllers/projects.js';

const router = express.Router();

router.get('/', getProjects);
router.put('/:id', updateProject);

export default router;