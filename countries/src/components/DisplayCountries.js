import React from 'react'

//https://reactjs.org/docs/lists-and-keys.html#keys
//revisar el link de arriba para encontrar la respuesta a los id

const PrintCountryList = ({ _country }) => {
    return (
        <ul>{_country.name.common}</ul>
    )
}

const PrintCountryData = ({ _country }) => {
    return (
        <>
            <h2>{_country.name.common}</h2>
            <ul>Capital: {_country.capital}</ul>
            <ul>Population: {_country.population}</ul>
            <h3>Languages</h3>
            {/* <ul>
                {_country.languages.map(lang => {return <PrintLanguages key={lang.id} languages={lang}/>})}
            </ul> */}
            <img src={_country.flag} />
        </>
    )
}

const PrintLanguages = ({languages}) => {
    return(
        <li>{languages.name}</li>
    )
}

const DisplayCountries = ({ CountriesList }) => {
    if (CountriesList.length > 10) {
        return (
            <div>
                <ul>
                    Too many matches, specify another filter.
                </ul>
            </div>
        )
    }
    else if (CountriesList.length === 1) {
        return (
            <div>
                <ul>
                {CountriesList.map(country => { return <PrintCountryData key={country.id} _country={country} />})}
                </ul>
            </div>
        )
    }
    else {
        return (
            <div>
                <ul>
                    {/* {persons.map(person => { return <Contact key={person.name} contact={person} /> })} */}
                    {CountriesList.map(country => { return <PrintCountryList key={country.id} _country={country} /> })}
                </ul>
            </div>
        )
    }

}

export default DisplayCountries