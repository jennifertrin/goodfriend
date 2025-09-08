-- Users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- OAuth Accounts table
CREATE TABLE IF NOT EXISTS oauth_accounts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  provider VARCHAR(50) NOT NULL,
  provider_user_id VARCHAR(255) NOT NULL,
  access_token TEXT,
  refresh_token TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(provider, provider_user_id)
);

-- Contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  name VARCHAR(255),
  platform VARCHAR(50),
  last_messaged TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Messages table
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  contact_id INTEGER REFERENCES contacts(id),
  user_id INTEGER REFERENCES users(id),
  content TEXT,
  sent_at TIMESTAMP DEFAULT NOW(),
  is_auto BOOLEAN DEFAULT FALSE
);

-- Highlights table
CREATE TABLE IF NOT EXISTS highlights (
  id SERIAL PRIMARY KEY,
  contact_id INTEGER REFERENCES contacts(id),
  type VARCHAR(50),
  description TEXT,
  date TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Notification Preferences table
CREATE TABLE IF NOT EXISTS notification_preferences (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  highlight_type VARCHAR(50),
  notify BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);
