const userRepository = require("../repository/userRepository");
function listUsers(callback) {
  userRepository.showUsers((error, users) => {
    callback(error, users);
  });
}
function addUser(name, callback) {
  userRepository.createUser(name, (error, id) => {
    callback(error, id);
  });
}
function updateUser(id, name, callback) {
  userRepository.changeUser(id, name, (error, changes) => {
    callback(error, changes);
  });
}
function removeUser(id, callback) {
  userRepository.deleteUser(id, (error, changes) => {
    callback(error, changes);
  });
}
function searchUser(id, callback) {
  userRepository.findUser(id, (error, usuario) => {
    callback(error, usuario);
  });
}
module.exports = { listUsers, addUser, updateUser, removeUser, searchUser };
