import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ApplyFilter, FilterInput } from './components/ApplyFilter'
import PersonForm from './components/PersonForm'
import DisplayContacts from './components/DisplayContacts'

const App = () => {

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [Filter, setFilter] = useState({ enabled: true, filter: '' })

  const message = `The name "${newName}" was already added to the phonebook
The field will be erased.`

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

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
      // setPersons(persons.concat(noteObject))
      axios
        .post('http://localhost:3001/persons', noteObject)
        .then(response => {
          setPersons(persons.concat(noteObject))
          // setNewNote('')
          setNewName('')
          setNewNumber('')
          // Following required to reset the filter and update the list with the new entry
          //unable to add a reduce
          setFilter({ enabled: true, filter: '' })
        })

    }
  }

  const handlePersonsChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter({ enabled: event.target.value !== '' ? true : false, filter: event.target.value })
  }

  const contactsToShow = ApplyFilter(Filter, persons)
  //console.log('contacts to show', contactsToShow);

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterInput filter={Filter} callOnChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm calladdContact={addContact} callPersonchange={handlePersonsChange} defaultPerson={newName} callNumberchange={handleNumberChange} defaultNumber={newNumber} />
      <h2>Numbers</h2>
      <DisplayContacts ContactList={contactsToShow} />
    </div>
  )
}

export default App