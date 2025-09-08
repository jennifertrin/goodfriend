import pool from '../db/pool.js';
import type { Request, Response } from 'express';

// Save a new message and (placeholder) send via platform API
export async function sendMessage(req: Request, res: Response) {
  // TODO: Replace with real user ID from session/auth
  const userId = 1;
  const { contactId, content, isAuto } = req.body;
  const { rows } = await pool.query(
    `INSERT INTO messages (contact_id, user_id, content, is_auto) VALUES ($1, $2, $3, $4) RETURNING *`,
    [contactId, userId, content, isAuto || false]
  );
  // TODO: Integrate with LinkedIn/Instagram API to send message
  res.json(rows[0]);
}
