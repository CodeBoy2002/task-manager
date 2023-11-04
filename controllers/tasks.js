const express = require('express')
const mongoose = require('mongoose')


const getAllItems = (req, res)=> {
    res.send('Get all items')
}
const createTask = (req, res)=> {
    res.json(req.body)
}
const getTask = (req, res)=> {
    res.send('Get single item')
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