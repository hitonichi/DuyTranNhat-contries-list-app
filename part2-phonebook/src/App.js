import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Person from './components/Person';

const App = () => {
  const peopleList = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]
  const [people, setPeople] = useState(peopleList) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const peopleToShow = newFilter === ''
      ? peopleList
      : peopleList.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const handleAddPerson = (event) => {
    event.preventDefault();
    console.log('btn clicked', event.target);
    console.log(newName);
    console.log(people);

    if (typeof people.find((person) => person.name === newName) !== 'undefined') {
      alert(`${newName} is already added in the Phonebook!`)
      setNewName('')
      setNewNumber('')
    }
    else {
      const newPersonObj = {
        name: newName,
        number: newNumber
      }
  
      setPeople(people.concat(newPersonObj))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    // console.log(event.target.value);
    setNewFilter(event.target.value)
    // console.log(newFilter);
    // if (newFilter !== '') {
    //   const peopleToShow = peopleList.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
    //   console.log(peopleToShow);
    //   setPeople(peopleToShow)
    // }

    // console.log(newFilter);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <input
        value={newFilter}
        onChange={handleFilterChange}
        placeholder='find your contacts'></input>
      <h2>Add new Contacts</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
            placeholder='new person...'></input>
        </div>
        <div>
          Contacts:
          <input
            value={newNumber}
            onChange={handleNumberChange}
            placeholder='new phone number...'></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {peopleToShow.map(person => <Person key={person.name} person={person}></Person>)}
      </ul>
    </div>
  )
}

export default App