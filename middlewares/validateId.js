const { createIdSchema } = require("../schemas/idSchema");
function validateId(request, response, next) {
  try {
    createIdSchema.parse(request.params);
  } catch (error) {
    next(error);
  }
}
module.exports = validateId;
