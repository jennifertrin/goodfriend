
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
