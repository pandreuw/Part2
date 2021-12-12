import React from 'react'

//https://reactjs.org/docs/lists-and-keys.html#keys
//revisar el link de arriba para encontrar la respuesta a los id

export const PrintCountryList = ({ _country, buttonpressed }) => {
    return (
        <>
            <ul>
                {_country.name.common}<button onClick={(e) => buttonpressed(_country.id, e)}>Show</button>
            </ul>
        </>
    )
}




const PrintLanguages = ({ languages }) => {
    return (
        <><li>{languages}</li></>
    )
}

// const DisplayCountries = ({ CountriesList, callOnChange }) => {
//     if (CountriesList.length > 10) {
//         return (
//             <div>
//                 <ul>
//                     Too many matches, specify another filter.
//                 </ul>
//             </div>
//         )
//     }
//     else if (CountriesList.length === 1) {
//         return (
//             <div>
//                 <ul>
//                     {CountriesList.map(country => { return <PrintCountryData key={country.id} _country={country} /> })}
//                     {/* {CountriesList.map(country => { return <PrintCountryData _country={country} /> })} */}
//                 </ul>
//             </div>
//         )
//     }
//     else {
//         // console.log('displaycountries else bracket');
//         return (
//             <div>
//                 <ul>
//                     {CountriesList.map(country => { return <PrintCountryList key={country.id} _country={country} buttonpressed={callOnChange}/> })}
//                 </ul>
//             </div>
//         )
//     }

// }

export const PrintCountryData = ({ _country }) => {
    // From this website point me to the right direction to get the correct key to later iterate using the map
    // https://stackoverflow.com/questions/22380930/how-to-get-property-value-in-js-object-when-key-is-unknown
    var lang = []
    for (var key in _country.languages) {
        // console.log('language is ', _country.languages[key]); // 81.25
        lang.push(_country.languages[key])
    }
    return (
        <>
            <h2>{_country.name.common}</h2>
            <ul>Capital: {_country.capital}</ul>
            <ul>Population: {_country.population}</ul>
            <h3>Languages</h3>
            <ul>
                {lang.map(countrylanguage => { return <PrintLanguages key={countrylanguage} languages={countrylanguage} /> })}
            </ul>
            <img src={_country.flags.png} />
        </>
    )
}

