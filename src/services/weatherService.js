const fetchWeatherData = (latitude, longitude) => {
    return fetch(`https://weather-forecast-backend-6354a2f4cd17.herokuapp.com/solar_energy?latitude=${latitude}&longitude=${longitude}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            throw error;
        });
}

export default fetchWeatherData;
