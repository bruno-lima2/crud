const express = require("express");
const router = express.Router();
const {
  listUsers,
  addUser,
  updateUser,
  removeUser,
  searchUser,
} = require("../controllers/userControllers");
const { validateId } = require("../middlewares/validateId");
router.get("/", listUsers);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", removeUser);
router.get("/:id", validateId, searchUser);
module.exports = router;
