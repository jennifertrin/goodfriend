import express from 'express';
const router = express.Router();

// POST /api/ai/qa (handled by proxy in app.ts)
router.post('/qa', (req, res) => {
  // This route is proxied to NLWeb API in app.ts
  res.status(501).json({ error: 'Not implemented here. Use /api/ai/qa proxy.' });
});

export default router;
