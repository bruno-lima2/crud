const { z } = require("zod");
const createIdSchema = z.object({
  id: z.coerce
    .number({ invalid_type_error: "ID deve ser um número" })
    .int("ID deve ser um número inteiro")
    .positive("ID inválido"),
});
module.exports = { createIdSchema };
