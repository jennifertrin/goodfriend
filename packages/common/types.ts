// Shared types and utilities for Be A Good Friend

export interface Contact {
  id: string;
  name: string;
  platform: 'linkedin' | 'instagram' | string;
  lastMessaged: string; // ISO date
  highlights: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  platforms: string[];
}

export interface Message {
  id: string;
  contactId: string;
  userId: string;
  content: string;
  sentAt: string; // ISO date
  isAuto: boolean;
}

export interface Highlight {
  id: string;
  contactId: string;
  type: string;
  description: string;
  date: string; // ISO date
}

export interface AIQARequest {
  contactId: string;
  question: string;
}

export interface AIQAResponse {
  answer: string;
  context?: string;
}
