# KotobaQuest

KotobaQuest (ことばクエスト) is a language learning app built using Next.js, designed to help Japanese speakers build vocabulary in a foreign language through interactive lessons and exercises.

# Live demo

[Check out the live demo here](https://www.kotobaquest.jp)

# Features

- Retro 8-bit pixel art design
- English, German and French courses that can be switched between at any time
- Interactive language lessons
- Progress tracking
- Leaderboards
- Free or subscription plan
- User-friendly interface

# Technologies Used

- **React** - JavaScript library for building user interfaces
- **Next.js** - React framework for server-rendered applications
- **TypeScript** - Typed superset of JavaScript
- **TailwindCSS** - Styling the user interface
- **Vercel** - Platform for deploying and hosting web applications

# Setup Guide

## Prerequisites
- Git
- Node.js

## Setup Steps

1. **Clone the Repository**
   ```
   git clone https://github.com/hummus-erectus/lingo.git
   cd [your-project-directory]
   ```

2. **Configure Environment Variables**
   Create a `.env` file in the root directory with the following content:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   DATABASE_URL="postgresql://user:password@host:port/lingo?sslmode=require"
   STRIPE_API_KEY=your_stripe_secret_key
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   ```

3. **Obtain Authentication Keys**
   - Clerk: Visit the Clerk dashboard to get your publishable and secret keys.
   - Database: Use your Neon or PostgreSQL database credentials to construct the DATABASE_URL.
   - Stripe: Log into your Stripe account to retrieve the API key and webhook secret.
   - Clerk Admin IDs: Find these in your Clerk account settings.

4. **Install Dependencies**
   ```
   npm install --legacy-peer-deps
   ```
   or
   ```
   yarn install --legacy-peer-deps
   ```

5. **Seed the Database**
   Run the following command to populate your database with initial data:
   ```
   npm run db:prod
   ```

6. **Verify Database Seeding**
   Check your database to ensure the challenges data has been successfully added.

7. **Launch the Application**
   Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

# Security Note
Always keep your API keys and sensitive configuration data private. Never commit the `.env` file to version control or share it publicly.

# Troubleshooting
If you encounter any issues during setup, please refer to our FAQ section or open an issue in the repository.

# Contributing

Feel free to contribute to the project by opening a pull request or submitting issues.

# License

This project is licensed under the MIT License.
