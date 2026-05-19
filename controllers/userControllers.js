const userServices = require("../services/userServices");
function listUsers(request, response) {
  userServices.listUsers((error, users) => {
    if (error) {
      return response.status(500).json({
        success: false,
        message: error.message,
      });
    }
    response.status(200).json({
      success: true,
      data: users,
    });
  });
}
function addUser(request, response) {
  const { name } = request.body;
  if (!name || typeof name !== "string") {
    return response.status(400).json({
      success: false,
      message: "Usuário inválido",
    });
  }
  userServices.addUser(name, (error, id) => {
    if (error) {
      return response.status(500).json({
        success: false,
        message: error.message,
      });
    }
    response.status(201).json({
      success: true,
      message: "Usuário criado",
      data: { id, name },
    });
  });
}
function updateUser(request, response) {
  const { id } = request.params;
  const { name } = request.body;
  if (!name || typeof name !== "string") {
    return response.status(400).json({
      success: false,
      message: "Usuário inválido",
    });
  }
  userServices.updateUser(id, name, (error, changes) => {
    if (error) {
      return response.status(500).json({
        success: false,
        message: error.message,
      });
    }
    if (changes === 0) {
      return response.status(404).json({
        success: false,
        message: "Usuário não encontrado",
      });
    }
    response.status(200).json({
      success: true,
      message: "Usuário alterado",
      data: { id, name },
    });
  });
}
function removeUser(request, response) {
  const { id } = request.params;
  userServices.removeUser(id, (error, changes) => {
    if (error) {
      return response.status(500).json({
        success: false,
        message: error.message,
      });
    }
    if (changes === 0) {
      return response.status(404).json({
        success: false,
        message: "Usuário não encontrado",
      });
    }
    response.status(204).json({
      success: true,
      message: "Usuário removido",
    });
  });
}
function searchUser(request, response) {
  const { id } = request.params;
  userServices.searchUser(id, (error, user) => {
    if (error) {
      return response.status(500).json({
        success: false,
        message: error.message,
      });
    }
    if (!user) {
      return response.status(404).json({
        success: false,
        message: "Usuário não encontrado",
      });
    }
    response.status(200).json({
      success: true,
      data: user,
    });
  });
}
module.exports = { listUsers, addUser, updateUser, removeUser, searchUser };
