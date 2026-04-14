# CourseForge

CourseForge is a full-stack Learning Management System built with React, Vite, Node.js, Express, MongoDB, Clerk, Stripe, and Cloudinary. It supports mentors and students, course creation, enrollment, payment processing, and progress tracking.

## Live links

- GitHub repository: https://github.com/K3xhav/CourseForge
- Frontend site: https://courseforge-frontend.vercel.app
- Backend API root: https://courseforge-backend.vercel.app

## Overview

This repository contains two main components:

- `Backend/` — Express.js API server with MongoDB integration
- `Frontend/` — React application built with Vite

The app supports authenticated access for mentors and students, structured course content, and payment-enabled enrollments.

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
   - `CLOUDINARY_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_SECRET_KEY`

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

## Vercel deployment

Deploy the backend and frontend separately:

```bash
cd Backend
vercel --prod
```

```bash
cd ../Frontend
vercel --prod
```

Set the same environment variables in each Vercel project for full runtime functionality.

## Notes

- The frontend site is live and accessible at the public Vercel URL above.
- The backend API is also deployed; it requires valid environment variables on Vercel to operate fully.
- This repository is owned and maintained by K3xhav.

## Contribution

This codebase is managed by the project owner and may be updated to improve functionality, reliability, and deployment configuration.
