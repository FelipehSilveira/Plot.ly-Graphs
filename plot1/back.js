const express = require('express')
const app = express()

const port = 3000


app.get('/', (req, res) => res.send('Hello World!'))

/*
* Route to render HTML Page
*/
app.get('/Plot.Ly', (req, res) => {
	res.sendFile('real_time.html', {
        root: path.join(__dirname, './')
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))