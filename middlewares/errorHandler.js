function errorHandler(erro, request, response, next) {
  console.error(error);
  response.status(500).json({
    success: true,
    message: erro.message,
  });
}
module.exports = { errorHandler };
