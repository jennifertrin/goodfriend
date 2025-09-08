import express from 'express';
import { getNotificationPreferences, updateNotificationPreference } from '../controllers/notifications.js';
const router = express.Router();

// GET /api/notifications/preferences
router.get('/preferences', getNotificationPreferences);

// POST /api/notifications/preferences
router.post('/preferences', updateNotificationPreference);

export default router;
