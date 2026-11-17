# Student Information Portal

A single-page application (SPA) built with **React** and **React Router** for
**DCIT26: Application Development and Emerging Technologies** —
Laboratory Exercise 2: React Routing and Reusable JSX.

Cavite State University — Don Severino de las Alas Campus, Indang, Cavite

## Features

- **Reusable Navbar** — navigates to Home, Students, Courses, and About pages
  with an active-link highlight
- **Reusable StudentCard component** — rendered multiple times on the Students
  page
- **Reusable CourseCard component** — rendered multiple times on the Courses
  page
- **Client-side routing** — React Router maps each page to its URL path
  (`/`, `/students`, `/courses`, `/about`)
- **Responsive styling** — card grid layout, sticky navbar, hover effects

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.jsx / Navbar.css
│   ├── StudentCard.jsx / StudentCard.css
│   └── CourseCard.jsx / CourseCard.css
├── pages/            # Page components
│   ├── Home.jsx
│   ├── Students.jsx
│   ├── Courses.jsx
│   └── About.jsx
├── App.jsx           # Route configuration
└── main.jsx          # BrowserRouter entry point
```

## Getting Started

```bash
npm install     # install dependencies
npm run dev     # start the dev server at http://localhost:5173
```

## Technologies Used

- [React](https://react.dev) — UI library
- [React Router](https://reactrouter.com) — client-side routing
- [Vite](https://vite.dev) — build tool and dev server

## Developer

- **John Ian Estampa**
- DCIT26 — Application Development and Emerging Technologies
