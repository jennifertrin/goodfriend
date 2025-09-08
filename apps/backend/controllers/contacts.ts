import pool from '../db/pool.js';
import type { Request, Response } from 'express';

// Example: Get contacts not messaged in 3+ months for the authenticated user
export async function getStaleContacts(req: Request, res: Response) {
  // TODO: Replace with real user ID from session/auth
  const userId = 1;
  const { rows } = await pool.query(
    `SELECT * FROM contacts WHERE user_id = $1 AND (last_messaged IS NULL OR last_messaged < NOW() - INTERVAL '3 months') ORDER BY last_messaged ASC`,
    [userId]
  );
  res.json(rows);
}

// Example: Get highlights for a contact
export async function getContactHighlights(req: Request, res: Response) {
  const contactId = req.params.id;
  const { rows } = await pool.query(
    `SELECT * FROM highlights WHERE contact_id = $1 ORDER BY date DESC`,
    [contactId]
  );
  res.json(rows);
}
