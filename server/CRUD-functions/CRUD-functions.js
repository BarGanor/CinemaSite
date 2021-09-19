const sql = require("../db-files/db.js");

const getNewMovies = function(req, res) {
    const genre = req.params.genre
    sql.query("SELECT * FROM movies where genre like ? AND year=? ", ['%' +genre + '%', '2020']  , (err, mysqlres) => {

        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in getting movies by genre: " +
                    err});
            return;
        }
        console.log("got movies by genre...");
        res.send(mysqlres);
    });
};

module.exports = {getNewMovies:getNewMovies};


