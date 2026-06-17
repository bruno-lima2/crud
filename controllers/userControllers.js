const userServices = require("../services/userServices");
const AppError = require("../utils/AppError");
async function listUsers(request, response, next) {
  try {
    const { page = 1, name = "", limit = 100 } = request.query;
    const offset = (page - 1) * limit;
    const users = await userServices.listUsers(name, limit, offset);
    response.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
}
async function searchUser(request, response, next) {
  try {
    const { id } = request.params;
    const user = await userServices.findUserOrFail(id);
    response.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
}
async function addUser(request, response, next) {
  try {
    const { name } = request.body;
    const id = await userServices.addUser(name);
    response.status(201).json({
      success: true,
      message: "Usuário adicionado",
      data: { id, name },
    });
  } catch (error) {
    next(error);
  }
}
async function updateUser(request, response, next) {
  try {
    const { id } = request.params;
    const { name } = request.body;
    const user = await userServices.findUserOrFail(id);
    await userServices.updateUser(id, name);
    response.status(200).json({
      success: true,
      message: "Usuário atualizado",
      data: { id, name },
    });
  } catch (error) {
    next(error);
  }
}
async function removeUser(request, response, next) {
  try {
    const { id } = request.params;
    const user = await userServices.findUserOrFail(id);
    await userServices.removeUser(id);
    response.status(204).send();
  } catch (error) {
    next(error);
  }
}
module.exports = { listUsers, searchUser, addUser, updateUser, removeUser };
