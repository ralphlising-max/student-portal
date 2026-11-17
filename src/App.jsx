import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Students from './pages/Students'
import Courses from './pages/Courses'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          {/* Fallback: unknown URLs go back to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Student Information Portal · Cavite State
          University · DCIT26 Laboratory Exercise 2
        </p>
      </footer>
    </div>
  )
}

export default App
