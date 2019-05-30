const express = require('express')
const app = express()
const path = require('path')
const port = 4000
/*
* Default route for the web app
*/
app.get('/', (req, res) => res.send('Deploy do Plot.ly no GCP =D - Teste 02'))
/*
* Route to render HTML Page
*/
app.get('/renderHTML', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, './')
    })
})
app.listen(port, () => console.log(`App listening on port ${port}!`))
