import { NavLink } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/students', label: 'Students' },
  { path: '/courses', label: 'Courses' },
  { path: '/about', label: 'About' },
]

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <h1 className="navbar-brand">
          <span className="navbar-logo">🎓</span> Student Portal
        </h1>
        <nav aria-label="Main navigation">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
