const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/album', (req, res) => {
    res.json({
        name: "Javier Alejandro Avila Flores",
        favoriteAlbum: "Die Lit by playboi carti",
    });
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});