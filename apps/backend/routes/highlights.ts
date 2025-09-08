import express from 'express';
import { getAllHighlights } from '../controllers/highlights.js';
const router = express.Router();

// GET /api/highlights
router.get('/', getAllHighlights);

export default router;
