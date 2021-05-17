const Workout = require('..models/workout.js');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/api/workouts', ({ body }) => {
    Workout.create({})
    .then((dbWorkout) => {
    res.json(dbWorkout);
})
.catch((message) => {
    console.error(message);
})