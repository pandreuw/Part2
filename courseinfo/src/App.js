import React from 'react'
import Course from './components/Course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }, 
    {
      name: 'Elissa',
      id: 3,
      parts: [
        {
          name: 'Maria',
          exercises: 1,
          id: 1
        },
        {
          name: 'Moreno',
          exercises: 2,
          id: 2
        },
        {
          name: 'Vega',
          exercises: 3,
          id: 3
        }
      ]
    },
    {
      name: 'Saria',
      id: 4,
      parts: [
        {
          name: 'Regina',
          exercises: 1,
          id: 1
        },
        {
          name: 'Moreno',
          exercises: 2,
          id: 2
        },
        {
          name: 'Vega',
          exercises: 3,
          id: 3
        }
      ]
    }

  ]


  return <Course courses={courses} />

  }

export default App;
