import { WiDaySunny, WiCloudy, WiRain } from 'react-icons/wi';

const WeatherIcon = ({ code }) => {
    switch (code) {
        case 1: return <WiDaySunny className="text-yellow-400 text-3xl" />;
        case 2: return <WiCloudy className="text-gray-500 text-3xl" />;
        case 3: return <WiRain className="text-blue-500 text-3xl" />;
        default: return <WiCloudy className="text-gray-500 text-3xl" />;
    }
};

const WeatherTable = ({ weatherData }) => {
    const dates = Object.keys(weatherData);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm text-left text-gray-800 dark:text-gray-100 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                    {dates.map(date => (
                        <th key={date} scope="col" className="px-6 py-3">
                            {new Date(date).toLocaleDateString()} <WeatherIcon code={weatherData[date].weather_code} />
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                <tr>
                    {dates.map(date => (
                        <td key={date} className="px-6 py-4 border-b">
                            Max Temp: {weatherData[date].max_temperature}°C<br />
                            Min Temp: {weatherData[date].min_temperature}°C<br />
                            Energy: {weatherData[date].energy_generated.toFixed(3)} kWh
                        </td>
                    ))}
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default WeatherTable;
