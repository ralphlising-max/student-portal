import CourseCard from '../components/CourseCard'

const courses = [
  {
    code: 'DCIT 21',
    title: 'Computer Programming 1',
    description:
      'Introduction to problem solving and algorithm design using a high-level programming language.',
    units: 3,
    instructor: 'Marlo N. Ortiz',
  },
  {
    code: 'DCIT 22',
    title: 'Computer Programming 2',
    description:
      'Advanced programming concepts including object-oriented design and data structures.',
    units: 3,
    instructor: 'Marlo N. Ortiz',
  },
  {
    code: 'DCIT 23',
    title: 'Data Structures and Algorithms',
    description:
      'Study of fundamental data structures and algorithm analysis for efficient problem solving.',
    units: 3,
    instructor: 'R. Villanueva',
  },
  {
    code: 'DCIT 26',
    title: 'Application Development & Emerging Technologies',
    description:
      'Development of web applications using modern frameworks, APIs, and emerging technologies.',
    units: 3,
    instructor: 'Marlo N. Ortiz',
  },
  {
    code: 'GNED 01',
    title: 'Mathematics in the Modern World',
    description:
      'Patterns, reasoning, and problem solving applied to real-life situations and decision making.',
    units: 3,
    instructor: 'L. Magpantay',
  },
  {
    code: 'ITEE 31',
    title: 'Discrete Structures',
    description:
      'Logic, sets, relations, graphs, and combinatorics as foundations of computing.',
    units: 3,
    instructor: 'J. Hernandez',
  },
]

function Courses() {
  return (
    <section className="page">
      <h2 className="page-title">Courses</h2>
      <p className="page-subtitle">
        Course offerings for the current semester. Total:{' '}
        <strong>{courses.length}</strong>
      </p>
      <div className="card-grid">
        {courses.map((course) => (
          <CourseCard key={course.code} {...course} />
        ))}
      </div>
    </section>
  )
}

export default Courses
