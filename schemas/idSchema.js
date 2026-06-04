const { z } = require("zod");
const idSchema = z.object({
  id: z.coerce
    .number({ invalid_type_error: "ID deve ser um número" })
    .int("ID deve ser um número inteiro")
    .positive("ID é inválido"),
});
module.exports = { idSchema };
