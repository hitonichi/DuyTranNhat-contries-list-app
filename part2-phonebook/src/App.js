import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Person from './components/Person';

const App = () => {
  const [people, setPeople] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
            placeholder='new person...'></input>
        </div>
        <div>
          number:
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
        {people.map(person => <Person key={person.name} person={person}></Person>)}
      </ul>
    </div>
  )
}

export default App