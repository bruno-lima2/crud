const AppError = require("../utils/AppError");
function validateId(request, response, next) {
  const { id } = request.params;
  if (!id || isNaN(id)) {
    throw new AppError(400, "ID inválido");
  }
  next();
}
module.exports = validateId;
