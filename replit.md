# Overview

This is a modern portfolio website built for Akshay S, a Computer Science Engineering student specializing in data analytics and software development. The application showcases personal information, skills, projects, education, and provides contact functionality with resume download capabilities. It's built as a full-stack web application using React for the frontend and Express.js for the backend.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Design System**: Implements a consistent design system with reusable components, smooth scrolling navigation, and responsive design

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful API endpoints for contact form submission and resume handling
- **Development Setup**: Hot reload with Vite integration in development mode
- **File Serving**: Static file serving for resume downloads with proper error handling
- **Request Logging**: Custom middleware for API request logging and performance monitoring

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Centralized schema definitions in shared directory for type consistency
- **Migrations**: Drizzle-kit for database schema migrations
- **Development Storage**: In-memory storage implementation for development/testing
- **Contact Messages**: Structured storage for contact form submissions with UUID primary keys

## Authentication and Authorization
- **Current State**: No authentication system implemented
- **Session Handling**: Basic session configuration present but not actively used
- **Contact Form**: Open submission without authentication requirements

## External Service Integrations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Font Loading**: Google Fonts integration for typography
- **Development Tools**: Replit-specific development banner and error handling
- **Styling**: PostCSS with Autoprefixer for cross-browser compatibility

The architecture follows a monorepo structure with clear separation between client, server, and shared code. The frontend emphasizes performance with lazy loading and optimized builds, while the backend provides a simple but extensible API structure. The design system is comprehensive with dark/light theme support and full responsive capabilities.

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Drizzle ORM**: Type-safe database access and schema management
- **Connection Pooling**: Built-in connection management through Neon's serverless driver

## UI and Styling
- **Radix UI**: Headless component primitives for accessible UI components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Web font service for custom typography (Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter)

## Development Tools
- **Vite**: Build tool and development server with HMR
- **TypeScript**: Type safety across the entire application
- **React Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation library

## Replit Integration
- **Vite Plugin Runtime Error Modal**: Development error handling
- **Cartographer Plugin**: Replit-specific development tools
- **Development Banner**: Replit environment detection and branding

## Production Services
- **Express.js**: Web server framework
- **Node.js**: Runtime environment
- **ESBuild**: JavaScript bundler for production builds