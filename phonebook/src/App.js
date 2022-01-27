import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ApplyFilter, FilterInput } from './components/ApplyFilter'
import PersonForm from './components/PersonForm'
import DisplayContacts from './components/DisplayContacts'
import personsService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [Filter, setFilter] = useState({ enabled: true, filter: '' })

  const message = `The name "${newName}" was already added to the phonebook
The field will be erased.`


  useEffect(() => {
    console.log('effect')
    personsService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
      })
  }, [])

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

      personsService
        .create(noteObject)
        .then(response => {
          setPersons(persons.concat(noteObject))
          setNewName('')
          setNewNumber('')
          setFilter({ enabled: true, filter: '' })
        })

    }
  }

  const handlePersonsChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter({ enabled: event.target.value !== '' ? true : false, filter: event.target.value })
  }

  const contactsToShow = ApplyFilter(Filter, persons)

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