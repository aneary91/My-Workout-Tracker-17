const Workout = require('..models/workout.js');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/api/workouts', ({ body }, res) => {
    Workout.create({})
    .then((dbWorkout) => {
    res.json(dbWorkout);
})
.catch((message) => {
    console.error(message);
});
});

router.put('/api/workouts/:id', ({ params, body }, res) =>{
    console.log('PARAMS', body, params);

    Workout.findOneAndUpdate(
        { _id: params.id },
        {$push: { exercises: body }},
        { new: true}
    )

    .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      })
});