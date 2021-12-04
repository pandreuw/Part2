import React from 'react'

const CountryForm = ({ CountryName, callShowCountry }) => {
    return (
        <div>
            <form onSubmit={callShowCountry}>
                <div>
                    {CountryName}<button type="submit">Show</button>
                </div>
            </form>
        </div>
    )
}

export default CountryForm