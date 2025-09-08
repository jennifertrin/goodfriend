import pool from '../db/pool.js';
import type { Request, Response } from 'express';

// Get notification preferences for the authenticated user
export async function getNotificationPreferences(req: Request, res: Response) {
  // TODO: Replace with real user ID from session/auth
  const userId = 1;
  const { rows } = await pool.query(
    `SELECT * FROM notification_preferences WHERE user_id = $1`,
    [userId]
  );
  res.json(rows);
}

// Update notification preference for a highlight type
export async function updateNotificationPreference(req: Request, res: Response) {
  // TODO: Replace with real user ID from session/auth
  const userId = 1;
  const { highlightType, notify } = req.body;
  const { rows } = await pool.query(
    `INSERT INTO notification_preferences (user_id, highlight_type, notify)
     VALUES ($1, $2, $3)
     ON CONFLICT (user_id, highlight_type)
     DO UPDATE SET notify = $3, updated_at = NOW()
     RETURNING *`,
    [userId, highlightType, notify]
  );
  res.json(rows[0]);
}
