const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Goodbye, express!')
});

let counter = 0

app.get('/counter', (req,res) => {
    res.send(`counter: ${counter}`)
});

app.post('/counter', (req,res) => {
    res.send(counter++);
});

app.delete('/counter', (req,res) => {
    res.send(counter = 0)
});


console.log(`Server listening on localhost:${port}`);
app.listen(port);