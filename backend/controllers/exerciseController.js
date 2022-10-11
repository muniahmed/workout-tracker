const e = require("express");
const expressAsyncHandler = require("express-async-handler");
const Exercise = require("../models/exerciseModel");

const getExercises = expressAsyncHandler(async (req, res) => {
    const exercises = await Exercise.find({ user: req.user._id });
    res.json(exercises);
});

const createExercise = expressAsyncHandler(async (req, res) => {
    const { name, sets, reps, weight } = req.body;

    if (!name || !sets || !reps || !weight) {
        res.status(400);
        throw new Error("Please fill all fields");
    } else {
        const exercise = new Exercise({
            user: req.user._id,
            name,
            sets,
            reps,
            weight
        });

        const createdExercise = await exercise.save();

        res.status(201).json(createdExercise);
    }
});

const getNoteByID = expressAsyncHandler(async (req, res) => {
    const exercise = await Exercise.findById(req.params.id);

    if (exercise) {
        res.json(exercise);
    } else {
        res.status(404).json({ message: "Exercise not found" });
    }
});

const updateExercise = expressAsyncHandler(async (req, res) => {
    const { name, sets, reps, weight } = req.body;

    const exercise = await Exercise.findById(req.params.id);

    if (exercise.user.toString() !== req.user._id.toString()) {
        res.status(401);
        throw new Error("Cannot access this");
    }

    if (exercise) {
        exercise.name = name;
        exercise.sets = sets;
        exercise.reps = reps;
        exercise.weight = weight;

        const updatedExercise = await exercise.save();
        res.json(updatedExercise);

    } else {
        res.status(404);
        throw new Error("Exercise not found");
    }
})

const deleteExercise = expressAsyncHandler(async (req, res) => {
    const exercise = await Exercise.findById(req.params.id);

    if (exercise.user.toString() !== req.user._id.toString()) {
        res.status(401);
        throw new Error("Cannot access this");
    }

    if (exercise) {
        await exercise.remove();
        res.json({ message: "Exercise Removed" });
    } else {
        res.status(404);
        throw new Error("Exercise not found");
    }
})

module.exports = { getExercises, createExercise, getNoteByID, updateExercise, deleteExercise };
