import React from 'react'
import Course from './components/Course'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Programming a Server with NodeJS and Express', 
        exercises: 2,
        id: 4
      },
      {
        name: 'Testing express server', 
        exercises: 5,
        id: 5
      }
    ]
  }


  return <Course course={course} />

  }

export default App;
