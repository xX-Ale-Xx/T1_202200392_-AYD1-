const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/song', (req, res) => {
    res.json({
        name: "Javier Alejandro Avila Flores",
        favoriteSong: "2024 by playboi carti",
    });
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});