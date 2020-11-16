var router = require("express").Router()
var workout = require("../models/models")

router.get("/api/workouts", (req, res) => {
    workout.find()
    .then(dbWorkouts => {
        res.json(dbWorkouts)
    })
    .catch(err => {
        res.json(err)
    })
})

router.get("/api/workouts/range", (req, res) => {
    workout.find({})
    .limit(5)
    .then(dbWorkouts => {
        res.json(dbWorkouts)
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router

