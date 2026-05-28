const { z } = require("zod");
const createIdSchema = z.object({
  id: z.coerce
    .number({ invalid_type_error: "o ID deve ser um número" })
    .int("o ID deve ser inteiro")
    .positive("o ID é inválido"),
});
module.exports = { createIdSchema };
