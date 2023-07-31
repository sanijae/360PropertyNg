const { register, login, getUser, getUsers, updateUser, deleteUser, updateName, updatePassword, updatePhone } = require('../Controllers/UserController')

const router = require('express').Router()

router.post('/register',register)
router.post('/login',login)
router.get('/:id',getUser)
router.get('/',getUsers)
router.put('/update/:id',updateUser)
router.put('/updateName/:id',updateName)
router.put('/updatePhone/:id',updatePhone)
router.put('/updatePassword/:id',updatePassword)
router.delete('/delete/:id',deleteUser)

module.exports = router