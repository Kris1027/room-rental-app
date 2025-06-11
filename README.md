# Rental Room App

`live` : <https://room-rental-app-kris1027.vercel.app/>

## Challenges Faced During the Room Rental App

### 1. Database Design and Integration

-  Designing an efficient database schema in Supabase that properly relates users, rooms, and reservations
-  Implementing proper relationships between tables while maintaining data integrity

### 2. Authentication and Authorization

-  Setting up NextAuth with Supabase integration
-  Implementing role-based access control (admin vs regular users)
-  Managing user sessions and protected routes

### 3. Form Handling and Validation

-  Implementing complex form validation using Zod and React-Hook-Form
-  Managing multiple form states for different CRUD operations
-  Implementing date range validation for reservations

### 4. UI/UX Implementation

-  Creating responsive layouts that work across different devices
-  Implementing smooth page transitions using Next-View-Transitions
-  Building an intuitive admin dashboard with multiple management sections
-  Designing user-friendly filters for rooms and reservations

### 5. TypeScript Integration

-  Setting up proper types for all components and functions
-  Managing type definitions for external libraries
-  Ensuring type safety across the application
-  Creating proper interfaces for database models

## Technologies:

-  JavaScript
-  React
-  TypeScript
-  Next.js
-  Tailwind CSS
-  Supabase
-  NextAuth
-  Next-View-Transitions
-  React-Hook-Form
-  Zod

## List to do:

-  [x] Supabase installation and configuration
-  [x] Environment configuration (environment variables)
-  [x] Design the database in Supabase
-  users (id, created_at, email, password, isAdmin, full_name)
-  rooms (id, created_at, name, description, max_capacity, regular_price, discount, image_urls)
-  reservations (id, created_at, user_id, room_id, start_date, end_date, status)
-  [x] Build app layout
-  [x] Build navigation, logo and footer
-  [x] Application deployment (Vercel)
-  [x] Admin Dashboard layout and sidebar
-  [x] Main page of admin dashboard
-  [x] Users management in admin dashboard
-  [x] Rooms management in admin dashboard
-  [x] Reservations management in admin dashboard
-  [x] Authentication (nextAuth)
-  [x] Authorization
-  [x] Edit, Delete and Add New User in admin dashboard
-  [x] Edit, Delete and Add New Room in admin dashboard
-  [x] Edit, Delete and Add New Reservations in admin dashboard
-  [x] Create Reservations by users
-  [x] Messages management in admin dashboard and user panel
-  [x] UI for created reservation and reservation management for users
-  [x] User account panel
-  [x] User settings + back button in account pages
-  [x] Validation (Zod)
-  [x] Form management (React-Hook-Form)
-  [x] Filters in rooms page and user reservations
