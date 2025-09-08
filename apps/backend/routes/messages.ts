import express from 'express';
import { sendMessage } from '../controllers/messages.js';
const router = express.Router();

// POST /api/messages
router.post('/', sendMessage);

export default router;
