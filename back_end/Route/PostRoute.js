const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const { CreatePost, getPosts, getPost, updatePost,
     deletePost, userPosts, getPostByCity, AddImages,
      getPostBySearch, getPostByCategory, getPostByType} = require('../Controllers/PostController')

const multerStorage = multer.diskStorage({
    destination:function(req,file,cb){
        const postId = req.params.postId
        const dir = path.join(__dirname,`../Images/${postId}`)
        if(fs.existsSync(dir)){
            cb(null,dir)
        }else{
            fs.mkdirSync(dir)
            cb(null,dir)
        } 
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
//,limits: { fileSize: 30 * 1000 * 1000 },
const uploads = multer({storage:multerStorage}).array('files')
router.route('/newPost/:userId').post(CreatePost)
router.route('/').get(getPosts)
router.route('/search').get(getPostBySearch)
router.route('/:postId').get(getPost)
router.route('/city/:name').get(getPostByCity)
router.route('/category/:category').get(getPostByCategory)
router.route('/type/:type').get(getPostByType)
router.route('/:id').put(uploads,updatePost)
router.route('/addImage/:postId').put(uploads,AddImages)
router.route('/delete/:id').delete(deletePost)
router.route('/:userId').get(userPosts)

module.exports = router
