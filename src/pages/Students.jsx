import StudentCard from '../components/StudentCard'

const students = [
  {
    name: 'John Ian Estampa',
    studentNumber: '2022-00145',
    yearLevel: '3rd Year',
    section: 'BSIT 3-1',
    program: 'BS Information Technology',
    email: 'johnian.estampa@cvsu.edu.ph',
  },
  {
    name: 'Maria Clara Santos',
    studentNumber: '2022-00278',
    yearLevel: '2nd Year',
    section: 'BSIT 2-4',
    program: 'BS Information Technology',
    email: 'mariaclara.santos@cvsu.edu.ph',
  },
  {
    name: 'Angelo Dela Cruz',
    studentNumber: '2023-00311',
    yearLevel: '2nd Year',
    section: 'BSCS 2-1',
    program: 'BS Computer Science',
    email: 'angelo.delacruz@cvsu.edu.ph',
  },
  {
    name: 'Sophia Marie Reyes',
    studentNumber: '2021-00456',
    yearLevel: '4th Year',
    section: 'BSIT 4-2',
    program: 'BS Information Technology',
    email: 'sophiamarie.reyes@cvsu.edu.ph',
  },
]

function Students() {
  return (
    <section className="page">
      <h2 className="page-title">Students</h2>
      <p className="page-subtitle">
        List of enrolled students in the college. Total:{' '}
        <strong>{students.length}</strong>
      </p>
      <div className="card-grid">
        {students.map((student) => (
          <StudentCard key={student.studentNumber} {...student} />
        ))}
      </div>
    </section>
  )
}

export default Students
