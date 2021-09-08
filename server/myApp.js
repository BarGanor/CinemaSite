const express = require('express');
const path = require('path')

const app = express();
const port = 8080;

app.use('/', express.static(path.join(__dirname, '../client')))

app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req, res) {
    res.send('Hello from B!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

})

