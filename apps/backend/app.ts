import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import { json } from 'body-parser';
import { Pool } from 'pg';
import Redis from 'ioredis';
import path from 'path';
import { fileURLToPath } from 'url';
import { createProxyMiddleware } from 'http-proxy-middleware';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000', credentials: true }));
app.use(json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'supersecret',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

// Database setup
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// Redis setup
const redis = new Redis(process.env.REDIS_URL);

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// API routes
import contactsRouter from './routes/contacts.js';
import messagesRouter from './routes/messages.js';
import highlightsRouter from './routes/highlights.js';
import aiRouter from './routes/ai.js';
import authRouter from './routes/auth.js';
import notificationsRouter from './routes/notifications.js';
app.use('/api/contacts', contactsRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/highlights', highlightsRouter);
app.use('/api/ai', aiRouter);
app.use('/api/auth', authRouter);
app.use('/api/notifications', notificationsRouter);

// Proxy for NLWeb API (AI Q&A)
import type { Request } from 'express';
import type { ClientRequest } from 'http';
app.use('/api/ai/qa', createProxyMiddleware({
  target: process.env.NLWEB_API_URL || 'https://api.nlweb.com',
  changeOrigin: true,
  pathRewrite: { '^/api/ai/qa': '/v1/qa' },
  onProxyReq: (proxyReq: ClientRequest, req: Request) => {
    proxyReq.setHeader('Authorization', `Bearer ${process.env.NLWEB_API_KEY}`);
  },
}));

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});


