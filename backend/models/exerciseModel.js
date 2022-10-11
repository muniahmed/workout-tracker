const { default: mongoose } = require("mongoose");

const exerciseSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        sets: {
            type: Number,
            required: true,
        },
        reps: {
            type: Number,
            required: true,
        },
        weight: {
            type: Number,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        }
    },
    {
        timestamps: true,
    }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;