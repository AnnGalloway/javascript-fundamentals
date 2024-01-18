class WeatherClient{
    constructor() {
        this.apiKey = require('./apiKeys');
    }

    fetchWeatherData(city){
        const apiURL = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.apiKey}`;
        const weatherData = fetch(apiURL)
            .then((response) => response.json())
            //.then((weatherData) => console.log(weatherData))
        return weatherData;
    }
}

module.exports = WeatherClient;