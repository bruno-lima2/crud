const express = require("express");
const router = express.Router();
const {
  listUsers,
  addUser,
  updateUser,
  removeUser,
  searchUser,
} = require("../controllers/userControllers");
const validateSchema = require("../middlewares/validateSchema");
const { createUserSchema } = require("../schemas/userSchema");
const { createIdSchema } = require("../schemas/idSchema");
router.get("/", listUsers);
router.post("/", validateSchema(createUserSchema, "body"), addUser);
router.put(
  "/:id",
  validateSchema(createIdSchema, "params"),
  validateSchema(createUserSchema, "body"),
  updateUser,
);
router.delete("/:id", createIdSchema, "params", removeUser);
router.get("/:id", createIdSchema, "params", searchUser);
module.exports = router;
