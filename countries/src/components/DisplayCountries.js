import React from 'react'

const PrintCountryName = ({ _country }) => {
    return (
        <ul>{_country.name}</ul>
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
    else {
        return (
            <div>
                <ul>
                    {/* {persons.map(person => { return <Contact key={person.name} contact={person} /> })} */}
                    {CountriesList.map(country => { return <PrintCountryName key={country.name} _country={country} /> })}
                </ul>
            </div>
        )
    }

}

export default DisplayCountries