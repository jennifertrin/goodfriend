import pool from '../db/pool.js';
import type { Request, Response } from 'express';

// Get all highlights for the authenticated user
export async function getAllHighlights(req: Request, res: Response) {
  // TODO: Replace with real user ID from session/auth
  const userId = 1;
  const { rows } = await pool.query(
    `SELECT h.* FROM highlights h JOIN contacts c ON h.contact_id = c.id WHERE c.user_id = $1 ORDER BY h.date DESC`,
    [userId]
  );
  res.json(rows);
}
