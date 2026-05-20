function errorHandler(error, request, response, next) {
  console.error(error);
  response.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Erro interno do servidor"
  });
}
module.exports = errorHandler;
