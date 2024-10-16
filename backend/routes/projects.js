import express from 'express';
import {getProjects, updateProject, getProject, createProject, deleteProject} from '../controllers/projects.js';

const router = express.Router();

router.get('/', getProjects);
router.put('/:id', updateProject);
router.get('/:id', getProject);
router.post('/', createProject);
router.delete('/:id', deleteProject);

export default router;