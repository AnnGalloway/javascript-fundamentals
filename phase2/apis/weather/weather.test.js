const WeatherClient = require('./weatherClient');
const Weather = require('./weather');
const client = new WeatherClient();
const weather = new Weather(client);

describe('integration tests for weather class', () => {
    it('calls the weather information for Bristol', () => {
        return weather.load('Bristol').then(() => {
            expect(weather.getWeatherData().name).toEqual('Bristol');
        });
    });
});

describe('unit tests for weather class', () => {
    it('calls the weather information for Bristol', () => {
        const mockClient = {
            fetchWeatherData: jest.fn(),
        };
        mockClient.fetchWeatherData.mockResolvedValueOnce({
            name: 'Bristol',
        });
        const weather2 = new Weather(mockClient)
        return weather2.load('Bristol').then(() =>{
            expect(weather2.getWeatherData().name).toEqual('Bristol');
        });
    })
})