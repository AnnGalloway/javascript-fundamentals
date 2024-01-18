class Weather{
    constructor(client) {
        this.weatherData = {}
        this.client = client
    }

    load(city) {
        //this.weatherData = this.client.fetchWeatherData(city);
        return this.client.fetchWeatherData(city).then((data => {
            this.weatherData = data;
        }));
    }

    getWeatherData(){
        return this.weatherData;
    }
}

module.exports = Weather;