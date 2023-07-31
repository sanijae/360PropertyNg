const { getBlogPost, deleteBlogPost,getAllBlogPost, createBlogPost } = require('../Controllers/BlogController')

const router = require('express').Router()


router.get('/',getAllBlogPost)
router.post('/add',createBlogPost)
router.get('/:id',getBlogPost)
router.delete('/delete/:id',deleteBlogPost)

module.exports = router