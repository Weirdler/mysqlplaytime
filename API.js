// call package and storing it
const express = require('express');
const mysql      = require('mysql');


const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'avacado1219'
  });
  
db.connect(function(err){
    if(err) {throw err}
    console.log("gucci gang")
});
  
// call express and storing it

const api = express();

// app is listening on port 5000 
api.listen(5000);

// server start up message
console.log("you have the big gay of 5000...")