import React from "react";
import { useState } from "react";
import axios from "axios";

const Weather = () => {

    const [temp, setTemp] = useState(' ');
    const [min, setMin] = useState(' ');
    const [max, setMax] = useState(' ');
    const [feelsLike, setFeelsLike] = useState(' ');
    const [cityName, setCityName] = useState('Houston');
    const apiKey = '54ede66cfc15117e3468119feab5d9a2';
    
    // doesnt work
    const forecast = () => {
        // let url = `https//:api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;
        
        // CHECK FOR ERROR BELOW?
        // fetch(url)
        // .then(response => response.json())
        // .then(result => {   
        //     console.log(result);
        //     setTemp(result.main.temp);
        //     setFeelsLike(result.main.feels_like);
        //     setMin(result.main.temp_min);
        //     setMax(result.main.temp_max)
        // })
        // .catch((error) => {
        //     return error
        // }) 

        // youtube method -_-
        axios({
            method: "GET",
            url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`,
        })
        .then((res) => {
            console.log(res.data);
                
            setTemp(res.data.main.temp);
            setMin(res.data.main.temp_min);
            setMax(res.data.main.temp_max)
            setFeelsLike(res.data.main.feels_like)
        })
        .catch((error) => {
            console.log(error);
        });
    };
        
    
    

    return (
        <>
        <div>
        <div className='search'>
            <input 
            type="text"
            value={cityName}
            onChange={(e) => {setCityName(e.target.value)}}
            placeholder='What city are you in?' 
            />
            {/* should call forecast function */}
            <button
            onClick={() => {
                forecast()
            }}
            >
            Get Weather
            </button>
        </div>
        <div className='display'>
            <div className='current'>
                <h1>{cityName} Current Weather</h1>
                <div className='temp'>
                    {/* Harded coded for styling */}
                    <h1>{temp}&deg;</h1>
                </div>
            </div>
            <div className='cards'>
                <div className='minMax'>
                    <h1>MinMax</h1>
                    <p>{min}&deg; - {max}&deg;</p>
                </div>
                <div className='feelsLike'>
                    <h1>Feels Like </h1>
                    <p>{feelsLike}&deg;</p>
                </div>
            </div>

        </div>   

        </div>
        </>
    )
}

export default Weather;