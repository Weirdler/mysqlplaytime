// call package and storing it
const express = require('express');
const mysql      = require('mysql');


const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'avacado1219',
  database : 'blog'
  });
  
db.connect(function(err){
    if(err) {throw err}
    console.log("gucci gang")
});
  
// call express and storing it
const api = express();

// creating database
api.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE blog'
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database was created');
    });
});

api.get('/createtb', (req, res) => {
    let sql = "CREATE TABLE posts ( ID int NOT NULL AUTO_INCREMENT, Title varchar(255), Body varchar(255), PRIMARY KEY (ID))"
    db.query(sql,(err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('table created')
    })
});

api.get('/addpost', (req, res) => {
    let post = {title: "spicy time", body: "lorem ipsum abdor sucam ajslkf skd fsljfkjaeoi kasdhfs jfasjdfl faoihvn hasdfdvjk"};
    let sql = "INSERT INTO posts SET ?";
    db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('table data added')
    })

});

api.get('/add2ndpost', (req, res) => {
    let post = {title: "Gucci", body: "spaghettie"};
    let sql = "INSERT INTO posts SET ?";
    db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('table data added')
    })

});
api.get('/getposts', (req, res) => {
    let sql = "select * from posts";
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result)
    })
});

api.get('/getpost/:id', (req, res) => {
    let sql = "select * from posts WHERE ID =" + req.params.id;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(req.params)
        res.send('table data selected')
    })

});
api.get('/deletepost/:id', (req, res) => {
    let sql = "DELETE FROM posts WHERE ID =" + req.params.id;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('table data deleted')
    })

});


// app is listening on port 5000 
api.listen(5000);

// server start up message
console.log("you have the big gay of 5000...")