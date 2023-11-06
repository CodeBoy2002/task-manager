const express = require('express')
const mongoose = require('mongoose')
const Task = require('../models/tasks')


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
const updateTask = (req, res)=> {
    res.send('Update tasks')
}
const deleteTask = (req, res)=> {
    res.send('delete task')
}

module.exports = {
    getAllItems,
    createTask,
    getTask,
    updateTask,
    deleteTask
}