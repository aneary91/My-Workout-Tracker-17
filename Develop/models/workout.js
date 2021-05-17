const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  day: { type: Date, default: () => new Date() },
  exercises: [
    {
      type: { type: String },
      weight: { type: Number },
      sets: { type: Number },
      name: { type: String },
      reps: { type: Number },
      distance: { type: Number },
      duration: { type: Number },
    },
  ],
}
);

const Workout = mongoose.model('Workout', workoutSchema);


modules.exports = Workout;
