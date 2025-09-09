import pool from '../db/pool.js';
import type { Request, Response } from 'express';

// In-memory mock data for LinkedIn influencers
const influencerContacts = [
  {
    id: '1',
    name: 'Satya Nadella',
    platform: 'linkedin',
    lastMessaged: '2025-03-20T00:00:00Z',
    highlights: [],
    profileUrl: 'https://www.linkedin.com/in/satyanadella/'
  },
  {
    id: '2',
    name: 'Arianna Huffington',
    platform: 'linkedin',
    lastMessaged: '2025-02-10T00:00:00Z',
    highlights: [],
    profileUrl: 'https://www.linkedin.com/in/ariannahuffington/'
  },
  {
    id: '3',
    name: 'Simon Sinek',
    platform: 'linkedin',
    lastMessaged: '2025-01-05T00:00:00Z',
    highlights: [],
    profileUrl: 'https://www.linkedin.com/in/simonsinek/'
  }
];

// Example: Get contacts not messaged in 3+ months for the authenticated user
export async function getStaleContacts(req: Request, res: Response) {
  // Return mock LinkedIn influencer contacts for NLWeb demo
  res.json(influencerContacts);
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
