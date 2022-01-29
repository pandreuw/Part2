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
  const [DisplayedPersons, setDisplayPersons] = useState([])

  var contactsToShow

  const message = `The name "${newName}" was already added to the phonebook
The field will be erased.`


  useEffect(() => {
    console.log('effect')
    personsService
      .getAll()
      .then(response => {
        console.log('promise fulfilled **getAll**')
        setPersons(response)
        setDisplayPersons(ApplyFilter(Filter, response))
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
          console.log('promise fulfilled **create**')
          setPersons(persons.concat(noteObject))
          setNewName('')
          setNewNumber('')
          setFilter({ enabled: true, filter: '' })
          setDisplayPersons(ApplyFilter(Filter, persons))
        })

    }
  }

  const deleteContact = id => {
    console.log('deleteContact event', id);
    const contact = persons.find(n => n.id === id)
    console.log('contact to delete is ', contact.name)
    personsService
      .deleteContact(id)
      .then(response => {
        console.log('promise fulfilled **deleteContact**')
        setPersons(persons.map(person => person.id !== id ? person : response))
        setDisplayPersons(ApplyFilter(Filter, persons))
        //setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
  }

  const handlePersonsChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter({ enabled: event.target.value !== '' ? true : false, filter: event.target.value })
    setDisplayPersons(ApplyFilter(Filter, persons))
  }


  console.log('contact to show', DisplayedPersons);
  return (
    <div>
      <h2>Phonebook</h2>
      <FilterInput filter={Filter} callOnChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm calladdContact={addContact} callPersonchange={handlePersonsChange} defaultPerson={newName} callNumberchange={handleNumberChange} defaultNumber={newNumber} />
      <h2>Numbers</h2>
      {DisplayedPersons.map(contact =>
        <DisplayContacts
          key={contact.id}
          Person={contact}
          DeletePerson={() => deleteContact(contact.id)} />)}
    </div>
  )
}

export default App