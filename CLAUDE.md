# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**The Rings at Fullmer Legacy Center** (www.getintherings.com) - a privacy-first youth development PWA with quest tracking, portfolio management, badge systems, and Cyclone visualization. Built on Supabase with Next.js.

### Core Philosophy
- **Agency Over Surveillance**: All data collection is user-initiated (Tap In, Loot Drop)
- **HOMAGO Flow**: Hanging Out → Messing Around → Geeking Out
- **Cyberpunk HUD Aesthetic**: Dark mode, high contrast, game-like UI

### Terminology
- Users = "Champions"
- Classes = "Quests"
- Grades = "Badges"
- Homework = "Artifacts"
- Attendance = "Tap In"
- Uploads = "Loot Drops"

## Common Commands

### Database Setup
```bash
# Install Supabase CLI
npm install -g supabase

# Link to project
supabase link --project-ref afwcgpjnyvknnuadsdsz

# Apply migrations
supabase db push

# Reset database with seed data
supabase db reset

# Create new migration
supabase migration new migration_name
```

### Environment Setup
```bash
cp .env.example .env.local
```

## Architecture

### Database Schema (Supabase/PostgreSQL)

**Core Domain Model:**
- **Sites**: Multi-tenant foundation for replication to multiple cities
- **Rings**: 9 domains (Self, Body, Brain, Bubble, Scene, Neighborhood, Community, World, Ether)
- **Pillars**: 4 program pillars (Wellness, TechNest, Creative Studio, Civic Lab)
- **Quests**: Programmable curriculum units with HOMAGO structure (Hanging Out → Messing Around → Geeking Out)

**User System:**
- `user_profiles` extends Supabase auth.users
- `site_memberships` supports multi-site participation with roles (youth, staff, mentor, partner, parent_guardian, admin)

**Key Data Flows:**
1. Quest Flow: `quests` → `quest_versions` (HOMAGO config) → `quest_participation`
2. Portfolio Flow: `portfolios` → `artifacts` (linked to quests/rings) → `endorsements`
3. Ring Activation: Computed from `quest_participation`, `user_badges`, `service_logs` → `ring_activation_snapshots`

### File Structure
- `supabase/migrations/` - Database schema migrations
- `supabase/seed.sql` - Seed data for initial setup
- `docs/` - Documentation including database schema and environment setup

## Key Concepts

- **HOMAGO**: Progressive engagement model (Hanging Out, Messing Around, Geeking Out)
- **Champion's Portfolio**: Youth portfolios with mission statements, values, and artifacts
- **Ring Activation/Cyclone**: Visualization of progress across the 9 rings
- **Multi-tenancy**: All site-specific data isolated by `site_id`

## Environment Variables

Required categories: Supabase, Stripe, Google APIs (Places, YouTube)
Optional: OpenWeather, OpenAI/Gemini, ElevenLabs, SendGrid, Unsplash

See `README.env.md` for complete documentation.
