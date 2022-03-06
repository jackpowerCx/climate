import React, { Suspense, useEffect, useState } from 'react';
import axios from 'axios';

const Weatherinfo = () => {

    const [value, setValue]= useState({});
    const [unitTemp, setUintTemp] = useState('°K');
    const [converter, setConverter] = useState('');
  


    
    useEffect (()=>{
        navigator.geolocation.getCurrentPosition((position) =>{
            const APIKey = "ca34e663b54713b53eed2bb28caceef0";
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${APIKey}${converter}`)
                 .then(res =>{setValue(res.data)})
        });
    },[converter]);


    
    const celcius =() =>{
        setUintTemp('°C')
        setConverter('&units=metric')
        
    }


    const Fahrenheit = () =>{
        setUintTemp('°K')
        setConverter('')
        
    }

    
    
    return (
        <div className='card'>
           
                <p className='temp'> { value.weather? <img className='icons' src = {`https://openweathermap.org/img/wn/${value.weather?.[0].icon}@2x.png`} alt="" /> : null}
                     {value.main?.temp} <sup className='expUnit'>
                        <a href="#" className='celcius' onClick={celcius} > <b>°C</b> </a>  | <a href="#" className='Fahrenheit' onClick={Fahrenheit}> <b>°K</b> </a> </sup>
                </p>
                <h3>{value.name}</h3>
                <p><b>Max temperature :</b> {value.main?.temp_max} <sup className='expUnit2'>{unitTemp}</sup> </p>
                <p><b>Min temperature :</b>  {value.main?.temp_min} <sup className='expUnit2'> {unitTemp} </sup></p>
                <p> <b>Cloud cover :</b> {value.clouds?.all} %</p>
                <p> <b>Pressure :</b> {value.main?.pressure} hPa</p>
                <p><b>Wind to :</b> {value.wind?.speed} metro/seg</p>
            

        </div>
    );
};

export default Weatherinfo;