$(document).ready(function() {
    const apiKey = '4e5e7169a11216f3e44e612a89e0c656'; // Replace with your OpenWeatherMap API key

    $('#getWeather').on('click', function() {
        const city = $('#city').val();
        if (city) {
            $.ajax({
                url: `https://api.openweathermap.org/data/2.5/weather`,
                method: 'GET',
                data: {
                    q: city,
                    appid: apiKey,
                    units: 'metric'
                },
                success: function(data) {
                    const temperature = data.main.temp;
                    const weather = data.weather[0].description;
                    const cityName = data.name;
                    $('#weatherResult').html(`
                        <h2>${cityName}</h2>
                        <p>Temperature: ${temperature}°C</p>
                        <p>Weather: ${weather}</p>
                    `);
                },
                error: function() {
                    $('#weatherResult').html('<p>Unable to retrieve weather data. Please try again.</p>');
                }
            });
        } else {
            $('#weatherResult').html('<p>Please enter a city name.</p>');
        }
    });
});
