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

  const [ContactToDelete, setContactToDelete] = useState('')

  const message = `The name "${newName}" was already added to the phonebook
The field will be erased.`

  const DeleteContactMessage = `Delete ${ContactToDelete}?`


  useEffect(() => {
    console.log('effect')
    personsService
      .getAll()
      .then(response => {
        console.log('promise fulfilled **getAll**')
        setPersons(response)
        setDisplayPersons(response)
        // setDisplayPersons(ApplyFilter(Filter, response))
      })
  }, [])

  const addContact = (event) => {
    event.preventDefault()
    console.log("Add contact names");
    const OnlyNames = persons.map(onlyname => onlyname.name)
    if (OnlyNames.includes(newName)) {
      const result = window.confirm(`${newName} is already added to phonebook, replace
old number with a new one?`);
      if (result) {
        console.log("Replace old number");
        const noteObject = persons.find(({ name }) => name === newName)
        noteObject.number = newNumber
        console.log(noteObject);
        personsService
          .update(noteObject.id, noteObject)
          .then(returnedPerson => {
            console.log('promise fulfilled **update**')
            setPersons(persons.map(person => person.id !== noteObject.id ? person : returnedPerson))
          }
          )
      }
      console.log("Replace old number Cancelled");
      setNewName('')
      setNewNumber('')
    } else {
      console.log("NOT Duplicated name");
      const noteObject = { name: newName, number: newNumber }

      personsService
        .create(noteObject)
        .then(response => {
          console.log('promise fulfilled **create**')
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
          setFilter({ enabled: true, filter: '' })
          setDisplayPersons(persons.concat(response))
          // setDisplayPersons(ApplyFilter(Filter, persons))
        })

    }
  }

  const deleteContact = id => {

    console.log('deleteContact event id:', id);
    const contactinfo = persons.find(n => n.id === id)
    setContactToDelete(contactinfo.name)
    console.log('contact to delete is ', contactinfo.name)

    const result = window.confirm(`Delete ${contactinfo.name}?`);

    if (result) {
      personsService
        .deleteContact(id)
        .then(response => {
          console.log('promise fulfilled **deleteContact**')

          const findObject = persons.findIndex(x => x.id === id)
          var objectToPass = persons
          var tempData = objectToPass.splice(findObject, 1)
          setNewName('')
          setNewNumber('')
          setFilter({ enabled: false, filter: '' })
          setPersons(objectToPass)
          setDisplayPersons(objectToPass)
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
    // setDisplayPersons(ApplyFilter(Filter, persons))

    if (event.target.value !== '') { setDisplayPersons(persons.filter(filtering => filtering.name.includes(event.target.value))) }
    else { setDisplayPersons(persons) }

  }


  //console.log('contact to show', DisplayedPersons);
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