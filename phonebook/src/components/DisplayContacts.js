import React from 'react'

const DisplayContacts = ({ Person, DeletePerson }) => {

    return (
            <div>
                {Person.name} {Person.number} <button onClick={DeletePerson}>{'Delete'}</button>
            </div>
    )
}

export default DisplayContacts