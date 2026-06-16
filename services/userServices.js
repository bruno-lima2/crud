const userRepository = require("../repository/userRepository");
async function listUsers(name, limit, offset) {
  const users = await userRepository.showUsers(name, limit, offset);
  return users;
}
async function searchUser(id) {
  const user = await userRepository.findUser(id);
  return user;
}
async function addUser(name) {
  const id = await userRepository.createUser(name);
  return id;
}
async function updateUser(id, name) {
  const changes = await userRepository.changeUser(id, name);
  return changes;
}
async function removeUser(id) {
  const changes = await userRepository.deleteUser(id);
  return changes;
}
module.exports = { listUsers, searchUser, addUser, updateUser, removeUser };
