const { z } = require("zod");
const userSchema = z.object({
  name: z
    .string({ required_error: "Nome é obrigatório" })
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome é muito grande"),
});
module.exports = { userSchema };
