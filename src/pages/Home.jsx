import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="page">
      <div className="hero">
        <h2 className="hero-title">Welcome to the Student Information Portal</h2>
        <p className="hero-text">
          Your one-stop hub for student profiles and course offerings of the
          College of Information Technology, Cavite State University.
        </p>
        <div className="hero-actions">
          <Link to="/students" className="btn btn-primary">
            View Students
          </Link>
          <Link to="/courses" className="btn btn-secondary">
            Browse Courses
          </Link>
        </div>
      </div>

      <div className="quick-links">
        <div className="quick-card">
          <h3>👨‍🎓 Students</h3>
          <p>Meet the enrolled students and view their basic information.</p>
          <Link to="/students">Go to Students →</Link>
        </div>
        <div className="quick-card">
          <h3>📚 Courses</h3>
          <p>Explore the course offerings for the current semester.</p>
          <Link to="/courses">Go to Courses →</Link>
        </div>
        <div className="quick-card">
          <h3>ℹ️ About</h3>
          <p>Learn more about this portal and the developer behind it.</p>
          <Link to="/about">Go to About →</Link>
        </div>
      </div>
    </section>
  )
}

export default Home
