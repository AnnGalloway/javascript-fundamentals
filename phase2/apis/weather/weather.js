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

    compareWith(city2){
        const city1Temp = this.weatherData.main.temp
        let city2Temp = 0
        let city2Name = 'name'
        this.client.fetchWeatherData(city2)
        .then((data => {
            //console.log(data);
            city2Temp = data.main.temp;
            city2Name = data.name;
        }))
        .then(() => {
            if (city1Temp > city2Temp) {
                console.log(`The warmer city is ${this.weatherData.name}`)
            } else if (city2Temp > city1Temp) {
                console.log(`The warmer city is ${city2Name}`)
            } else {
                console.log(`${this.weatherData.name} and ${city2Name} are the same temperature`)
            };
        });
    }

    displayWeather(){
        console.log(`City: ${this.weatherData.name}\n` +
        `Weather: ${this.weatherData.weather[0].main}\n` +
        `Temp: ${this.weatherData.main.temp} C\n` +
        `Feels Like: ${this.weatherData.main.feels_like}\n` +
        `Humidity: ${this.weatherData.main.humidity}%`);
    }
}

module.exports = Weather;