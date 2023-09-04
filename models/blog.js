const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    }
}, {timestamps: true})

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog