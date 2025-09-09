
# Be A Good Friend – AI-Driven Connection Follow-Up Assistant

"Be A Good Friend" is an AI-powered assistant that helps users maintain and re-connect with their personal and professional relationships. The system identifies contacts you haven't messaged in over three months, surfaces them in a prioritized list, and enables both manual and automated follow-up messaging. It leverages context (such as recent career or personal highlights) and user preferences (tone, platform, notification triggers) to craft relevant, personalized outreach.

## Product Overview

**Problem:**
Users often lose touch with valuable contacts due to busy schedules and lack of reminders. This leads to missed opportunities for networking and relationship building. Existing messaging platforms do not provide proactive, context-aware nudges or tools to help users maintain meaningful relationships over time.

**Solution:**
Be A Good Friend is an AI-powered assistant that:
- Identifies contacts not messaged in 3+ months
- Surfaces them in a prioritized, filterable list

<img width="766" height="800" alt="Screenshot 2025-09-08 at 5 23 16 PM" src="https://github.com/user-attachments/assets/462eb167-5c64-4aac-8d01-11d5d30342b9" />

- Provides context-aware highlights (e.g., job changes, new projects)
- Enables both manual and AI-generated follow-up messaging
<img width="718" height="791" alt="Screenshot 2025-09-08 at 5 23 26 PM" src="https://github.com/user-attachments/assets/5522c703-4be2-49dc-bd73-d12a077d763d" />

- Enables the user to gather latest information from LinkedIN about the connection
<img width="687" height="229" alt="Screenshot 2025-09-08 at 5 23 36 PM" src="https://github.com/user-attachments/assets/e87b3e00-a76d-404e-a938-21a498785565" />

- Notifies users of important updates and opportunities to reconnect
<img width="729" height="378" alt="Screenshot 2025-09-08 at 5 23 41 PM" src="https://github.com/user-attachments/assets/b3e120f2-b40d-4128-bc21-255af4695a8f" />

## Architecture Summary

**Frontend:**
- Next.js (React, TypeScript, Tailwind CSS)
- User dashboard, preferences, notification center
- OAuth authentication (LinkedIn, Instagram, etc.)

**Backend:**
- Node.js/Express or Python/FastAPI API server
- RESTful API, user management, contact/message aggregation
- Message generation and delivery endpoints
- Notification and preference management

**AI Service:**
- AI Q&A for suggested contacts.
- It attempts to use NLWeb to get information on the connections from LinkedIn.

**Integrations:**
- Messaging platform APIs (LinkedIn, Instagram, etc.)
- OAuth for secure access
- Data enrichment APIs for highlights

**Data Storage:**
- PostgreSQL or MongoDB for persistent storage
- Redis for caching and session management

**Scheduler/Worker:**
- Periodic checks for contacts not messaged in 3+ months
- Triggers notifications and auto-messages

**DevOps:**
- Docker for containerization
- CI/CD pipeline (GitHub Actions)
- Infrastructure as Code (Terraform)

## Repository Structure
- `apps/web`: Next.js (React, TypeScript, Tailwind CSS) frontend
- `apps/backend`: Node.js (Express, TypeScript) backend
- `packages/common`: Shared types and utilities
- `docker/`: Docker configuration
- `.github/workflows/`: CI/CD pipeline
- 

## Setup
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
