// import React from 'react'

const kelvinToCelcius = (k) => {
    return (k - 273.15).toFixed(2);
}

//meters per second to km per hour
const mpersTOkmperh = (s) => {
    return (s * 60 * 60 / 1000).toFixed(2);
}

// Wind direction Convert angle to cardinal direction
const WindDirection = ({angle})=>{
    var direction
    if ((360>angle & 348.75<angle) || (11.25>angle & 0<angle)) {
        direction= <>N</>
    } else if (11.25<angle & angle<33.75) {
        direction=<>NNE</>
    } else if (33.75<angle & angle<56.25) {
        direction=<>NE</>
    } else if (56.25<angle & angle<78.75) {
        direction=<>ENE</>
    } else if (78.75<angle & angle<101.25) {
        direction=<>E</>
    } else if (101.25<angle & angle<123.75) {
        direction=<>ESE</>
    } else if (123.75<angle & angle<146.25) {
        direction=<>SE</>
    } else if (146.25<angle & angle<168.75) {
        direction=<>SSE</>
    } else if (168.75<angle & angle<191.25) {
        direction=<>S</>
    } else if (191.25<angle & angle<213.75) {
        direction= <>SSW</>
    } else if (213.75<angle & angle<236.25) {
        direction= <>SW</>
    } else if (236.25<angle & angle<258.75) {
        direction= <>WSW</>
    } else if (258.75<angle & angle<281.25) {
        direction=<>W</>
    } else if (281.25<angle & angle<303.75) {
        direction= <>WNW</>
    } else if (303.75<angle & angle<326.25) {
        direction=<>NW</>
    } else if (326.25<angle & angle<348.75) {
        direction= <>NNW</>
    } else {
        direction= <>NOT VALID DATA</>
    }
    return direction
}


export const DisplayWeather = ({ CapitalWeather, main, wind }) => {
    console.log('print DisplayWeather', CapitalWeather);
    return (
        <>
            <h2>Weather in {CapitalWeather.name}</h2>
            <h2>Temperature: {kelvinToCelcius(main.temp)}&deg; C</h2>
            <img
                src={`http://openweathermap.org/img/w/${CapitalWeather.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
            />
            <h2>Wind: {mpersTOkmperh(wind.speed)}km/h Direction: <WindDirection angle={wind.deg}/></h2>
        </>
    )

}