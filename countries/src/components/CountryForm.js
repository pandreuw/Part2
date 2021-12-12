import React from 'react'

const CountryForm = ({ CountryName, callShowCountry }) => {
    return (
        <div>
            <form onSubmit={callShowCountry}>
                <div>
                    {CountryName}     <button value={CountryName} onClick={callShowCountry}>Show</button>
                    {/* {CountryName}     <button type="submit" value={CountryName}>Show</button> */}
                </div>
            </form>
        </div>
    )
}

export default CountryForm