const express = require("express");
const { getExercises, createExercise, getNoteByID, updateExercise, deleteExercise } = require("../controllers/exerciseController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getExercises);
router.route("/create").post(protect, createExercise);
router.route("/:id").get(getNoteByID).put(protect, updateExercise).delete(protect, deleteExercise);

module.exports = router;
