const express = require('express')
const router = express.Router()
const {createWorkout, getWorkouts, getWorkout, deleteWorkout,updateWorkout} = require('../controllers/workoutController')


router.get('/',getWorkouts)
// get a single workout
router.get('/:id',getWorkout)
// post a new workout
router.post('/', createWorkout)


//DELETE A WORKOUT
router.delete('/:id',deleteWorkout)

//Update a workout
router.patch('/:id',updateWorkout)


module.exports = router
