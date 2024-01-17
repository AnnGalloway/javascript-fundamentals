const Thermostat = require('./thermostat')

thermostat = new Thermostat();

describe('thermostat unit tests', () => {
    it('initialises at 20', () => {
        expect(thermostat.getTemperature()).toEqual(20);
    })
    it('run up twice and then get temperature increases the temperature by 2', () => {
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toEqual(22);
    })
    it('run down once decreases the temperature by 1', () => {
        thermostat.down();
        expect(thermostat.getTemperature()).toEqual(21);
    })
    it('temperature will not go below 10', () => {
        for (let i = 0; i < 15 ; i++){
            thermostat.down();
        }
        expect(thermostat.getTemperature()).toEqual(10);
    })
    it('power saving mode on as default, temperature will not go above 25', () => {
        for (let i = 0; i < 20; i ++){
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toEqual(25);
    })
    it('power saving mode turned off, temperature can now go above 25', () => {
        thermostat.setPowerSavingMode(false);
        thermostat.up();
        expect(thermostat.getTemperature()).toEqual(26);
    })
    it('power saving mode off - max temperature is 32', () => {
        for (let i = 0; i < 10; i ++){
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toEqual(32);
    })
    it('reset method resets temperature to 20', () => {
        thermostat.reset();
        expect(thermostat.getTemperature()).toEqual(20);
    })
    it('when temperature is between 19 and 25, current energy usage is medium-usage', () => {
        expect(thermostat.energyUsage()).toEqual('medium-usage')
    })
    it('when temperature is below 19, current energy usage is low-usage', () => {
        for (let i = 0; i < 10; i ++){
            thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage')
    })
    it('when temperature is above25, current energy usage is high-usage', () => {
        for (let i = 0; i < 20; i ++){
            thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage')
    })
})