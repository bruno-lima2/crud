const { ZodError } = require("zod");
function errorHandler(error, request, response, next) {
  console.error(error);
  if (error instanceof ZodError) {
    return response.status(400).json({
      success: false,
      message: error.issues[0].message,
    });
  }
  response.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Erro interno no servidor",
  });
  next();
}
module.exports = errorHandler;
