const Thermostat = require('./thermostat');
const express = require('express');
const app = express();
const port = 3000;
const thermostat = new Thermostat();

app.get('/temperature', (req,res) => {
    //res.send(JSON.stringify(thermostat.getTemperature()))
    res.send(`Current Temperature is: ${thermostat.getTemperature()}`)
})

app.post('/up', (req,res) => {
    res.send(thermostat.up());
})

app.post('/down', (req,res) => {
    res.send(thermostat.down());
})

app.delete('/temperature', (req,res) => {
    res.send(thermostat.reset());
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);