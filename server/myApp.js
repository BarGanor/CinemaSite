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

app.post("/validation", CRUD_operations.validateUser);
app.post("/newShows", CRUD_operations.newShows);
app.post("/newUser", CRUD_operations.newUser);
app.post("/showHall", CRUD_operations.showHall);
app.post("/addToCart", CRUD_operations.addToCart);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

})
