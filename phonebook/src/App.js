import React, { useState } from 'react'
import Contact from './components/Contact'


const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
    { name: 'Gerardo Moreno', number: '99999999' },
    { name: 'Leslie Vega', number: '3333333333' },
    { name: 'Saria Regina Moreno Vega', number: '88888888' },
    { name: 'Elissa Maria Moreno Vega', number: '666666666666' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [personFilter, setpersonFilter] = useState(persons)

  const message = `The name "${newName}" was already added to the phonebook
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
      // Following required to reset the filter and update the list with the new entry
      //unable to add a reduce
      setFilter('')
      setpersonFilter(persons.concat(noteObject))
    }
  }

  const handlePersonsChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    //console.log(event.target.value)
    setFilter(event.target.value)
    applyFilter(event.target.value)
  }

  const applyFilter = (prop) => {
    // const OnlyNames = persons.map(onlyname => onlyname.name)
    // const secondArray = OnlyNames.filter(onlyname => onlyname.includes(prop))
    // console.log("Apply filter", prop);
    // console.log('filtered array', secondArray);
    // from https://stackoverflow.com/questions/2722159/how-to-filter-object-array-based-on-attributes
    var noteObject = persons.filter(filtering => filtering.name.includes(prop));
    // console.log('filtered object',noteObject);
    setpersonFilter(noteObject)
    console.log('filtered object', noteObject);
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter show with <input
          value={newFilter}
          onChange={handleFilterChange}
        />
      </div>
      <h2>Add a new</h2>
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
              onChange={handleNumberChange}
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
          {/* {persons.map(person => { return <Contact key={person.name} contact={person} /> })} */}
          {personFilter.map(person => { return <Contact key={person.name} contact={person} /> })}
        </ul>
      </div>
      {/* <div>debug: {personFilter.length}</div> */}
    </div>
  )
}

export default App