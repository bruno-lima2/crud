const { z } = require("zod");
const createUserSchema = z.object({
  name: z
    .string({ required_error: "O nome é obrigatório" })
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(100, "O nome é muito grande"),
});
module.exports = { createUserSchema };
