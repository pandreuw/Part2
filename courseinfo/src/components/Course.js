import React from 'react'

const Display = ({ text, value, closingtext }) => <div>{text}{value}{closingtext}</div>

const Course = ({ course }) => {
    return (
        <div>
            <h1>{course.name}</h1>
            <ul>
                {course.parts.map(_part => <li key={_part.id}>{_part.name}{" "}{_part.exercises}</li>)}
                <Display 
                    text="total of " 
                    value={
                        course.parts.reduce((sum, parts) => sum + parts.exercises,0)
                                // function(sum, parts)
                                // {
                                //     console.log("hello",sum, parts)
                                //     return sum + parts.exercises
                                // },0)
                    } 
                    closingtext=" exercises"
                />
            </ul>
        </div>
    )
}



// const Header = ({ course }) => {
//     return (
//         <h1>{course.name}</h1>
//     )
// }

// const Total = ({ course }) => {
//     const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
//     return (
//         <p>Number of exercises {sum}</p>
//     )
// }

// const Part = (props) => {
//     return (
//         <p>
//             {props.part.name} {props.part.exercises}
//         </p>
//     )
// }

// const Content = ({ course }) => {
//     return (
//         <div>
//             <Part part={course.parts[0]} />
//             <Part part={course.parts[1]} />
//             <Part part={course.parts[2]} />
//         </div>
//     )
// }



// return (
//     <div>
//         <Header course={course} />
//         <Content course={course} />
//         <Total course={course} />
//     </div>
// )
//   }

export default Course