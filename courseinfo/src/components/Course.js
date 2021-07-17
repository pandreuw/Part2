import React from 'react'

const Display = ({ text, value, closingtext }) => <b>{text}{value}{closingtext}</b>

const Content = ({ course }) => {

    // This logic worked good for debuging code
    // console.log("course object", course);
    // console.log("course name", course.name);
    // console.log("course id", course.id);
    // course.parts.forEach(element => {
    //     console.log("parts", element.id, element);
    // });

    return (
        <>
            <h2>{course.name}</h2>
            <ul>
                {course.parts.map(_part => <li key={_part.id}>{_part.name}{" "}{_part.exercises}</li>)}
                <Display text="total of " value={course.parts.reduce((sum, parts) => sum + parts.exercises, 0)} closingtext=" exercises" />
            </ul>
        </>
    )
}


const Course = ({ courses }) => {

    return (
        <div>
            <h1>Web Development Curriculum</h1>
            {courses.map(course => <Content key={course.id} course={course} />)}
        </div>
    )
}


export default Course