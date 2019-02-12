const express = require("express");
const sql = require("sqlite3").verbose();

const db = new sql.Database("./db/database.db", function(err){
    console.log("connection error: ",err);
});


const app = express();

app.use(express.static("public"));

app.get("/", function(req,res){

    res.send("Welcome to the sqlite3/express love API")

});

app.get("/users", function(req,res){

    const selectQ = "SELECT * FROM users ORDER BY id DESC";

    db.all(selectQ,[],function(err, data){
        if(err) res.send(err.message);
        else res.send(data);

    });

});

app.get("/posts", function(req,res){

    const selectQ = "SELECT * FROM posts ORDER BY id DESC";

    db.all(selectQ,[],function(err, data){
        if(err) res.send(err.message);
        else res.send(data);

    });
    
});

app.get("/posts/:id", function(req,res){

    const selectQ = "SELECT * FROM posts WHERE id = ?";
    const id = req.params.id;
    db.all(selectQ,[id],function(err, data){
        if(err) res.send(err.message);
        else res.send(data);

    });
    
});


app.listen(1402, function(){
    console.log("app listens on port 1402 v-day");
});
