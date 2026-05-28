function validateSchema(schema, property) {
  return (request, response, next) => {
    try {
      const validatedData = schema.parse(request[property]);
      request[property] = validatedData;
      next();
    } catch (error) {
      next(error);
    }
  };
}
module.exports = validatedSchema;
