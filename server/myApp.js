const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const sql = require('./db-files/db.js');
const CRUD_operations = require("./CRUD-functions/CRUD-functions.js");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true
}));
const port = 8080;


app.use('/', express.static(path.join(__dirname, '../client')))
console.log(express.static(path.join(__dirname, '../client')))

app.post("/newMovies/:genre", CRUD_operations.getNewMovies);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

})
