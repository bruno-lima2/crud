const database = require("../database/database");
function showUsers(callback) {
  database.all(
    `
            SELECT * FROM users`,
    (error, users) => {
      callback(error, users);
    },
  );
}
function createUser(name, callback) {
  database.run(
    `
            INSERT INTO users (name)
            VALUES (?)`,
    [name],
    function (error) {
      callback(error, this.lastID);
    },
  );
}
function changeUser(id, name, callback) {
  database.run(
    `
            UPDATE users
            SET name = ?
            WHERE id = ?`,
    [name, id],
    function (error) {
      callback(error, this.changes);
    },
  );
}
function deleteUser(id, callback) {
  database.run(
    `
            DELETE FROM users
            WHERE id = ?`,
    [id],
    function (error) {
      callback(error, this.changes);
    },
  );
}
function findUser(id, callback) {
  database.get(
    `
            SELECT * FROM users
            WHERE id = ?`,
    [id],
    function (error, user) {
      callback(error, user);
    },
  );
}
module.exports = { showUsers, createUser, changeUser, deleteUser, findUser };
