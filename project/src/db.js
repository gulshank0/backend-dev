import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync(":memory:");

//Execute SQL statement from string
//

db.exec(`
CREATE TABLE user(

id INTEGER PRIMARY KEY AUTOINCREAMENT,

username TEXT UNIQUE,
password TEXT
) 

`);

db.exec(` CREATE TABLE todos(
id INTEGER PRIMARY KEY AUTOINCREAMENT,
user_id INTEGER,
task TEXT,
completed BOOLEAN DEFAULT 0, 
FOREIGN KEY(user_id) REFERENCES users(id)



`);
