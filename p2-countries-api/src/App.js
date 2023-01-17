import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react'
import Country from './components/Country';
import Filter from './components/Filter';

function App() {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')
  
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
  }, [])


  const countriesToShow = newFilter === ''
    ? countries
    : countries.filter(country => country.name.official.toLowerCase().includes(newFilter.toLowerCase()))
  
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleBtnClick = (event) => {
    console.log(event.target);
    setNewFilter(event.target.id)
  }

  if (countriesToShow.length > 10) {
    return (
      <div>
        <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}></Filter>
        <div>Too many matches, specify another filter.</div> 
      </div>
    );
  }
  else if (countriesToShow.length === 1) {
    return (
      <div>
        <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}></Filter>
        <Country country={countriesToShow[0]}></Country>
      </div>
      );
    }
    else {
      return (
        <div>
        <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}></Filter>
        {countriesToShow.map(country => (
          <div key={country.name.official}>
            <div>{country.name.official}</div>
            <button id={country.name.official} onClick={(event) => handleBtnClick(event)}>Show</button>
            <br></br>
          </div>
          ))}
      </div>
      );
  }

  
}

export default App;
