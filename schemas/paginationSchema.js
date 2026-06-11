const { z } = require("zod");
const paginationSchema = z.object({
  page: z.coerce
    .number()
    .int("Página deve ser um número inteiro")
    .positive("Página deve ser maior que 0")
    .default(1),
  limit: z.coerce
    .number()
    .int("Limite deve ser um número inteiro")
    .positive("Limite deve ser maior que 0")
    .max(100, "Limite deve ser no máximo 100")
    .default(10),
  name: z.string().optional(),
});
module.exports = { paginationSchema };
