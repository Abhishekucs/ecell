const express = require('express');
const Path = require('path');
const app = express();

const port = process.env.PORT || 3000;
const publicPath = Path.join(__dirname, 'build');

app.use(express.static(publicPath))

app.get('*', (req, res) => {
    res.sendFile(Path.join(publicPath, 'index.html' ))
})

app.listen(port, () => {
    console.log('App is up and running at ', port)
})