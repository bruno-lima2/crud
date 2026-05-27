const userServices = require("../services/userServices");
const AppError = require("../utils/AppError");
const { createUserSchema } = require("../schemas/userSchema");
async function listUsers(request, response, next) {
  try {
    const users = await userServices.listUsers();
    response.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return next(error);
  }
}
async function addUser(request, response, next) {
  try {
    const validatedData = createUserSchema.parse(request.body);
    const id = await userServices.addUser(validatedData.name);
    response.status(201).json({
      success: true,
      message: "Usuário adicionado",
      data: { id, name: validatedData.name },
    });
  } catch (error) {
    return next(error);
  }
}
async function updateUser(request, response, next) {
  try {
    const { id } = request.params;
    const validatedData = createUserSchema.parse(request.body);
    const changes = await userServices.updateUser(id, validatedData.name);
    if (changes === 0) {
      throw new AppError(404, "Usuário não encontrado");
    }
    response.status(200).json({
      success: true,
      message: "Usuário atualizado",
      data: { id, name: validatedData.name },
    });
  } catch (error) {
    return next(error);
  }
}
async function removeUser(request, response, next) {
  try {
    const { id } = request.params;
    const changes = await userServices.removeUser(id);
    if (changes === 0) {
      throw new AppError(404, "Usuário não encontrado");
    }
    response.status(204).send();
  } catch (error) {
    return next(error);
  }
}
async function searchUser(request, response, next) {
  try {
    const { id } = request.params;
    const user = await userServices.searchUser(id);
    if (!user) {
      throw new AppError(404, "Usuário não encontrado");
    }
    response.status(200).json({
      success: true,
      data: { user },
    });
  } catch (error) {
    return next(error);
  }
}
module.exports = { listUsers, addUser, updateUser, removeUser, searchUser };
