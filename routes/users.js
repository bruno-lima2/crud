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
const { userSchema } = require("../schemas/userSchema");
const { idSchema } = require("../schemas/idSchema");
router.get("/", listUsers);
router.post("/", validateSchema(userSchema, "body"), addUser);
router.put(
  "/:id",
  validateSchema(idSchema, "params"),
  validateSchema(userSchema, "body"),
  updateUser,
);
router.delete("/:id", validateSchema(idSchema, "params"), removeUser);
router.get("/:id", validateSchema(idSchema, "params"), searchUser);
module.exports = router;
