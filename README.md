# CourseForge

CourseForge is a full-stack Learning Management System designed for mentors and students. It includes course creation, lecture management, student enrollment, payment processing, and progress tracking.

## Overview

This repository contains two main components:

- `Backend/` — Express.js API server with MongoDB integration
- `Frontend/` — React application built with Vite

The application supports authenticated access for mentors and students, organized course content, payment handling, and course progress monitoring.

## Features

- Role-based access for mentors and students
- Mentor dashboard for creating courses, chapters, and lectures
- Student course enrollment and progress tracking
- Payment integration for paid courses
- Secure authentication and authorization
- Video lecture playback with preview support
- Responsive frontend user interface

## Technology Stack

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Mongoose
- Authentication: Clerk
- Payments: Stripe
- Media: Cloudinary
- File uploads: Multer

## Repository Structure

- `Backend/`
  - `server.js` — backend entry point
  - `controllers/` — request handlers
  - `models/` — database schemas
  - `routes/` — API routes
  - `middlewares/` — authentication and utilities
  - `config/` — service configuration
- `Frontend/`
  - `src/` — React application source code
  - `components/` — reusable UI components
  - `pages/` — application pages and views
  - `context/` — application state context
- `README.md` — project documentation

## Setup

### Backend

1. Open a terminal and navigate to the backend folder:

   ```bash
   cd Backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with the required environment variables:
   - `MONGO_URI`
   - `STRIPE_SECRET_KEY`
   - `CLERK_SECRET_KEY`
   - `CLERK_PUBLISHABLE_KEY`
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`

4. Start the backend server:
   ```bash
   npm run server
   ```

### Frontend

1. Open a separate terminal and navigate to the frontend folder:

   ```bash
   cd Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with the required environment variables:
   - `VITE_BACKEND_URL`
   - `VITE_CLERK_PUBLISHABLE_KEY`

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Deployment

This project can be deployed to Vercel as two separate projects:

- `Backend/` for the API server
- `Frontend/` for the React application

To deploy with Vercel, install the CLI and log in to your Vercel account:

```bash
npm install -g vercel
vercel login
```

Then deploy each folder individually:

```bash
cd Backend
vercel --prod
```

```bash
cd ../Frontend
vercel --prod
```

If you deploy to Vercel, configure the same environment variables in your Vercel project settings.

## Notes

- Confirm that the backend server is running before using the frontend.
- Update the environment variables to match your configured services.
- This repository is maintained personally and is now owned and managed by me.

## Contribution

The repository is intended for active development and improvement. Any updates should follow the current project structure and configuration patterns used in the codebase.
