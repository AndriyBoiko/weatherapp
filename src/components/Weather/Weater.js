import React, {useEffect, useState} from 'react';
import {weatherServices} from "../../services/weather.services";

const Weater = () => {

    const [weather, setWeather] = useState([])

    useEffect(()=>{
        weatherServices.getAll().then(({data})=>setWeather(data))

    },[])
    console.log(weather)
    return (
        <div>
            
        </div>
    );
};

export default Weater;