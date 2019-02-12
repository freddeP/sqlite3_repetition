const sql = require("sqlite3").verbose();

const db = new sql.Database("./db/database.db", function(err){
    console.log("connection error: ",err);
});

const insertQ1 = `
INSERT INTO posts
(post, img)
VALUES
('Happy V-day!!!','https://shsroundtable.com/wp-content/uploads/2015/02/vday-dos-and-donts.png')
`;

const insertQ2 = `
INSERT INTO posts
(post, img)
VALUES
('Love your job, school, wife and DOG!','https://shsroundtable.com/wp-content/uploads/2015/02/vday-dos-and-donts.png')
`;
const insertQ3 = `
INSERT INTO posts
(post, img)
VALUES
('Love that it is soon SPORTLOVe!!!!','https://shsroundtable.com/wp-content/uploads/2015/02/vday-dos-and-donts.png')
`;

//db.run(insertQ1, function(err){console.log("q1",err)});
//db.run(insertQ2, function(err){console.log("q2",err)});
//db.run(insertQ3, function(err){console.log("q3",err)});
