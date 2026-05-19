function errorHandler(error, request, response, next) {
  console.error(error);
  response.status(500).json({
    success: true,
    message: error.message,
  });
}
module.exports = errorHandler;
