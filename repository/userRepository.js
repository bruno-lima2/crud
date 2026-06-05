const database = require("../database/database");
function showUsers(name, limit, offset) {
  return new Promise((resolve, reject) => {
    database.all(
      `
                SELECT * FROM users
                WHERE name LIKE ?
                LIMIT ?
                OFFSET ?`,
      [`%${name}%`, limit, offset],
      function (error, users) {
        if (error) {
          return reject(error);
        }
        resolve(users);
      },
    );
  });
}
function createUser(name) {
  return new Promise((resolve, reject) => {
    database.run(
      `
                INSERT INTO users (name)
                VALUES (?)`,
      [name],
      function (error) {
        if (error) {
          return reject(error);
        }
        resolve(this.lastID);
      },
    );
  });
}
function changeUser(id, name) {
  return new Promise((resolve, reject) => {
    database.run(
      `
                UPDATE users
                SET name = ?
                WHERE id = ?`,
      [name, id],
      function (error) {
        if (error) {
          return reject(error);
        }
        resolve(this.changes);
      },
    );
  });
}
function deleteUser(id) {
  return new Promise((resolve, reject) => {
    database.run(
      `
                DELETE FROM users
                WHERE id = ?`,
      [id],
      function (error) {
        if (error) {
          return reject(error);
        }
        resolve(this.changes);
      },
    );
  });
}
function findUser(id) {
  return new Promise((resolve, reject) => {
    database.get(
      `
                SELECT * FROM users
                WHERE id = ?`,
      [id],
      function (error, user) {
        if (error) {
          return reject(error);
        }
        resolve(user);
      },
    );
  });
}
module.exports = { showUsers, createUser, changeUser, deleteUser, findUser };
