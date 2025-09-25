# Overview

Giannone Foods is a construction/maintenance page for an Italian food company specializing in importing and distributing high-quality frozen fruits. The application is built as a React single-page application with an Express.js backend, featuring a playful construction theme with Italian branding elements. The site displays a bilingual (Portuguese/English) "under construction" message while maintaining the company's professional identity through careful design choices inspired by the Italian flag colors and food industry branding.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool and development server
- **Routing**: Wouter for lightweight client-side routing with a simple home page and 404 fallback
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design system featuring Italian flag-inspired colors (forest green, warm white, tomato red) and construction theme elements
- **State Management**: TanStack React Query for server state management and caching
- **Typography**: Google Fonts integration with Inter for body text and Poppins for headings

## Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution in development mode
- **Build System**: ESBuild for production bundling with external package handling
- **Static Assets**: Vite handles asset processing and serving in development, with build output to dist/public

## Data Storage Solutions
- **Primary**: In-memory storage (MemStorage class) for development and simple deployments
- **Database Ready**: Drizzle ORM configured for PostgreSQL with user schema defined
- **Migration Support**: Drizzle Kit for database migrations and schema management
- **Session Storage**: Connect-pg-simple for PostgreSQL session storage when database is available

## Authentication and Authorization
- **Schema**: User table with username/password fields using UUID primary keys
- **Validation**: Zod schema validation integrated with Drizzle ORM
- **Session Management**: Express session handling with PostgreSQL store capability
- **Storage Interface**: Abstracted IStorage interface allows switching between memory and database storage

## External Dependencies
- **Deployment Platform**: EasyPanel with Nixpacks for containerized deployment
- **Font Services**: Google Fonts API for Inter and Poppins font families
- **Asset Management**: Vite asset pipeline with alias resolution for components, shared modules, and assets
- **Development Tools**: Replit integration for development environment with cartographer and runtime error overlay
- **UI Libraries**: Extensive Radix UI ecosystem for accessible component primitives
- **Utility Libraries**: Class-variance-authority for component variants, clsx/tailwind-merge for conditional styling