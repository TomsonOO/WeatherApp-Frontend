import React, { useState, useEffect } from 'react';
import WeatherTable from '../components/WeatherTable';
import fetchWeatherData from '../services/weatherService';

const HomePage = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });

            fetchWeatherData(latitude, longitude)
                .then(data => {
                    setWeatherData(data);
                })
                .catch(console.error);
        }, console.error);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-xl font-bold text-center mb-6">7-Day Weather Forecast</h1>
            {weatherData ? <WeatherTable weatherData={weatherData} /> : <p>Loading...</p>}
        </div>
    );
}

export default HomePage;
