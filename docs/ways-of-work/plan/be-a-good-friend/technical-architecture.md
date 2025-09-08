# Be A Good Friend – Technical Architecture Specification

## 1. Overview
This document outlines the technical architecture for the "Be A Good Friend" AI-driven connection follow-up assistant. It details the system components, data flows, integrations, and key design decisions to deliver the features described in the Epic PRD.

## 2. System Components

### 2.1 Frontend
- **Web Application (React/Next.js):**
  - User dashboard: List of contacts, filters, highlights, and messaging options
  - Preferences/settings: Tone, context, notification triggers
  - Notification center: Alerts for tracked highlights
  - Authentication: OAuth with supported platforms (LinkedIn, Instagram, etc.)

### 2.2 Backend
- **API Server (Node.js/Express or Python/FastAPI):**
  - RESTful API for frontend communication
  - User management and authentication
  - Contact and message history aggregation
  - Message generation and delivery endpoints
  - Notification and preference management

- **AI Service (Python, hosted or serverless):**
  - Message generation (tone/context adaptation)
  - Highlight summarization (NLP)
  - Platform-specific language style adaptation
  - AI Q&A: Answering user questions about suggested contacts and what to message them about, using available data and highlights

- **Scheduler/Worker Service:**
  - Periodic checks for contacts not messaged in 3+ months
  - Triggers notifications and auto-messages

### 2.3 Integrations
- **Messaging Platform APIs:**
  - LinkedIn, Instagram, and others via official APIs or third-party connectors
  - OAuth for secure access

- **Data Enrichment APIs:**
  - Public data sources for highlights (e.g., job changes, news)
  - Optional: Social graph APIs for deeper context

### 2.4 Data Storage
- **Database (PostgreSQL or MongoDB):**
  - User profiles, preferences, and OAuth tokens
  - Contact lists and message history
  - Notification and highlight tracking

- **Cache (Redis):**
  - Session management
  - Recent highlight lookups

## 3. Data Flow & Sequence Diagrams

### 3.1 Contact Refresh & Highlight Detection
1. Scheduler triggers periodic sync with messaging platforms
2. Backend fetches latest contact and message data
3. AI service analyzes message history and public data for highlights
4. Database updated with new highlights and contact statuses

### 3.2 User Interaction
1. User logs in and views dashboard
2. Frontend requests contact list and highlights from backend
3. User selects contact, views summary, and can ask the AI agent questions about why the contact is suggested and what to talk about; frontend sends question to backend → AI service returns context-aware answer
4. User chooses manual or auto-message
5. For auto-message, frontend sends request to backend → AI service generates message → backend sends via platform API
6. User sets preferences/notification triggers, which are stored in the database

### 3.3 Notification Flow
1. Scheduler/worker detects tracked highlight event
2. Backend triggers notification to user (web push/email)
3. User clicks notification, views contact, and can message

## 4. Key Design Decisions
- **Security:**
  - OAuth for all third-party integrations
  - Encrypted storage of tokens and sensitive data
  - Role-based access for user/admin features
- **Scalability:**
  - Microservices for AI and scheduler/worker components
  - Horizontal scaling for API and worker services
- **Extensibility:**
  - Modular integration layer for adding new platforms
  - Pluggable AI models for message generation
- **Privacy:**
  - User control over data access and deletion
  - Compliance with GDPR/CCPA

## 5. Technology Stack
- **Frontend:** React, Next.js, TypeScript, Tailwind CSS
- **Backend:** Node.js/Express or Python/FastAPI, REST API
- **AI/NLP:** Python (spaCy, HuggingFace Transformers, OpenAI API)
- **Database:** PostgreSQL or MongoDB
- **Cache:** Redis
- **Scheduler/Worker:** Celery (Python) or BullMQ (Node.js)
- **Integrations:** OAuth 2.0, Platform APIs
- **Hosting:** AWS/GCP/Azure (Dockerized services)

## 6. Deployment & DevOps
- Docker for containerization
- CI/CD pipeline (GitHub Actions, GitLab CI)
- Infrastructure as Code (Terraform)
- Monitoring (Prometheus, Grafana)

## 7. Open Questions & Risks
- API rate limits and access for messaging platforms
- Data privacy and compliance for cross-platform data
- Quality and reliability of highlight detection
- User trust in AI-generated messages

---

This architecture provides a robust, scalable, and extensible foundation for the "Be A Good Friend" epic, supporting future growth and additional integrations.
