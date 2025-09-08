import pool from '../db/pool.js';
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

// This function would be called by a scheduler/worker (e.g., BullMQ, cron)
export async function checkAndNotifyHighlights() {
  // Find all users with notification preferences
  const { rows: users } = await pool.query(`SELECT DISTINCT user_id FROM notification_preferences WHERE notify = TRUE`);
  for (const user of users) {
    // For each user, get their notification preferences
    const { rows: prefs } = await pool.query(`SELECT * FROM notification_preferences WHERE user_id = $1 AND notify = TRUE`, [user.user_id]);
    for (const pref of prefs) {
      // Find highlights of the specified type for this user that are new (not yet notified)
      const { rows: highlights } = await pool.query(`
        SELECT h.*, c.name as contact_name FROM highlights h
        JOIN contacts c ON h.contact_id = c.id
        WHERE c.user_id = $1 AND h.type = $2 AND h.date > NOW() - INTERVAL '1 day'`,
        [user.user_id, pref.highlight_type]
      );
      for (const highlight of highlights) {
        // Check Redis to avoid duplicate notifications
        const redisKey = `notified:${user.user_id}:${highlight.id}`;
        const alreadyNotified = await redis.get(redisKey);
        if (!alreadyNotified) {
          // TODO: Send notification (e.g., email, web push)
          // Placeholder: log to console
          console.log(`Notify user ${user.user_id} about highlight ${highlight.id} (${highlight.type}) for contact ${highlight.contact_name}`);
          // Mark as notified in Redis for 7 days
          await redis.set(redisKey, '1', 'EX', 7 * 24 * 60 * 60);
        }
      }
    }
  }
}
