import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react'
import Persons from './components/Persons';
import Form from './components/Form';
import Filter from './components/Filter';
import personService from './services/phonebook';

const App = () => {
  const [people, setPeople] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect');
    personService
      .getAll()
      .then(initPeople => {
        console.log('got');
        setPeople(initPeople)
        console.log(initPeople);
      })
      .catch(e => {
        console.log('FAIL', e);
      })
  }, [])

  const peopleToShow = newFilter === ''
      ? people
      : people.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const handleAddPerson = (event) => {
    event.preventDefault();
    console.log(newName);
    console.log(people);

    if (typeof people.find((person) => person.name === newName) !== 'undefined') {
      // console.log();
      // alert(`${newName} is already added in the Phonebook!`)
      // setNewName('')
      // setNewNumber('')
      handleUpdateNumber(people[people.findIndex((person) => person.name === newName)].id)
    }
    else {
      const newPersonObj = {
        name: newName,
        number: newNumber
      }
  
      personService
        .create(newPersonObj)
        .then(returnedPerson => {
          setPeople(people.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const deleteEntryOf = id => {
    if (window.confirm(
      `Do you wanna delete ${people[id - 1].name}?`
    )) {
      personService
        .remove(id)
        .then(() => {
          console.log('deleted entry');
          personService
            .getAll()
            .then(initPeople => {
              setPeople(initPeople)
            })
        })
        .catch(e => {
          console.log('delete FAIL', e);
        })
    }
  } 

  const handleUpdateNumber = id => {
    if (window.confirm(`Do you wanna update new number to ${peopleToShow}?`)) {
      const updatedPerson = {
        name: newName,
        number: newNumber
      }
      personService
        .update(id, updatedPerson)
        .then(returnedPerson => {
          setPeople(peopleToShow.map(p => p.id !== id ? p : updatedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        newFilter={newFilter}
        handleFilterChange={handleFilterChange}>
      </Filter>

      <Form 
        newName={newName}
        newNumber={newNumber}
        handleAddPerson={handleAddPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}>
      </Form>
      
      <h2>Numbers</h2>
      <Persons peopleToShow={peopleToShow} handleDelete={deleteEntryOf}></Persons>
    </div>
  )
}

export default App