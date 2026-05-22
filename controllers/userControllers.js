const userServices = require("../services/userServices");
const AppError = require("../utils/AppError");
function listUsers(request, response, next) {
  userServices.listUsers((error, users) => {
    if (error) {
      return next(error);
    }
    response.status(200).json({
      success: true,
      data: users,
    });
  });
}
function addUser(request, response, next) {
  const { name } = request.body;
  if (!name || typeof name !== "string") {
    return next(new AppError(400, "Usuário inválido"));
  }
  userServices.addUser(name, (error, id) => {
    if (error) {
      return next(error);
    }
    response.status(201).json({
      success: true,
      message: "Usuário adicionado",
      data: { id, name },
    });
  });
}
function updateUser(request, response, next) {
  const { id } = request.params;
  const { name } = request.body;
  if (!name || typeof name !== "string") {
    return next(new AppError(400, "Usuário inválido"));
  }
  userServices.updateUser(id, name, (error, changes) => {
    if (error) {
      return next(error);
    }
    if (changes === 0) {
      return next(new AppError(404, "Usuário não encontrado"));
    }
    response.status(200).json({
      success: true,
      message: "Usuário atualizado",
      data: { id, name },
    });
  });
}
function removeUser(request, response, next) {
  const { id } = request.params;
  userServices.removeUser(id, (error, changes) => {
    if (error) {
      return next(error);
    }
    if (changes === 0) {
      return next(new AppError(404, "Usuário não encontrado"));
    }
    response.status(204).send();
  });
}
function searchUser(request, response, next) {
  const { id } = request.params;
  userServices.searchUser(id, (error, user) => {
    if (error) {
      return next(error);
    }
    if (!user) {
      return next(new AppError(404, "Usuário não encontrado"));
    }
    response.status(200).json({
      success: true,
      data: user,
    });
  });
}
module.exports = { listUsers, addUser, updateUser, removeUser, searchUser };
