const express = require('express')
const { getAllItems, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks')
const router = express.Router()


router.route('/').get(getAllItems).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
