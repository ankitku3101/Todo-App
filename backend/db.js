const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI
mongoose.connect(uri)

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}