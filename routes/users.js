const express = require("express");
const router = express.Router();
const {
  listUsers,
  searchUser,
  addUser,
  updateUser,
  removeUser,
} = require("../controllers/userControllers");
const validateSchema = require("../middlewares/validateSchema");
const { paginationSchema } = require("../schemas/paginationSchema");
const { idSchema } = require("../schemas/idSchema");
const { nameSchema } = require("../schemas/nameSchema");
router.get("/", validateSchema(paginationSchema, "query"), listUsers);
router.get("/:id", validateSchema(idSchema, "params"), searchUser);
router.post("/", validateSchema(nameSchema, "body"), addUser);
router.put(
  "/:id",
  validateSchema(idSchema, "params"),
  validateSchema(nameSchema, "body"),
  updateUser,
);
router.delete("/:id", validateSchema(idSchema, "params"), removeUser);
module.exports = router;
