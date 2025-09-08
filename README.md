
# Be A Good Friend – AI-Driven Connection Follow-Up Assistant

"Be A Good Friend" is an AI-powered assistant that helps users maintain and nurture their personal and professional relationships. The system identifies contacts you haven't messaged in over three months, surfaces them in a prioritized list, and enables both manual and automated follow-up messaging. It leverages context (such as recent career or personal highlights) and user preferences (tone, platform, notification triggers) to craft relevant, personalized outreach.

## Product Overview

**Problem:**
Users often lose touch with valuable contacts due to busy schedules and lack of reminders. This leads to missed opportunities for networking and relationship building. Existing messaging platforms do not provide proactive, context-aware nudges or tools to help users maintain meaningful relationships over time.

**Solution:**
Be A Good Friend delivers an AI-powered assistant that:
- Identifies contacts not messaged in 3+ months
- Surfaces them in a prioritized, filterable list
- Provides context-aware highlights (e.g., job changes, new projects)
- Enables both manual and AI-generated follow-up messaging
- Adapts tone and content to platform and user preferences
- Notifies users of important updates and opportunities to reconnect

**User Personas:**
- Busy Professionals
- Social Networkers
- Sales/Business Development Users

**Key User Journeys:**
- View a list of contacts not messaged in 3+ months, sorted by time since last message
- Filter by platform or time since last message
- View recent highlights for each contact
- Ask the AI agent questions about suggested contacts (e.g., "Why should I message this person?" or "What should I talk to them about?")
- Send manual or AI-generated messages, with options to adjust tone and context
- Set preferences for tone, context, and notification triggers
- Receive notifications when tracked highlights occur

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
- Message generation (tone/context adaptation)
- Highlight summarization (NLP)
- Platform-specific language style adaptation
- AI Q&A for suggested contacts

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
- `apps/frontend`: Next.js (React, TypeScript, Tailwind CSS) frontend
- `apps/backend`: Node.js (Express, TypeScript) backend
- `packages/common`: Shared types and utilities
- `docker/`: Docker configuration
- `.github/workflows/`: CI/CD pipeline

## Features
- OAuth login (LinkedIn, Instagram)
- Contact management and filtering
- Message history and highlight summarization
- AI Q&A (NLPWeb integration)
- Notification system
- PostgreSQL for persistent storage
- Redis for caching

## Getting Started
Instructions for setup and development will be added as the project is scaffolded.
