import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react'
import Country from './components/Country';
import Filter from './components/Filter';

function App() {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')
  
  useEffect(() => {
    console.log('effect');
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response.data);
        setCountries(response.data);
      })
  }, [])
  console.log('got', countries.length, 'nations');


  const countriesToShow = newFilter === ''
    ? countries
    : countries.filter(country => country.name.official.toLowerCase().includes(newFilter.toLowerCase()))
  
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
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
        {countriesToShow.map(country => (<div key={country.name.official}>{country.name.official}</div>))}
      </div>
      );
  }

  
}

export default App;
