function About() {
  return (
    <section className="page">
      <h2 className="page-title">About</h2>

      <div className="about-section">
        <h3>About this Portal</h3>
        <p>
          The Student Information Portal is a single-page application built
          with <strong>React</strong> and <strong>React Router</strong>. It
          demonstrates component reusability through a shared{' '}
          <code>Navbar</code>, <code>StudentCard</code>, and{' '}
          <code>CourseCard</code> component, with client-side routing for the
          Home, Students, Courses, and About pages.
        </p>
      </div>

      <div className="about-section">
        <h3>About the University</h3>
        <p>
          Cavite State University (CvSU) — Don Severino de las Alas Campus,
          Indang, Cavite — is the premier state university in the Province of
          Cavite, offering quality education in agriculture, engineering, and
          information technology.
        </p>
      </div>

      <div className="about-section">
        <h3>Developer</h3>
        <p>
          <strong>John Ian Estampa</strong>
          <br />
          BS Information Technology
          <br />
          DCIT26: Application Development and Emerging Technologies
          <br />
          Laboratory Exercise 2 — React Routing and Reusable JSX
        </p>
      </div>
    </section>
  )
}

export default About
