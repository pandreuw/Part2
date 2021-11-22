import React from 'react'

//https://reactjs.org/docs/lists-and-keys.html#keys
//revisar el link de arriba para encontrar la respuesta a los id

const PrintCountryList = ({ _country }) => {
    return (
        <>
            <ul>
                {_country.name.common}
            </ul>
        </>
    )
}

const PrintCountryData = ({ _country }) => {
    // var lang = _country.languages.map((language) => language)
    var lang = []
    for (var key in _country.languages) {
        console.log('language is ', _country.languages[key]); // 81.25
        lang.push(_country.languages[key])
    }
    return (
        <>
            <h2>{_country.name.common}</h2>
            <ul>Capital: {_country.capital}</ul>
            <ul>Population: {_country.population}</ul>
            <h3>Languages</h3>
            <ul>
                {lang.map(countrylanguage =>{return<PrintLanguages languages={countrylanguage} />})}
            </ul>
            <img src={_country.flags.png} />
        </>
    )
}


const PrintLanguages = ({ languages }) => {

    return (
       <><li>{languages}</li></>
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
                    {CountriesList.map(country => { return <PrintCountryData key={country.id} _country={country} /> })}
                    {/* {CountriesList.map(country => { return <PrintCountryData _country={country} /> })} */}
                </ul>
            </div>
        )
    }
    else {
        console.log('displaycountries else bracket');
        return (
            <div>
                <ul>
                    {/* {CountriesList.map(country => { return <ul key={country.id}>{country.name.common}</ul> })} */}
                    {CountriesList.map(country => { return <PrintCountryList key={country.id} _country={country} /> })}
                    {/* {CountriesList.map(country => { return <PrintCountryList _country={country} /> })} */}
                </ul>
            </div>
        )
    }

}

export default DisplayCountries