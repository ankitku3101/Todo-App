const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ankitku3101:fazex31@cluster0.z0igzbn.mongodb.net/todo_app')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}