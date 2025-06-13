import express from 'express';
import { getQuestions } from '../../controllers/questionController.js';

const router = express.Router();

// Ruta GET: /api/questions
router.get('/', getQuestions);

export default router;
