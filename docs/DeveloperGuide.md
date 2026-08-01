# Developer Guide

> **Status: Coming in Milestone 2**  
> This guide will cover the complete local development setup for ResearchForge once the tech stack is finalized and the first runnable code exists.

---

## Current State

ResearchForge is in Milestone 0 (repository setup) and Milestone 1 (architecture finalization). No runnable code exists yet.

This document is a placeholder that defines the structure and scope of the future Developer Guide. It will be completed as part of the **M1 — Architecture & Tech Stack Finalization** milestone.

If you arrived here looking for setup instructions today, see [docs/GettingStarted.md](GettingStarted.md) for what you can do right now.

---

## What This Guide Will Cover (Planned)

Once implementation begins, this document will include:

### 1. Prerequisites

- Required software and versions (Node.js, Python, Docker, etc.)
- Recommended editor extensions
- Platform-specific setup notes (macOS, Windows, Linux)

### 2. Initial Setup

- Cloning and forking the repository
- Installing dependencies for all services
- Environment configuration (`.env` setup, required API keys)
- Running the project locally

### 3. Running the Services

- Starting the frontend development server
- Starting the backend API server
- Starting AI services
- Starting the database (Docker Compose)
- Verifying everything is working end-to-end

### 4. Development Workflow

- How to make changes and see them reflected
- Hot reload / live reload behavior
- Debugging tips per service

### 5. Running Tests

- Unit test setup and commands
- Integration test setup and commands
- How to write new tests
- Test coverage expectations

### 6. Common Tasks

- Adding a new API endpoint
- Adding a new UI component
- Adding a new AI service function
- Running database migrations

### 7. Troubleshooting

- Common setup errors and fixes
- How to reset your local environment
- Where to ask for help

---

## Contributing to This Document

The Developer Guide will be one of the most important documents in the repository once implementation begins. If you want to help write it:

1. Watch the repository for Milestone 1 progress
2. Open an issue using the **Documentation Improvement** template when you have specific suggestions
3. Once the tech stack is confirmed, volunteer to write the setup guide for your platform

---

*See also: [GettingStarted.md](GettingStarted.md) · [Architecture.md](Architecture.md) · [TechStack.md](TechStack.md)*
