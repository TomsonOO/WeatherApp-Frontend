import React, { useState, useEffect } from 'react';
import WeatherTable from '../components/WeatherTable';
import fetchWeatherData from '../services/weatherService';

const HomePage = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [weatherData, setWeatherData] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

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

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-gradient-to-b from-blue-500 via-blue-300 to-blue-500 flex flex-col items-center justify-center`}>
            <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <h1 className="text-xl font-bold text-center dark:text-gray-100 mb-6">7-Day Weather Forecast</h1>
                {weatherData ? <WeatherTable weatherData={weatherData} /> : <p className="text-center">Loading...</p>}
                <button onClick={toggleDarkMode} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Toggle Dark Mode
                </button>
            </div>
        </div>
    );
}

export default HomePage;
