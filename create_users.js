const sql = require("sqlite3").verbose();

const db = new sql.Database("./db/database.db", function(err){
    console.log("connection error: ",err);
});

const insertQ1 = `
INSERT INTO users
(name, email, password)
VALUES
('Fredric','freddeP@fp.se', 'sqliteIsFun')
`;

const insertQ2 = `
INSERT INTO users
(name, email, password)
VALUES
('Stefan','stefan@lofven.se', 'loveLiberals')
`;

const insertQ3 = `
INSERT INTO users
(name, email, password)
VALUES
('Uffe','uffeK@uk.se', 'loveEmAll')
`;

//db.run(insertQ1, function(err){console.log("q1",err)});
//db.run(insertQ2, function(err){console.log("q2",err)});
//db.run(insertQ3, function(err){console.log("q3",err)});
