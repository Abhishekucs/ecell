const express = require('express');
const Path = require('path');
const app = express();

const port = process.env.PORT || 3000;
const publicPath = Path.resolve(__dirname, 'build');

app.use(express.static(publicPath))

app.get('*', (req, res) => {
    res.sendFile(Path.resolve(publicPath, 'index.html' ))
})

app.listen(port, () => {
    console.log('App is up and running at ', port)
})