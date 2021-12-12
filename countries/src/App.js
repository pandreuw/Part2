import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ApplyFilter, FilterInput } from './components/ApplyFilter'
import { PrintCountryData, PrintCountryList} from './components/DisplayCountries'
import CountryForm from './components/CountryForm'

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
  

  const ShowSingleCountry = (event) => {
    event.preventDefault()
    console.log('ShowSingleCountry', event.target.value)
    setFilter({ enabled: true, filter: event.target.value })
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

  if (countriesToShow.length > 10) {
    return (
      <div>
        <ul>
          <FilterInput text="Find countries" filter={Filter} callOnChange={handleFilterChange} />
          Too many matches, specify another filter.
        </ul>
      </div>
    )
  }
  else if (countriesToShow.length === 1) {
    return (
      <div>
        <ul>
          <FilterInput text="Find countries" filter={Filter} callOnChange={handleFilterChange} />
          {countriesToShow.map(country => { return <PrintCountryData key={country.name.common} _country={country} /> })}
          {/* {CountriesList.map(country => { return <PrintCountryData _country={country} /> })} */}
        </ul>
      </div>
    )
  }
  else {
    // console.log('displaycountries else bracket');
    return (
      <div>
        <ul>
          <FilterInput text="Find countries" filter={Filter} callOnChange={handleFilterChange} />
          {countriesToShow.map(country => { return <CountryForm key={country.name.common} CountryName={country.name.common} callShowCountry={ShowSingleCountry} /> })}
        </ul>
      </div>
    )
  }

}

export default App;
