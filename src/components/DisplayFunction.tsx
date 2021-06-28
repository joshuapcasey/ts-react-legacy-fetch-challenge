import React from "react";
import CurrentWeather from "./ClassFetch";

type AcceptedProps = {
    
    locationWeather: {
        main: {
            temp: string;
            feels_like: string;
            humidity: string
        },
        clouds: {
            all: number
        },
        wind: {
            speed: number
        },
        weather: {
            description: string
        }
    }
}

const CurrentWeatherDisplay= (props: AcceptedProps) => {
    return (
        <div>
            <h2>Your Location's:</h2>
            {/* <h5>Description</h5>
            <p>{props.locationWeather.weather.description}</p> */}
            <h5>Temp</h5>
            <p>{props.locationWeather.main.temp}&deg;F</p>
            <h5>Feels Like</h5>
            <p>{props.locationWeather.main.feels_like}&deg;F</p>
            <h5>Humidity</h5>
            <p>{props.locationWeather.main.humidity}%</p>
            <h5>Wind Speed</h5>
            <p>{props.locationWeather.wind.speed}mph</p>
            <h5>Cloud Coverage</h5>
            <p>{props.locationWeather.clouds.all}%</p>
        </div>
    )
}

export default CurrentWeatherDisplay;