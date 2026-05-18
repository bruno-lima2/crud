const sqlite3 = require("sqlite3");
const database = new sqlite3.Database("users.db");
database.serialize(() => {
  database.run(
    `
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT
            )
        `,
  );
});
module.exports = database;
