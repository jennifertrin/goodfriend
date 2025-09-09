# Running Be A Good Friend (Frontend, Backend, and NLWeb)

This guide explains how to run the full stack locally for development and testing.

---

## Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)
- Docker & Docker Compose
- (Optional) Git for cloning NLWeb

---

## 1. Start the NLWeb Server (for AI Q&A)

1. Clone the NLWeb repo (if not already):
   ```sh
   git clone https://github.com/nlweb-ai/NLWeb.git ~/Documents/NLWeb
   ```
2. Build and run the NLWeb server using Docker Compose:
   ```sh
   docker-compose -f docker/docker-compose.nlweb.yml up -d
   ```
   This will build from your local NLWeb source and start the server on port 8081.

---

## 2. Start the Backend API

1. Install dependencies:
   ```sh
   npm install --prefix apps/backend
   ```
2. Start the backend server (TypeScript/ESM):
   ```sh
   npx ts-node apps/backend/bin/www
   ```
   By default, this runs on http://localhost:4000

---

## 3. Start the Frontend (Next.js)

1. Install dependencies:
   ```sh
   npm install --prefix apps/frontend
   ```
2. Start the frontend dev server:
   ```sh
   npm run dev --prefix apps/frontend
   ```
   By default, this runs on http://localhost:3000

---

## 4. Using Docker Compose for All Services (Optional)

You can also use the main Docker Compose file to run frontend, backend, db, and redis:

```sh
docker-compose -f docker/docker-compose.yml up -d
```

- Frontend: http://localhost:3000
- Backend: http://localhost:4000
- Database: localhost:5432
- Redis: localhost:6379

_Note: NLWeb is managed separately with its own compose file._

---

## 5. Testing the App
- Open http://localhost:3000 in your browser.
- The dashboard will show real LinkedIn influencer contacts.
- Use the "Ask AI" feature to query NLWeb for LinkedIn-based answers.

---

## Troubleshooting
- If you see mock data, ensure the backend is running and the frontend is calling the correct API URL.
- If NLWeb is not responding, check that the NLWeb container is running (`docker ps`) and accessible at http://localhost:8081.
- For database issues, ensure Postgres and Redis containers are running.

---

## Stopping Services
To stop all running containers:
```sh
docker-compose -f docker/docker-compose.yml down
```
To stop NLWeb:
```sh
docker-compose -f docker/docker-compose.nlweb.yml down
```

---

## Need Help?
- Check the README.md for more details.
- Ask for help if you get stuck!
