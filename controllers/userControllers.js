const userService = require("../services/userServices");
function listUsers(request, response) {
  userService.listUsers((error, users) => {
    if (error) {
      return response.status(500).json({ erro: erro.message });
    }
    response.json(users);
  });
}
function addUser(request, response) {
  const { name } = request.body;
  if (!name || typeof name !== "string") {
    return response.status(400).json("Usúario inválido");
  }
  userService.addUser(name, (error, id) => {
    if (error) {
      return response.status(500).json({ erro: erro.message });
    }
    response.status(201).json({message: "Usuário criado", error: {id, name}})
  });
}
function updateUser(request, response) {
  const { id } = request.params;
  const { name } = request.body;
  if (!name || typeof name !== "string") {
    return response.status(400).json("Usuário inválido");
  }
  userService.updateUser(id, name, (error, changes) => {
    if (error) {
      return response.status(500).json({ error: error.message });
    }
    if (changes === 0) {
      return response.status(404).json({ error: "Usuário não encontrado" });
    }
    response.status(200).json({ id, name });
  });
}
function removeUser(request, response) {
  const { id } = request.params;
  userService.removeUser(id, (error, changes) => {
    if (error) {
      return response.status(500).json({ error: error.message });
    }
    if (changes === 0) {
      return response.status(404).json({ error: "Usuário não encontrado" });
    }
    response.status(204).send();
  });
}
function searchUser(request, response) {
  const { id } = request.params;
  userService.searchUser(id, (error, usuario) => {
    if (error) {
      return response.status(500).json({ error: error.message });
    }
    if (!usuario) {
      return response.status(404).json({ error: "Usuário não encontrado" });
    }
    response.json(usuario);
  });
}
module.exports = { listUsers, addUser, updateUser, removeUser, searchUser };
