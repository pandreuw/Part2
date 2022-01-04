import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ApplyFilter, FilterInput } from './components/ApplyFilter'
import { PrintCountryData } from './components/DisplayCountries'
import CountryForm from './components/CountryForm'
import { DisplayWeather } from './components/DisplayWeather'

const App = () => {

  //state
  const [countries, setCountries] = useState([])
  const [Filter, setFilter] = useState({ enabled: true, filter: '' })
  // const [lat, setLat] = useState([]);
  // const [long, setLong] = useState([]);
  const [state, setState] = useState('Cumpas')
  const [wdata, setWData] = useState([]);

  var countriesToShow
  // API KEY AND URL
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  // hook
  const hook = () => {
    // console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        // console.log('promise fulfilled')
        setCountries(response.data)
      })

  }

  const hookWeather = () => {

    if (state !== '') {
      console.log('effect getting weather')
      axios
        .get(apiUrl)
        .then(response => {
          setWData(response.data)
          console.log('promise weather', response.data);
          <DisplayWeather CapitalWeather={response.data} main={response.data.main} wind={response.data.wind}/>
          //<DisplayWeather CapitalWeather={response.data}/>
        })
        .catch((error) => {
          if (error.response) {
            console.log("Error Response capital");
          } else if (error.request) {
            console.log("Error request capital");
          } else if (error.message) {
            console.log("Error message capital");
          }
        })
    }

  }

  useEffect(hook, [])
  useEffect(hookWeather, [apiUrl])
  // useEffect(hookWeather, [])

  const ShowSingleCountry = (event) => {
    event.preventDefault()
    console.log('ShowSingleCountry', event.target.value)
    setFilter({ enabled: true, filter: event.target.value })
  }

  const handleFilterChange = (event) => {
    console.log('handlefilterChange');
    setFilter({ enabled: event.target.value !== '' ? true : false, filter: event.target.value })
    if (countriesToShow.length === 1) {
      console.log('countriestoshow.lenght=1');
      setState(countriesToShow[0].capital)
    } else {
      console.log('countriestoshow.length !== 1');
      setState('')
    }
  }

  if (state!=='') {
    console.log('capital selected', state);
  }
 
  // console.log('filtering');
  countriesToShow = ApplyFilter(Filter, countries)

  //console.clear()
  // countriesToShow = countriesToShow.length>10 ? [] : countriesToShow;
  // console.log('filtered countries', countriesToShow);
  // console.log(countriesToShow.length);
  // console.log(countries.length);

  console.log("*************** Before Rendering *****************");

  if (countriesToShow.length > 10) {
    console.log('If condition contrriestoshow.length>10');
    //setState('')
    return (
      <div>
        <ul>
          <FilterInput text="Find countries" filter={Filter} callOnChange={handleFilterChange} />
          Too many matches, specify another filter.
        </ul>
      </div>
    )
  }
  else if (countriesToShow.length === 1 & state !== '') {
    console.log('countriestoshow.len===1 & state!=""', wdata);
    return (
      <div>
        <ul>
          <FilterInput text="Find countries" filter={Filter} callOnChange={handleFilterChange} />
          {countriesToShow.map(country => { return <PrintCountryData key={country.name.common} _country={country} /> })}
          {/* {CountriesList.map(country => { return <PrintCountryData _country={country} /> })} */}
          <DisplayWeather CapitalWeather={wdata} main={wdata.main} wind={wdata.wind} />
        </ul>
      </div>
    )
  }
  else if (countriesToShow.length === 1) {
    console.log('countriestoshow.lenth===1', wdata);
    return (
      <div>
        <ul>
          <FilterInput text="Find countries" filter={Filter} callOnChange={handleFilterChange} />
          {countriesToShow.map(country => { return <PrintCountryData key={country.name.common} _country={country} /> })}
          {/* {CountriesList.map(country => { return <PrintCountryData _country={country} /> })} */}
          {/* <DisplayWeather CapitalWeather={wdata} /> */}
        </ul>
      </div>
    )
  }
  else {
    console.log('displaycountries con botones menos de diez');
    //setState('')
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
