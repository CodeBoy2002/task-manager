const express = require('express')
const mongoose = require('mongoose')
const Task = require('../models/tasks')
// const asyncWrapper = require('../middleware/')


const getAllItems = async (req, res)=> {
    try {
        const task = await Task.find({})
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const createTask = async (req, res)=> {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })    
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const getTask = async (req, res)=> {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if(!task) {
            return res.status(404).json({ msg: `No task with id: ${task}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
} 
const updateTask = async (req, res)=> {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        }) 

        if(!task) {
            return res.status(404).json({ msg: `No task with id: ${taskID}` })
        }

        res.status(200).json({ msg: task, success: true })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const deleteTask = async (req, res)=> {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })
        if(!task) {
            return res.status(404).json({ msg: `No task with id: ${taskID}` })
        }
        res.status(200).json({ msg: `Task with the id: ${taskID} is deleted`, success: true })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = {
    getAllItems,
    createTask,
    getTask,
    updateTask,
    deleteTask
}