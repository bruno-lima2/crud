const { z } = require("zod");
const createUserSchema = z.object({
  name: z
    .string({
      required_error: "Nome é obrigatório",
    })
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome muito grande"),
});
module.exports = { createUserSchema };
