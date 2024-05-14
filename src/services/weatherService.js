const fetchWeatherData = (latitude, longitude) => {
    return fetch(`${process.env.REACT_APP_API_URL}?latitude=${latitude}&longitude=${longitude}`)
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
