const express = require('express')
const app = express()
const path = require('path')
const port = 5500
/*
* Default route for the web app
*/
app.get('/', (req, res) => res.send('Deploy do Plot.ly no GCP =D - Teste 04'))
/*
* Route to render HTML Page
*/
app.get('/renderHTML', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, './')
    })
})
app.listen(port, () => console.log(`App listening on port ${port}!`))
