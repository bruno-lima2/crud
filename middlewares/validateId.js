const AppError = require("../utils/AppError")
function validateId(request, response, next) {
  const { id } = request.params;
  if (!id || isNaN(id)) {
    return next(new AppError("ID inválido", 400))
  }
  next();
}
module.exports = validateId;
