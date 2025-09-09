import axios from 'axios';

export async function askNLWebAboutContact({ contact, question }) {
  // Compose a natural language query for NLWeb
  const query = `${question} (LinkedIn: ${contact.profileUrl})`;
  const res = await axios.post('/api/nlweb/ask', {
    query,
    site: 'linkedin',
    mode: 'summarize',
  });
  // Return the best answer from NLWeb
  return res.data?.results?.[0]?.description || 'No answer found.';
}
