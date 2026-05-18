function validateId(request, response, next) {
  const { id } = request.params;
  if (!id || isNaN(id)) {
    return response.status(400).json("ID inválido");
  }
  next();
}
module.exports = { validateId };
