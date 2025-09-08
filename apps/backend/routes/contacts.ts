import express from 'express';
import { getStaleContacts, getContactHighlights } from '../controllers/contacts.js';
const router = express.Router();

// GET /api/contacts?stale=3m
router.get('/', getStaleContacts);

// GET /api/contacts/:id/highlights
router.get('/:id/highlights', getContactHighlights);

export default router;
