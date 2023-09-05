const express = require('express')
const Blog = require('../models/blog')

const router = express.Router()

// GET requests
router.get('/', (req, res) => {
    Blog.find().sort({createdAt: -1})
        .then(result => {
            res.render('index', {title: 'Home', blogs: result})
        })
})

router.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1})
        .then(result => {
            res.render('blogs', {title: 'Blogs', blogs: result})
        })
})

router.get('/blogs/create', (req, res) => {
    res.render('createBlog', {title: 'New Blog'})
})

// POST requests
router.post('/blogs', (req, res) => {
    const blog = new Blog(req.body)

    blog.save()
        .then(() => {
            console.log('Blog Saved!')
            res.redirect('/blogs')
        })
        .catch(err => console.log(err))
})

module.exports = router