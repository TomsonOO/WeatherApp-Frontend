import React from 'react';

const WeatherTable = ({ weatherData }) => {
    const dates = Object.keys(weatherData);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-200">
                <tr>
                    {dates.map(date => (
                        <th key={date} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {date} {/* Displaying the date */}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                    {dates.map(date => (
                        <td key={date} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Sunshine: {weatherData[date].sunshine_duration.toFixed(2)} hrs<br />
                            Max Temp: {weatherData[date].max_temperature}°C<br />
                            Min Temp: {weatherData[date].min_temperature}°C<br />
                            Weather Code: {weatherData[date].weather_code}<br />
                            Energy: {weatherData[date].energy_generated.toFixed(3)} kWh
                        </td>
                    ))}
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WeatherTable;
