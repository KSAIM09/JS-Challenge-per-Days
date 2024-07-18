const express = require('express');
const request = require('request');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/proxy', (req, res) => {
    const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
    request(apiUrl, { json: true }, (err, response, body) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(body);
    });
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
