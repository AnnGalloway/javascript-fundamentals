class Thermostat{
    constructor(){
        this.temperature = 20;
        this.powerSavingMode = true;
    }

    getTemperature() {
        return this.temperature;
    }

    up() {
        if (this.powerSavingMode === true){
            if (this.temperature < 25){
                this.temperature ++;
            }
        } else {
            if (this.temperature < 32){
                this.temperature ++;
            }
        }
    }

    down() {
        if (this.temperature > 10) {
            this.temperature --;}
    }

    setPowerSavingMode(set) {
        if (set === true){
            this.powerSavingMode = true;
        } else if (set === false) {
            this.powerSavingMode = false;
        }
        console.log(`power saving mode: ${this.powerSavingMode}`)
    }

    reset(){
        this.temperature = 20;
    }

    energyUsage() {
        if (this.temperature < 19){
            return 'low-usage';
        } else if (this.temperature < 26){
            return 'medium-usage';
        } else {
            return 'high-usage';
        }
    }
}

module.exports = Thermostat;