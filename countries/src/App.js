import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ApplyFilter, FilterInput } from './components/ApplyFilter'
import DisplayCountries from './components/DisplayCountries'


const App = () => {

  const [countries, setCountries] = useState([])
  const [Filter, setFilter] = useState({ enabled: true, filter: '' })

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const buttonClicked = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  const handleFilterChange = (event) => {
    setFilter({ enabled: event.target.value !== '' ? true : false, filter: event.target.value })
  }
console.log('filtering');
  var countriesToShow = ApplyFilter(Filter, countries)
  //console.clear()
  // countriesToShow = countriesToShow.length>10 ? [] : countriesToShow;
  console.log('filtered countries', countriesToShow);
  console.log(countriesToShow.length);
  // console.log(countries.length);

  return (

    <div>
      <FilterInput text="Find countries" filter={Filter} callOnChange={handleFilterChange} />
      <DisplayCountries key={countriesToShow.id} CountriesList={countriesToShow} callOnChange={buttonClicked} />
    </div>

  )
}

export default App;
