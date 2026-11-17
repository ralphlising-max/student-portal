import './CourseCard.css'

function CourseCard({ code, title, description, units, instructor }) {
  return (
    <article className="course-card">
      <span className="course-badge">{units} units</span>
      <h3 className="course-code">{code}</h3>
      <h4 className="course-title">{title}</h4>
      <p className="course-desc">{description}</p>
      <p className="course-instructor">
        <strong>Instructor:</strong> {instructor}
      </p>
    </article>
  )
}

export default CourseCard
