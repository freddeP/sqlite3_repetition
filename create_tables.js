const sql = require("sqlite3").verbose();

const db = new sql.Database("./db/database.db", function(err){
    console.log("connection error: ",err);
});

// Sql-fråga för att skapa en user-tabell
const createUsers = `
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY,
    name TEXT DEFAULT "no_name",
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    admin INTEGER DEFAULT 0
)
`;

// sql-fråga för att skapa en post-tabell 
const createPosts = `
CREATE TABLE IF NOT EXISTS posts(
    id INTEGER PRIMARY KEY,
    post TEXT NOT NULL,
    img TEXT DEFAULT "no_image",
    uid INTEGER DEFAULT -1
)
`;


db.run(createUsers, function(err){
    console.log("createUser error: ", err);
});
db.run(createPosts, function(err){
    console.log("createPost error: ", err);
});

