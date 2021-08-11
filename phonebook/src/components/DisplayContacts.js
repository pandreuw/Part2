import React from 'react'
import Contact from './Contact'

const DisplayContacts = ({ ContactList }) => {

    return (
        <div>
            <ul>
                {/* {persons.map(person => { return <Contact key={person.name} contact={person} /> })} */}
                {ContactList.map(person => { return <Contact key={person.name} contact={person} /> })}
            </ul>
        </div>
    )
}

export default DisplayContacts