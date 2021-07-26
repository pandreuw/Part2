import React, { useState } from 'react'
import Contact from './components/Contact'


const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '416-123-4567'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const message =`The name "${newName}" was already added to the phonebook
The field will be erased.`
  const addContact = (event) => {
    event.preventDefault()
    console.log("Add contact names");
    const OnlyNames = persons.map(onlyname => onlyname.name)
    if (OnlyNames.includes(newName)) {
      console.log("Duplicated name");
      window.alert(message);
      setNewName('')
      setNewNumber('')
    } else {
      console.log("NOT Duplicated name");
      const noteObject = { name: newName, number: newNumber }
      setPersons(persons.concat(noteObject))
      setNewName('')
      setNewNumber('')
    }

  }

  const handlePersonsChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const hnadelNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <form onSubmit={addContact}>
          <div>
            name: <input
              value={newName}
              onChange={handlePersonsChange}
            />
          </div>
          <div>
            number: <input
              value={newNumber}
              onChange={hnadelNumberChange}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map(person => <Contact key={person.name} contact={person} />)}
        </ul>
      </div>
      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App