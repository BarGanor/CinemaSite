const sql = require("../db-files/db.js");

const getNewMovies = function(req, res) {
    const genre = req.params.genre
    sql.query("SELECT * FROM movies where genre like (?)", ['%' +genre + '%']  , (err, mysqlres) => {

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

const validateUser = function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    sql.query("select * from users where email=? and password=? ", [email, password]  , (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in getting movies by genre: " +
                    err});
            return;
        }
        console.log("validated user..");
        res.send(mysqlres);
    });
};

const newShows = function (req, res) {
    const city = req.body.city;
    const date = req.body.date;
    const time = req.body.time;
    const dt_start = date + ' ' + time;
    sql.query("SELECT m.img_url, s.movie_id, s.cinema_name, s.city, s.dt_start, title, m.year, m.date_published, m.genre, m.actors, m.director, m.description FROM Shows as s join movies as m on s.movie_id=m.imdb_title_id where s.city = ? -- and s.dt_start=?", [city, dt_start]  , (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in getting shows: " +
                    err});
            return;
        }
        console.log("got shows..");
        res.send(mysqlres);
    });
};


const newUser = function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;
    const birthdate = req.body.birthdate;


    sql.query("insert into users values(?,?,?,?);", [email, password, username, birthdate]  , (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in getting shows: " +
                    err});
            return;
        }
        console.log("query sent");
        res.send(mysqlres);
    });
};


const showHall = function (req,res) {
    const movie_id = req.body.movie_id;
    const dt_start = req.body.dt_start;
    const city = req.body.city;
    const cinema_name = req.body.cinema_name;
    sql.query("select * from seats as se join shows as sh on se.show_id=sh.show_id where sh.movie_id=? and sh.city = ? and sh.cinema_name=? -- and sh.dt_start=? ", [movie_id, city, cinema_name], (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.status(400).send({
                message: "error in getting seats: " +
                    err
            });
            return;
        }
        res.send(mysqlres);
    });
}

const addToCart = function (req,res){
    const show_id = req.body.show_id;
    const activeList = req.body.activeList;

    sql.query("UPDATE SEATS SET mode ='occupied' where  show_id=? and seat_id in (?)", [show_id, activeList]  , (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in getting show: " +
                    err});
            return;
        }
        res.send(mysqlres);
    });

};

module.exports = {getNewMovies:getNewMovies, validateUser:validateUser, newShows:newShows, newUser:newUser, showHall:showHall, addToCart:addToCart};


