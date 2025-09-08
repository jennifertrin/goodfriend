# Be A Good Friend – Epic Product Requirements Document (PRD)

## 1. Epic Name

Be A Good Friend: AI-Driven Connection Follow-Up Assistant

## 2. Goal

**Problem:**
Users often lose touch with valuable personal and professional contacts due to busy schedules and lack of reminders. This leads to missed opportunities for networking, relationship building, and personal connection. Existing messaging platforms do not provide proactive, context-aware nudges or tools to help users maintain meaningful relationships over time.

**Solution:**
This epic delivers an AI-powered assistant that identifies contacts the user has not messaged in over three months, surfaces them in a prioritized list, and enables both manual and automated follow-up messaging. The system leverages context (e.g., recent career or personal highlights) and user preferences (tone, platform, notification triggers) to craft relevant, personalized outreach.

**Impact:**
- Increased user engagement with their network
- Improved relationship maintenance and networking outcomes
- Higher user satisfaction and retention for the platform

## 3. User Personas
- **Busy Professionals:** Want to maintain their network for career growth but lack time to track all connections.
- **Social Networkers:** Value staying in touch with friends and acquaintances across multiple platforms.
- **Sales/Business Development Users:** Need to nurture leads and contacts regularly.

## 4. High-Level User Journeys
- User views a list of contacts not messaged in 3+ months, sorted by time since last message.
- User filters the list by longest/earliest since last message or by platform.
	- User selects a contact to view a summary of their recent highlights (e.g., job change, new project).
	- User can ask the AI agent questions about suggested contacts (e.g., "Why should I message this person?" or "What should I talk to them about?") and receive context-aware answers based on available data and highlights.
	- User chooses to send a manual message or lets the AI generate and send an automatic message, with options to adjust tone and context.
	- User sets preferences for tone, context, and notification triggers (e.g., always follow up on job changes).
	- User receives notifications when a tracked highlight occurs for a contact.

## 5. Business Requirements

**Functional Requirements:**
- Display a list of contacts not messaged in 3+ months
- Filter/sort contacts by time since last message and by platform
- Manual direct messaging to contacts from within the app
- Automatic message generation and sending, with user-configurable tone and context
	- Highlight summary for each contact (career/personal updates since last message)
	- AI-powered Q&A for suggested contacts, allowing users to ask questions about why a contact is suggested and what topics to discuss
- User preferences for tone, context, and notification triggers
- Notification system for tracked highlights (e.g., job changes)
- Platform-specific tone adaptation (e.g., formal for LinkedIn, casual for Instagram)

**Non-Functional Requirements:**
- Data privacy and security for user and contact information
- Integration with multiple messaging platforms (e.g., LinkedIn, Instagram)
- High reliability and uptime for notifications and message delivery
- Accessibility for users with disabilities
- Scalable to support large contact lists

## 6. Success Metrics
- % increase in user-initiated follow-ups to contacts
- User retention and engagement rates
- Number of automatic vs. manual messages sent
- User satisfaction (NPS, feedback)
	- Accuracy of highlight detection, message relevance, and helpfulness of AI Q&A responses

## 7. Out of Scope
- Building a new messaging platform (the epic assumes integration with existing platforms)
- Deep sentiment analysis or emotional intelligence beyond tone/style adaptation
- Automated responses to replies (focus is on initial outreach)
- Group messaging or bulk outreach features

## 8. Business Value
**High** – This epic addresses a common pain point for users across professional and social domains, driving engagement, retention, and platform differentiation. The ability to maintain relationships proactively is a key value-add for users and can lead to increased platform usage and loyalty.
