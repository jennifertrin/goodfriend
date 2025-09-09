import express from 'express';
import axios from 'axios';

const router = express.Router();

// POST /api/nlweb/ask
router.post('/ask', async (req, res) => {
  const { query, site, mode } = req.body;
  try {
    const response = await axios.post('http://localhost:8081/ask', {
      query,
      site: site || 'linkedin',
      mode: mode || 'summarize',
    });
    res.json(response.data);
  } catch (error: any) {
    const message = error?.response?.data?.error || error?.message || 'Unknown error';
    res.status(500).json({ error: 'Failed to contact NLWeb API', details: message });
  }
});

export default router;