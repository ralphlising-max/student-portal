import './StudentCard.css'

function StudentCard({ name, studentNumber, yearLevel, section, program, email }) {
  return (
    <article className="student-card">
      <div className="student-avatar" aria-hidden="true">
        {name.charAt(0)}
      </div>
      <h3 className="student-name">{name}</h3>
      <p className="student-number">Student No.: {studentNumber}</p>
      <p className="student-info">
        Year {yearLevel} – {section}
      </p>
      <p className="student-info">{program}</p>
      <a className="student-email" href={`mailto:${email}`}>
        {email}
      </a>
    </article>
  )
}

export default StudentCard
